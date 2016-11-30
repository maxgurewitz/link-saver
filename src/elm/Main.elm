module Main exposing (..)

import Html exposing (text, programWithFlags, div, button, input)
import Ports exposing (createLink, links, createUser, createUserResponse, logOut)
import Types exposing (..)
import Html.Events exposing (onInput, onClick)
import Html.Attributes exposing (placeholder)


emptyLogin =
    LoggedOut { email = "", password = "", error = "" }


init : Flags -> ( Model, Cmd Msg )
init { user } =
    let
        session =
            user
                |> Maybe.map LoggedIn
                |> Maybe.withDefault emptyLogin

        initialModel =
            { linkInputText = ""
            , links = []
            , session = session
            }
    in
        ( initialModel, Cmd.none )


view model =
    let
        loginEl =
            case model.session of
                LoggedIn user ->
                    div []
                        [ text user.email
                        , button [ onClick LogOut ]
                            [ text "sign out" ]
                        ]

                LoggedOut loginForm ->
                    div []
                        [ input
                            [ placeholder "email"
                            , onInput (\email -> SetLoginForm { loginForm | email = email })
                            ]
                            []
                        , input
                            [ placeholder "password"
                            , onInput (\password -> SetLoginForm { loginForm | password = password })
                            ]
                            []
                        , text loginForm.error
                        , button [ onClick LogIn ] [ text "register/login" ]
                        ]
    in
        div []
            [ loginEl
            , input [ onInput SetLinkInputText ] []
            , button [ onClick CreateLink ] [ text "submit link" ]
            , div []
                <| List.map (\link -> text link.href)
                    model.links
            ]


update msg model =
    case msg of
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
            ( { model | linkInputText = linkInputText }, Cmd.none )

        CreateLink ->
            ( model, createLink model.linkInputText )

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
                        LoggedIn user ->
                            logOut ()

                        _ ->
                            Cmd.none
            in
                ( model, cmd )

        LogOutResponse err ->
            let
                _ =
                    Maybe.map (\str -> (Debug.log "log out error" err))
            in
                ( { model | session = emptyLogin }, Cmd.none )

        CreateUserResponse response ->
            let
                newModel =
                    case model.session of
                        LoggedOut loginForm ->
                            case response of
                                Ok () ->
                                    { model | session = LoggedIn { email = loginForm.email } }

                                Err message ->
                                    { model | session = LoggedOut { loginForm | error = message } }

                        LoggedIn user ->
                            model
            in
                ( newModel, Cmd.none )


toResultErr toMsg maybeErr =
    let
        res =
            case maybeErr of
                Just err ->
                    Err err

                Nothing ->
                    Ok ()
    in
        toMsg res


main =
    programWithFlags
        { init = init
        , update = update
        , subscriptions =
            always
                <| Sub.batch
                    [ links SetLinks
                    , createUserResponse (toResultErr CreateUserResponse)
                    ]
        , view = view
        }
