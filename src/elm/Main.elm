module Main exposing (..)

import Html exposing (text, programWithFlags, div, button, input, a)
import Ports exposing (createLink, links, createUser, createUserResponse, logOut, logOutResponse, deleteLink)
import Types exposing (..)
import Html.Events exposing (onInput, onClick)
import Html
import Html.Attributes exposing (placeholder, style, target, href)
import Material
import Material.Layout as Layout
import Material.Grid exposing (grid, cell, size, offset, Device(..))
import Material.Snackbar as Snackbar
import Material.Helpers exposing (map1st, map2nd)
import Material.Icon as Icon


emptyLogin =
    LoggedOut { email = "", password = "" }


init : Flags -> ( Model, Cmd Msg )
init { user } =
    let
        session =
            user
                |> Maybe.map
                    (\{ email, uid } ->
                        LoggedIn { email = email, linkInputText = "", uid = uid }
                    )
                |> Maybe.withDefault emptyLogin

        initialModel =
            { links = []
            , session = session
            , mdl = Material.model
            , snackbar = Snackbar.model
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
                                , button [ onClick LogOut ] [ text "sign out" ]
                                ]
                            ]
                        , main =
                            [ grid []
                                (List.append
                                    [ cell [ size All 2 ]
                                        [ input
                                            [ style [ ( "width", "100%" ) ]
                                            , onInput SetLinkInputText
                                            ]
                                            []
                                        ]
                                    , cell [ size All 1, offset All 1 ]
                                        [ button [ onClick CreateLink ] [ text "submit link" ] ]
                                    ]
                                    (List.map
                                        (\link ->
                                            let
                                                linkHref =
                                                    if String.contains "//" link.href then
                                                        link.href
                                                    else
                                                        "//" ++ link.href
                                            in
                                                [ cell [ size All 2 ]
                                                    [ div
                                                        [ onClick <| DeleteLink link.guid
                                                        , style
                                                            [ ( "display", "inline-block" )
                                                            , ( "marginRight", "1.5em" )
                                                            ]
                                                        ]
                                                        [ Icon.view "delete" [ Icon.size24 ]
                                                        ]
                                                    , a
                                                        [ target "_blank"
                                                        , href linkHref
                                                        , style [ ( "display", "inline-block" ) ]
                                                        ]
                                                        [ Icon.view "subdirectory_arrow_right" [ Icon.size24 ] ]
                                                    ]
                                                , cell [ size All 2 ] [ text link.href ]
                                                ]
                                        )
                                        model.links
                                        |> List.concat
                                    )
                                )
                            ]
                        , drawer =
                            []
                        , tabs = ( [], [] )
                        }

                LoggedOut loginForm ->
                    div []
                        [ Layout.row []
                            [ div []
                                [ input
                                    [ placeholder "email"
                                    , onInput (\email -> SetLoginForm { loginForm | email = email })
                                    , style [ ( "display", "block" ) ]
                                    ]
                                    []
                                , input
                                    [ placeholder "password"
                                    , style [ ( "display", "block" ) ]
                                    , onInput (\password -> SetLoginForm { loginForm | password = password })
                                    ]
                                    []
                                ]
                            , button [ onClick LogIn ] [ text "register/login" ]
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
        DeleteLink guid ->
            ( model, deleteLink guid )

        Snack snackMsg ->
            Snackbar.update snackMsg model.snackbar
                |> mapSnackbarTuple model

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
            ( { model | links = links }, Cmd.none )

        SetLinkInputText linkInputText ->
            let
                session =
                    model.session
                        |> mapLoggedIn
                            (\loggedInModel ->
                                { loggedInModel | linkInputText = linkInputText }
                            )
            in
                ( { model | session = session }, Cmd.none )

        CreateLink ->
            let
                cmd =
                    model.session
                        |> defaultLoggedOut Cmd.none
                            (\{ linkInputText, uid } ->
                                createLink { href = linkInputText, uid = uid }
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
