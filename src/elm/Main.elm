module Main exposing (..)

import Html exposing (text, programWithFlags, div, button, input, a, br, form, Html)
import Ports exposing (..)
import Types exposing (..)
import Html.Events exposing (onInput, onClick, onSubmit, keyCode)
import Debug
import Html
import Dict
import Task
import Time
import Tuple
import Set
import Material.Elevation as Elevation
import List.Extra exposing (find)
import Material.Typography as Typo
import Html.Attributes exposing (placeholder, style, target, href)
import Material
import Material.Textfield as Textfield
import Material.Layout as Layout
import Material.List as MList
import Material.Snackbar as Snackbar
import Material.Helpers exposing (map1st, map2nd)
import Material.Icon as Icon
import Material.Toggles as Toggles
import Material.Options as MOpts
import Regex exposing (regex, contains)
import Json.Decode as Json
import Material.Button as Button
import Material.Grid exposing (grid, cell, size, Device(..))
import Material.Color as Color
import Dict


emptyLogin =
    LoggedOut { email = "", password = "" }


standardButton index model attrs contents =
    Button.render Mdl
        [ index ]
        model.mdl
        (List.concat
            [ attrs
            , [ Button.raised
              , MOpts.css "margin" "1em"
              ]
            ]
        )
        contents


linkRgx =
    regex "(http(s)?:\\/\\/.)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)"


onEnterTextfield : Msg -> Textfield.Property Msg
onEnterTextfield msg =
    let
        isEnter code =
            if code == 13 then
                Json.succeed msg
            else
                Json.fail "not ENTER"
    in
        Textfield.on "keydown" (Json.andThen isEnter keyCode)


init : Flags -> ( Model, Cmd Msg )
init { user } =
    let
        session =
            user
                |> Maybe.map
                    (\{ email, uid } ->
                        LoggedIn
                            { email = email
                            , uid = uid
                            }
                    )
                |> Maybe.withDefault emptyLogin

        filters =
            [ { values =
                    { color = "black"
                    , icon = "nature_people"
                    , name = "outdoors"
                    }
              , timestamp = 1482088371823
              , guid = "abc"
              }
            ]

        initialModel =
            { links = []
            , selectedFilters =
                Dict.empty
                -- FIXME: remove
            , assignedFilters = Dict.empty
            , filterAssignments = Dict.empty
            , renderedLinks = []
            , linkInputText = ""
            , linkInputValidation = Nothing
            , filterInputText = ""
            , session = session
            , mdl = Material.model
            , snackbar = Snackbar.model
            , page = HomePage
            , filters = filters
            }
    in
        ( initialModel, Cmd.none )


addSnackbar : String -> String -> Model -> ( Model, Cmd Msg )
addSnackbar contents header model =
    let
        snackbar =
            Snackbar.snackbar () contents header
    in
        Snackbar.add snackbar model.snackbar |> mapSnackbarTuple model


mapSnackbarTuple model tuple =
    tuple
        |> map1st (\s -> { model | snackbar = s })
        |> map2nd (Cmd.map Snack)


setClickedAt link =
    Timestamp (\timestamp -> ClickedAt link timestamp)


linkView model index link =
    let
        linkHref =
            if String.contains "//" link.href then
                link.href
            else
                "//" ++ link.href
    in
        [ MList.li [ Elevation.e2 ]
            [ MList.content []
                [ Button.render Mdl
                    [ 3, 0, index ]
                    model.mdl
                    [ Button.minifab
                    , Button.ripple
                    , Button.onClick <| DeleteLink link.guid
                    ]
                    [ Icon.i "delete" ]
                , Button.render Mdl
                    [ 3, 1, index ]
                    model.mdl
                    [ Button.minifab
                    , Button.ripple
                    , Button.onClick <| ChangePage (AssignFilterPage link.guid)
                    , MOpts.css "marginRight" "1.5em"
                    ]
                    [ Icon.i "brush" ]
                , a
                    [ target "_blank"
                    , href linkHref
                    , style [ ( "display", "inline-block" ) ]
                    , onClick <| setClickedAt link
                    ]
                    [ Icon.view "subdirectory_arrow_right" [ Icon.size24 ] ]
                ]
            , MList.content2 []
                [ div
                    [ style
                        [ ( "overflow", "hidden" )
                        , ( "textOverflow", "ellipsis" )
                        , ( "max-width", "25vw" )
                        , ( "whiteSpace", "nowrap" )
                        ]
                    ]
                    [ text link.href ]
                ]
            ]
        ]


homePageView model =
    let
        { sessionData } =
            model
    in
        Layout.render Mdl
            model.mdl
            [ Layout.fixedHeader
            ]
            { header =
                [ Layout.row []
                    [ text sessionData.email
                    , Layout.spacer
                    , standardButton 0
                        model
                        [ Button.onClick LogOut
                        , Button.accent
                        ]
                        [ text "sign out" ]
                    ]
                ]
            , main =
                [ br [] []
                , div
                    [ style
                        [ ( "maxWidth", "90vw" )
                        , ( "margin", "0 auto" )
                        , ( "text-align", "center" )
                        ]
                    ]
                    [ grid []
                        [ cell [ size Desktop 4, size Tablet 3 ]
                            [ Textfield.render Mdl
                                [ 3 ]
                                model.mdl
                                [ Textfield.label "search"
                                , Textfield.onInput Search
                                ]
                            ]
                        , cell [ size Desktop 4, size Tablet 3 ]
                            [ Textfield.render Mdl
                                [ 2 ]
                                model.mdl
                                [ Textfield.label "enter link"
                                , model.linkInputValidation
                                    |> Maybe.map Textfield.error
                                    |> Maybe.withDefault MOpts.nop
                                , Textfield.onInput SetLinkInputText
                                , onEnterTextfield CreateLink
                                ]
                            ]
                        , cell [ size Desktop 4, size Tablet 2 ]
                            [ standardButton 1
                                model
                                [ Button.onClick CreateLink ]
                                [ text "submit link" ]
                            ]
                        ]
                    , MList.ul [ MOpts.css "margin-top" "0" ]
                        (List.indexedMap (linkView model)
                            model.renderedLinks
                            |> List.concat
                        )
                    ]
                ]
            , drawer =
                [ Layout.navigation []
                    [ Layout.row []
                        [ Layout.link
                            [ Layout.onClick <| ChangePage SelectFilterPage
                            ]
                            [ text "filters" ]
                        ]
                    ]
                ]
            , tabs = ( [], [] )
            }


filterToHtml : (String -> Msg) -> Material.Model -> ToggledFilters -> Int -> Filter -> Html Msg
filterToHtml toggleMsg mdl toggledFilters index filter =
    let
        { name } =
            filter.values

        isSelected =
            toggledFilters
                |> Dict.get name
                |> Maybe.withDefault False

        checkbox =
            Toggles.checkbox Mdl
                [ 0, index ]
                mdl
                [ Toggles.onClick <| toggleMsg name
                , Toggles.ripple
                , Toggles.value isSelected
                ]
                []
    in
        div []
            [ checkbox
            , text name
            ]


selectFilterView : LoggedInView
selectFilterView model =
    div []
        [ button [ onClick <| ChangePage HomePage ] [ text "back" ]
        , text "filters"
        , div []
            (List.indexedMap (filterToHtml SelectFilter model.mdl model.selectedFilters) model.filters)
        ]


createFilterView : LoggedInView
createFilterView model =
    div []
        [ text "create filter"
        , input [ onInput SetFilterInputText ] []
        , button [ onClick CreateFilter ] [ text "save" ]
        ]


assignFilterView : String -> LoggedInView
assignFilterView guid model =
    div []
        [ button [ onClick <| ChangePage HomePage ] [ text "back" ]
        , text "assign filter view"
        , div []
            (List.indexedMap (filterToHtml (AssignFilter guid) model.mdl model.assignedFilters)
                model.filters
            )
        , text guid
        ]


view model =
    let
        content =
            case model.session of
                LoggedIn sessionData ->
                    let
                        loggedInModel =
                            { sessionData = sessionData
                            , links = model.links
                            , renderedLinks = model.renderedLinks
                            , linkInputText = model.linkInputText
                            , linkInputValidation = model.linkInputValidation
                            , filterInputText = model.filterInputText
                            , mdl = model.mdl
                            , snackbar = model.snackbar
                            , page = model.page
                            , filters = model.filters
                            , selectedFilters = model.selectedFilters
                            , assignedFilters = model.assignedFilters
                            , filterAssignments = model.filterAssignments
                            }
                    in
                        case model.page of
                            HomePage ->
                                homePageView loggedInModel

                            SelectFilterPage ->
                                selectFilterView loggedInModel

                            CreateFilterPage ->
                                createFilterView loggedInModel

                            AssignFilterPage guid ->
                                assignFilterView guid loggedInModel

                LoggedOut loginForm ->
                    MOpts.styled div
                        [ Typo.center ]
                        [ grid [ MOpts.center ]
                            [ cell
                                [ size All 12
                                , size Tablet 8
                                , size Phone 4
                                ]
                                [ MOpts.styled div
                                    [ Typo.display3
                                    ]
                                    [ text "Link Saver"
                                    ]
                                ]
                            , cell
                                [ size All 2
                                , size Phone 4
                                ]
                                [ Textfield.render Mdl
                                    [ 0 ]
                                    model.mdl
                                    [ Textfield.label "email"
                                    , Textfield.floatingLabel
                                    , onEnterTextfield LogIn
                                    , Textfield.text_
                                    , Textfield.onInput (\email -> SetLoginForm { loginForm | email = email })
                                    ]
                                ]
                            , cell
                                [ size All 2
                                , size Phone 4
                                ]
                                [ Textfield.render Mdl
                                    [ 1 ]
                                    model.mdl
                                    [ Textfield.label "password"
                                    , onEnterTextfield LogIn
                                    , Textfield.floatingLabel
                                    , Textfield.password
                                    , Textfield.onInput (\password -> SetLoginForm { loginForm | password = password })
                                    ]
                                ]
                            , cell
                                [ size All 2
                                , size Phone 4
                                ]
                                [ div [ style [ ( "textAlign", "center" ) ] ]
                                    [ standardButton 2
                                        model
                                        [ Button.onClick LogIn ]
                                        [ text "register/login" ]
                                    ]
                                ]
                            ]
                        ]
    in
        div []
            [ content
            , Snackbar.view model.snackbar |> Html.map Snack
            ]


mapLoggedIn : (SessionData -> SessionData) -> Session -> Session
mapLoggedIn mapper session =
    case session of
        LoggedIn loggedInModel ->
            LoggedIn <| mapper loggedInModel

        _ ->
            session


defaultLoggedOut : a -> (SessionData -> a) -> Session -> a
defaultLoggedOut defaultLoggedOut loggedInMapper session =
    case session of
        LoggedIn loggedInModel ->
            loggedInMapper loggedInModel

        _ ->
            defaultLoggedOut


toggleFilter : ToggledFilters -> String -> ( Cmd Msg, Cmd Msg ) -> ( ToggledFilters, Cmd Msg )
toggleFilter toggledFilters filterGuid commands =
    toggledFilters
        |> Dict.get filterGuid
        |> (\maybeIsSelected ->
                case maybeIsSelected of
                    Just isSelected ->
                        ( Dict.remove filterGuid toggledFilters, Tuple.first commands )

                    Nothing ->
                        ( Dict.insert filterGuid True toggledFilters, Tuple.second commands )
           )


update msg model =
    case msg of
        SetFilterInputText filterInputText ->
            ( { model | filterInputText = filterInputText }, Cmd.none )

        SelectFilter filterGuid ->
            let
                selectedFilters =
                    toggleFilter model.selectedFilters
                        filterGuid
                        ( Cmd.none, Cmd.none )
                        |> Tuple.first
            in
                ( { model | selectedFilters = selectedFilters }, Cmd.none )

        AssignFilter linkGuid filterGuid ->
            case model.session of
                LoggedIn session ->
                    let
                        filterAssignmentPayload =
                            { guid = Nothing
                            , values = { filterGuid = filterGuid, linkGuid = linkGuid }
                            , uid = session.uid
                            }

                        commands =
                            ( Cmd.none
                            , createFilterAssignment filterAssignmentPayload
                            )

                        assignedFilters =
                            toggleFilter model.assignedFilters filterGuid commands

                        filterAssignmentsUpdate =
                            model.filterAssignments
                                |> Dict.get filterGuid
                                |> Maybe.map
                                    (always
                                        ( Dict.remove filterGuid model.filterAssignments
                                        , Cmd.none
                                        )
                                    )
                                |> Maybe.withDefault
                                    ( Dict.insert filterGuid
                                        NoAssignment
                                        model.filterAssignments
                                    , Cmd.none
                                    )
                    in
                        ( { model
                            | assignedFilters = Tuple.first assignedFilters
                          }
                        , Tuple.second assignedFilters
                        )

                _ ->
                    ( model, Cmd.none )

        ChangePage page ->
            ( { model | page = page }, Cmd.none )

        Search query ->
            let
                renderedLinks =
                    if query == "" then
                        model.links
                    else
                        model.links
                            |> List.filter (.href >> String.contains query)
            in
                ( { model | renderedLinks = renderedLinks }, Cmd.none )

        Timestamp msgr ->
            ( model, Task.perform msgr Time.now )

        DeleteLink guid ->
            ( model, deleteLink guid )

        Snack snackMsg ->
            Snackbar.update snackMsg model.snackbar
                |> mapSnackbarTuple model

        ClickedAt link timestamp ->
            let
                newLink =
                    { link | clickedAt = round timestamp }
            in
                ( model, updateLink newLink )

        SetLoginForm loginForm ->
            let
                newModel =
                    case model.session of
                        LoggedOut oldForm ->
                            { model | session = LoggedOut loginForm }

                        _ ->
                            model
            in
                ( newModel, Cmd.none )

        SetLinks links ->
            ( { model
                | links = links
                , renderedLinks = links
              }
            , Cmd.none
            )

        SetLinkInputText linkInputText ->
            let
                linkInputValidation =
                    if (contains linkRgx linkInputText) || linkInputText == "" then
                        Nothing
                    else
                        Just "Must provide a valid link"
            in
                ( { model
                    | linkInputValidation = linkInputValidation
                    , linkInputText = linkInputText
                  }
                , Cmd.none
                )

        CreateFilter ->
            let
                cmd =
                    case model.session of
                        LoggedIn { uid } ->
                            createFilter
                                { uid = uid
                                , values =
                                    { color = "blue"
                                    , icon = "TODO"
                                    , name = model.filterInputText
                                    }
                                }

                        _ ->
                            Cmd.none
            in
                ( model, cmd )

        CreateLink ->
            let
                cmd =
                    model.session
                        |> defaultLoggedOut Cmd.none
                            (\{ uid } ->
                                let
                                    validInputTextCmd =
                                        (find (\link -> link.href == model.linkInputText) model.links)
                                            |> Maybe.map (\link -> Task.perform setClickedAt (Task.succeed link))
                                            |> Maybe.withDefault (createLink { href = model.linkInputText, uid = uid })
                                in
                                    if model.linkInputText == "" then
                                        Cmd.none
                                    else
                                        model.linkInputValidation
                                            |> Maybe.map (always Cmd.none)
                                            |> Maybe.withDefault validInputTextCmd
                            )
            in
                ( model, cmd )

        LogIn ->
            let
                cmd =
                    case model.session of
                        LoggedOut loginForm ->
                            createUser loginForm

                        _ ->
                            Cmd.none
            in
                ( model, cmd )

        LogOut ->
            let
                cmd =
                    case model.session of
                        LoggedIn loggedInModel ->
                            logOut loggedInModel.uid

                        _ ->
                            Cmd.none
            in
                ( model, cmd )

        LogOutResponse err ->
            let
                _ =
                    Maybe.map (\str -> (Debug.log "log out error" str))
            in
                ( { model | session = emptyLogin }, Cmd.none )

        Mdl mdlMessage ->
            Material.update mdlMessage model

        CreateUserResponse response ->
            case model.session of
                LoggedOut loginForm ->
                    case response of
                        Ok uid ->
                            ( { model
                                | session =
                                    LoggedIn
                                        { email = loginForm.email
                                        , uid = uid
                                        }
                              }
                            , Cmd.none
                            )

                        Err message ->
                            addSnackbar "ERROR"
                                message
                                { model
                                    | session = LoggedOut loginForm
                                }

                LoggedIn loggedInModel ->
                    ( model, Cmd.none )


resultFromRecord : ok -> ResultRecord err ok -> Result err ok
resultFromRecord default record =
    let
        ok =
            record.ok
                |> Maybe.withDefault default
    in
        record.err
            |> Maybe.map Err
            |> Maybe.withDefault (Ok ok)


main =
    programWithFlags
        { init = init
        , update = update
        , subscriptions =
            \model ->
                Sub.batch
                    [ links SetLinks
                    , createUserResponse (resultFromRecord "" >> CreateUserResponse)
                    , logOutResponse LogOutResponse
                    , Material.subscriptions Mdl model
                    ]
        , view = view
        }
