module Main exposing (..)

import Html exposing (text, programWithFlags, div, button, input)
import Ports exposing (createLink, links, createUser, createUserResponse, logOut, logOutResponse)
import Types exposing (..)
import Html.Events exposing (onInput, onClick)
import Html.Attributes exposing (placeholder)
import Material


emptyLogin =
    LoggedOut { email = "", password = "", error = "" }


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
            }
    in
        ( initialModel, Cmd.none )


view model =
    let
        loginEl =
            case model.session of
                LoggedIn loggedIn ->
                    div []
                        [ text loggedIn.email
                        , button [ onClick LogOut ]
                            [ text "sign out" ]
                        , input [ onInput SetLinkInputText ] []
                        , button [ onClick CreateLink ] [ text "submit link" ]
                        , div []
                            <| List.map (\link -> text link.href)
                                model.links
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
                            (\{ linkInputText, uid } -> createLink { href = linkInputText, uid = uid })
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
            let
                newModel =
                    case model.session of
                        LoggedOut loginForm ->
                            case response of
                                Ok uid ->
                                    { model
                                        | session =
                                            LoggedIn
                                                { email = loginForm.email
                                                , linkInputText = ""
                                                , uid = uid
                                                }
                                    }

                                Err message ->
                                    { model | session = LoggedOut { loginForm | error = message } }

                        LoggedIn loggedInModel ->
                            model
            in
                ( newModel, Cmd.none )


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
            always
                <| Sub.batch
                    [ links SetLinks
                    , createUserResponse (resultFromRecord "" >> CreateUserResponse)
                    , logOutResponse LogOutResponse
                    ]
        , view = view
        }
