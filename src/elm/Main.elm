module Main exposing (..)

import Html exposing (text, programWithFlags, div, button, input, a, br, form)
import Ports exposing (createLink, links, createUser, createUserResponse, logOut, logOutResponse, deleteLink, updateLink)
import Types exposing (..)
import Html.Events exposing (onInput, onClick, onSubmit, keyCode)
import Debug
import Html
import Dict
import Task
import Time
import Trie
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
import Material.Options as MOpts
import Regex exposing (regex, contains)
import Json.Decode as Json
import Material.Button as Button
import Material.Grid exposing (grid, cell, size, Device(..))


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
                            , linkInputText = ""
                            , uid = uid
                            , linkInputValidation = Nothing
                            }
                    )
                |> Maybe.withDefault emptyLogin

        initialModel =
            { links = []
            , renderedLinks = []
            , session = session
            , mdl = Material.model
            , snackbar = Snackbar.model
            , trie = Trie.empty
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
                    [ index + 3 ]
                    model.mdl
                    [ Button.minifab
                    , Button.colored
                    , Button.ripple
                    , Button.onClick <| DeleteLink link.guid
                    , MOpts.css "marginRight" "1.5em"
                    ]
                    [ Icon.i "delete" ]
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
                        , ( "max-width", "50vw" )
                        , ( "whiteSpace", "nowrap" )
                        ]
                    ]
                    [ text link.href ]
                ]
            ]
        ]


view model =
    let
        content =
            case model.session of
                LoggedIn loggedIn ->
                    Layout.render Mdl
                        model.mdl
                        [ Layout.fixedHeader
                        ]
                        { header =
                            [ Layout.row []
                                [ text loggedIn.email
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
                                            , loggedIn.linkInputValidation
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
                            []
                        , tabs = ( [], [] )
                        }

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


mapLoggedIn : (LoggedInModel -> LoggedInModel) -> Session -> Session
mapLoggedIn mapper session =
    case session of
        LoggedIn loggedInModel ->
            LoggedIn <| mapper loggedInModel

        _ ->
            session


defaultLoggedOut : a -> (LoggedInModel -> a) -> Session -> a
defaultLoggedOut defaultLoggedOut loggedInMapper session =
    case session of
        LoggedIn loggedInModel ->
            loggedInMapper loggedInModel

        _ ->
            defaultLoggedOut


update msg model =
    case msg of
        Search query ->
            let
                renderedLinks =
                    if query == "" then
                        model.links
                    else
                        Trie.expand (String.toLower query) model.trie
                            |> List.map
                                (\href ->
                                    Trie.get href model.trie
                                        |> Maybe.withDefault Dict.empty
                                        |> Dict.values
                                )
                            |> List.concat
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
            let
                trie =
                    List.foldl
                        (\link memo ->
                            { memo
                                | trie =
                                    Trie.add ( toString memo.count, link )
                                        (String.toLower link.href)
                                        memo.trie
                                , count = memo.count + 1
                            }
                        )
                        { trie = Trie.empty, count = 0 }
                        links
                        |> .trie
            in
                ( { model
                    | links = links
                    , renderedLinks = links
                    , trie = trie
                  }
                , Cmd.none
                )

        SetLinkInputText linkInputText ->
            let
                session =
                    model.session
                        |> mapLoggedIn
                            (\loggedInModel ->
                                let
                                    linkInputValidation =
                                        if (contains linkRgx linkInputText) || linkInputText == "" then
                                            Nothing
                                        else
                                            Just "Must provide a valid link"
                                in
                                    { loggedInModel
                                        | linkInputText = linkInputText
                                        , linkInputValidation = linkInputValidation
                                    }
                            )
            in
                ( { model | session = session }, Cmd.none )

        CreateLink ->
            let
                cmd =
                    model.session
                        |> defaultLoggedOut Cmd.none
                            (\{ linkInputText, uid, linkInputValidation } ->
                                let
                                    validInputTextCmd =
                                        (find (\link -> link.href == linkInputText) model.links)
                                            |> Maybe.map (\link -> Task.perform setClickedAt (Task.succeed link))
                                            |> Maybe.withDefault (createLink { href = linkInputText, uid = uid })
                                in
                                    if linkInputText == "" then
                                        Cmd.none
                                    else
                                        linkInputValidation
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
                                        , linkInputText = ""
                                        , linkInputValidation = Nothing
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
