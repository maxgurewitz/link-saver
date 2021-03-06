module Main exposing (..)

import Html exposing (text, programWithFlags, div, button, input, a, br, form, Html, span)
import Html.Attributes exposing (class)
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
import Json.Decode as Json


onClickNoPropagate message =
    MOpts.onWithOptions "click"
        { stopPropagation = True, preventDefault = False }
        (Json.succeed message)


emptyLogin =
    LoggedOut { email = "", password = "" }


standardButton index model attrs contents =
    Button.render Mdl
        [ 0, index ]
        model.mdl
        (List.concat
            [ attrs
            , [ Button.raised
              , MOpts.cs "standard-button"
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
        MOpts.on "keydown" (Json.andThen isEnter keyCode)


nsfwId =
    "3"


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
                    { name = "funny"
                    }
              , timestamp = 0
              , guid = "1"
              }
            , { values =
                    { name = "work"
                    }
              , timestamp = 0
              , guid = "2"
              }
            , { values =
                    { name = "nsfw"
                    }
              , timestamp = 0
              , guid = nsfwId
              }
            ]

        initialModel =
            { links = []
            , filterAssignments = Dict.empty
            , renderedLinks = []
            , linkInputText = ""
            , linkInputValidation = Nothing
            , filterInputText = ""
            , searchInputText = ""
            , session = session
            , mdl = Material.model
            , snackbar = Snackbar.model
            , page = HomePage
            , filters = filters
            , highlightedLink = Nothing
            , showNsfw = False
            , appliedLinksPostFilter = False
            , initializedFilterAssignments = False
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


protocolRgx =
    regex "(.*:)?//"


targetLink href =
    if contains protocolRgx href then
        href
    else
        ("//" ++ href)


linkView model index link =
    let
        isHighlighted =
            model.highlightedLink
                |> Maybe.map (\guid -> link.guid == guid)
                |> Maybe.withDefault False

        linkContainerClass =
            if isHighlighted then
                "highlighted-link"
            else
                ""
    in
        [ a [ onClick <| SetHighlightedLink link ]
            [ MList.li
                [ Elevation.e2
                , MOpts.cs linkContainerClass
                ]
                [ MList.content []
                    [ Button.render Mdl
                        [ 1, 0, index ]
                        model.mdl
                        [ Button.icon
                        , Button.ripple
                        , onClickNoPropagate <| DeleteLink link.guid
                        ]
                        [ Icon.i "delete" ]
                    , Button.render Mdl
                        [ 1, 1, index ]
                        model.mdl
                        [ Button.icon
                        , Button.ripple
                        , onClickNoPropagate <| ChangePage (AssignFilterPage link)
                        , MOpts.cs "link-icon-right"
                        ]
                        [ Icon.i "brush" ]
                    ]
                , MList.content2 []
                    [ div [ class "link-href" ] [ text link.href ]
                    ]
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
                    ]
                ]
            , main =
                [ br [] []
                , div [ class "centered-container" ]
                    [ grid []
                        [ cell [ size Desktop 4, size Tablet 3 ]
                            [ Textfield.render Mdl
                                [ 3 ]
                                model.mdl
                                [ Textfield.label "search"
                                , MOpts.onInput Search
                                , Textfield.value model.searchInputText
                                ]
                                []
                            ]
                        , cell [ size Desktop 4, size Tablet 3 ]
                            [ Textfield.render Mdl
                                [ 2 ]
                                model.mdl
                                [ Textfield.label "enter link"
                                , model.linkInputValidation
                                    |> Maybe.map Textfield.error
                                    |> Maybe.withDefault MOpts.nop
                                , MOpts.onInput SetLinkInputText
                                , Textfield.value model.linkInputText
                                , onEnterTextfield CreateLink
                                ]
                                []
                            ]
                        , cell [ size Desktop 4, size Tablet 2 ]
                            [ standardButton 1
                                model
                                [ MOpts.onClick CreateLink ]
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
                [ Toggles.switch Mdl
                    [ 0 ]
                    model.mdl
                    [ Toggles.value model.showNsfw
                    , MOpts.onToggle ToggleNsfw
                    , MOpts.cs "drawer-item"
                    ]
                    [ text
                        <| if model.showNsfw then
                            "NSFW"
                           else
                            "Work Friendly"
                    ]
                , standardButton 0
                    model
                    [ MOpts.onClick LogOut
                    , Button.accent
                    ]
                    [ text "sign out" ]
                ]
            , tabs = ( [], [] )
            }


filterAssignmentId filterGuid linkGuid =
    filterGuid ++ "," ++ linkGuid


filterAssignmentToHtml : String -> LoggedInModel -> Int -> Filter -> Html Msg
filterAssignmentToHtml linkGuid model index filter =
    let
        conditionalProps =
            model.filterAssignments
                |> Dict.get (filterAssignmentId filter.guid linkGuid)
                |> Maybe.map
                    (\filterAssignmentStatus ->
                        case filterAssignmentStatus of
                            FilterAssigned filterAssignment ->
                                [ Toggles.value True, Toggles.ripple ]

                            AssignmentInProgress assignmentPayload ->
                                [ Toggles.value False, Toggles.disabled ]
                    )
                |> Maybe.withDefault [ Toggles.value False, Toggles.ripple ]

        checkbox =
            Toggles.checkbox Mdl
                [ 0, index ]
                model.mdl
                (List.concat
                    [ conditionalProps
                    , [ MOpts.onToggle <| AssignFilter linkGuid filter.guid
                      , MOpts.css "width" "initial"
                      ]
                    ]
                )
                []
    in
        MList.li []
            [ MList.content []
                [ checkbox
                , div
                    [ style [ ( "marginLeft", "1em" ) ]
                    ]
                    [ text filter.values.name ]
                ]
            ]


createFilterView : LoggedInView
createFilterView model =
    div []
        [ text "create filter"
        , input [ onInput SetFilterInputText ] []
        , button [ onClick CreateFilter ] [ text "save" ]
        ]


assignFilterView : Link -> LoggedInView
assignFilterView link model =
    div
        [ class "centered-container no-header"
        ]
        [ div
            [ style
                [ ( "display", "flex" )
                , ( "justifyContent", "space-between" )
                ]
            ]
            [ Button.render Mdl
                [ 2 ]
                model.mdl
                [ Button.raised
                , MOpts.onClick <| ChangePage HomePage
                , MOpts.cs "back-button"
                ]
                [ text "back" ]
            , div [ class "overflow-ellipsis-container" ]
                [ div [ class "overflow-ellipsis" ] [ text link.href ]
                ]
            ]
        , MList.ul []
            (List.indexedMap (filterAssignmentToHtml link.guid model)
                model.filters
            )
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
                            , searchInputText = model.searchInputText
                            , mdl = model.mdl
                            , snackbar = model.snackbar
                            , page = model.page
                            , filters = model.filters
                            , highlightedLink = model.highlightedLink
                            , showNsfw = model.showNsfw
                            , appliedLinksPostFilter = model.appliedLinksPostFilter
                            , initializedFilterAssignments = model.initializedFilterAssignments
                            , filterAssignments = model.filterAssignments
                            }
                    in
                        case model.page of
                            HomePage ->
                                homePageView loggedInModel

                            CreateFilterPage ->
                                createFilterView loggedInModel

                            AssignFilterPage link ->
                                assignFilterView link loggedInModel

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
                                    , MOpts.onInput (\email -> SetLoginForm { loginForm | email = email })
                                    ]
                                    []
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
                                    , MOpts.onInput (\password -> SetLoginForm { loginForm | password = password })
                                    ]
                                    []
                                ]
                            , cell
                                [ size All 2
                                , size Phone 4
                                ]
                                [ div [ style [ ( "textAlign", "center" ) ] ]
                                    [ standardButton 2
                                        model
                                        [ MOpts.onClick LogIn ]
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


linkHasFilter filterAssignments filterId linkId =
    Dict.get (filterAssignmentId filterId linkId)
        filterAssignments
        |> Maybe.map (always True)
        |> Maybe.withDefault False


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    let
        updaters =
            [ mainUpdate, linkUpdate ]
    in
        List.foldl
            (\updater ( memoModel, memoCmd ) ->
                let
                    ( newModel, newCmd ) =
                        updater msg memoModel
                in
                    ( newModel, Cmd.batch [ newCmd, memoCmd ] )
            )
            ( model, Cmd.none )
            updaters


linkUpdate : Msg -> Model -> ( Model, Cmd Msg )
linkUpdate msg model =
    let
        shouldApplyPostFilter =
            (not model.appliedLinksPostFilter) && model.initializedFilterAssignments

        renderedLinks =
            if shouldApplyPostFilter then
                List.filter
                    (\link ->
                        let
                            safeForWork =
                                (not (linkHasFilter model.filterAssignments nsfwId link.guid))
                        in
                            model.showNsfw || safeForWork
                    )
                    model.links
                    |> queryLinks model
            else
                model.renderedLinks
    in
        ( { model
            | renderedLinks = renderedLinks
            , appliedLinksPostFilter = shouldApplyPostFilter
          }
        , Cmd.none
        )


queryLinks : Model -> List Link -> List Link
queryLinks model links =
    let
        toMatch =
            model.searchInputText
                |> String.toLower
                |> String.split " "

        toMatchSet =
            Set.fromList toMatch

        filterIdsForWord =
            List.foldl
                (\word memo ->
                    if word == "" then
                        memo
                    else
                        Dict.insert word
                            ((List.filter
                                (\filter ->
                                    String.contains word (String.toLower filter.values.name)
                                )
                                model.filters
                             )
                                |> List.map .guid
                            )
                            memo
                )
                Dict.empty
                toMatch
    in
        if model.searchInputText == "" then
            links
        else
            List.filter
                (\link ->
                    List.foldl
                        (\word isMatch ->
                            let
                                matchesHref =
                                    (String.contains word (String.toLower link.href))

                                filterIds =
                                    filterIdsForWord
                                        |> Dict.get word
                                        |> Maybe.withDefault []

                                matchesFilter =
                                    List.foldl
                                        (\filterId memo ->
                                            memo || (linkHasFilter model.filterAssignments filterId link.guid)
                                        )
                                        False
                                        filterIds
                            in
                                isMatch && (matchesHref || matchesFilter)
                        )
                        True
                        toMatch
                )
                links


mainUpdate : Msg -> Model -> ( Model, Cmd Msg )
mainUpdate msg model =
    case msg of
        ToggleNsfw ->
            ( { model
                | showNsfw = not model.showNsfw
                , appliedLinksPostFilter = False
              }
            , Cmd.none
            )

        SetHighlightedLink link ->
            let
                { guid } =
                    link

                ( highlightedLink, cmd ) =
                    model.highlightedLink
                        |> Maybe.map
                            (\highlightedGuid ->
                                if highlightedGuid == guid then
                                    ( Nothing, open (targetLink link.href) )
                                else
                                    ( Just guid, Cmd.none )
                            )
                        |> Maybe.withDefault ( Just guid, Cmd.none )
            in
                ( { model | highlightedLink = highlightedLink }, cmd )

        SetFilterInputText filterInputText ->
            ( { model
                | filterInputText = filterInputText
                , initializedFilterAssignments =
                    True
              }
            , Cmd.none
            )

        SetFilterAssignments filterAssignments ->
            let
                newFilterAssignments =
                    filterAssignments
                        |> List.map
                            (\filterAssignment ->
                                let
                                    { linkGuid, filterGuid } =
                                        filterAssignment.values
                                in
                                    ( filterAssignmentId filterGuid linkGuid
                                    , FilterAssigned filterAssignment
                                    )
                            )
                        |> Dict.fromList
            in
                ( { model
                    | filterAssignments = newFilterAssignments
                    , initializedFilterAssignments = True
                  }
                , Cmd.none
                )

        AssignFilter linkGuid filterGuid ->
            case model.session of
                LoggedIn session ->
                    let
                        filterAssignmentPayload =
                            { values = { filterGuid = filterGuid, linkGuid = linkGuid }
                            , uid = session.uid
                            }

                        faId =
                            filterAssignmentId filterGuid linkGuid

                        filterAssignmentsUpdate =
                            model.filterAssignments
                                |> Dict.get faId
                                |> Maybe.map
                                    (\filterAssignmentStatus ->
                                        case filterAssignmentStatus of
                                            FilterAssigned filterAssignment ->
                                                ( Dict.remove faId model.filterAssignments
                                                , deleteFilterAssignment filterAssignment.guid
                                                )

                                            _ ->
                                                ( model.filterAssignments, Cmd.none )
                                    )
                                |> Maybe.withDefault
                                    ( Dict.insert filterGuid
                                        (AssignmentInProgress filterAssignmentPayload)
                                        model.filterAssignments
                                    , createFilterAssignment filterAssignmentPayload
                                    )
                    in
                        ( { model
                            | filterAssignments = Tuple.first filterAssignmentsUpdate
                          }
                        , Tuple.second filterAssignmentsUpdate
                        )

                _ ->
                    ( model, Cmd.none )

        ChangePage page ->
            ( { model | page = page }, Cmd.none )

        Search query ->
            ( { model
                | appliedLinksPostFilter =
                    False
                , searchInputText = query
              }
            , Cmd.none
            )

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
                , renderedLinks = []
                , appliedLinksPostFilter = False
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
                                    { name = model.filterInputText
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
            Material.update Mdl mdlMessage model

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
                    , filterAssignments SetFilterAssignments
                    , createUserResponse (resultFromRecord "" >> CreateUserResponse)
                    , logOutResponse LogOutResponse
                    , Material.subscriptions Mdl model
                    ]
        , view = view
        }
