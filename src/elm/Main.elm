module Main exposing (..)

import Html exposing (text, program, div, button, input)
import Ports exposing (createLink, links, createUser, createUserResponse)
import Types exposing (Msg(..), Session(..))
import Html.Events exposing (onInput, onClick)
import Html.Attributes exposing (placeholder)


initialModel =
    { linkInputText = ""
    , links = []
    , session = LoginInfo { email = "", password = "", error = "" }
    }


init =
    ( initialModel, Cmd.none )


view model =
    let
        loginEl =
            case model.session of
                UserInfo user ->
                    text user.email

                LoginInfo loginForm ->
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
                        , button [ onClick Login ] [ text "create user" ]
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
                        LoginInfo oldForm ->
                            { model | session = LoginInfo loginForm }

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

        Login ->
            let
                cmd =
                    case model.session of
                        LoginInfo loginForm ->
                            createUser loginForm

                        _ ->
                            Cmd.none
            in
                ( model, cmd )

        CreateUserResponse response ->
            let
                newModel =
                    case model.session of
                        LoginInfo loginForm ->
                            case response of
                                Ok () ->
                                    { model | session = UserInfo { email = loginForm.email } }

                                Err message ->
                                    { model | session = LoginInfo { loginForm | error = message } }

                        UserInfo user ->
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
    program
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
