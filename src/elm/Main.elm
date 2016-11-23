module Main exposing (..)

import Html exposing (text, program, div, button, input)
import Ports exposing (createLink, links)
import Types exposing (Msg(..))
import Html.Events exposing (onInput, onClick)


init =
    ( { linkInputText = "", links = [] }, Cmd.none )


view model =
    div []
        [ input [ onInput SetLinkInputText ] []
        , button [ onClick CreateLink ] [ text "submit link" ]
        , div []
            <| List.map (\link -> text link.href)
                model.links
        ]


update msg model =
    case msg of
        SetLinks links ->
            ( { model | links = links }, Cmd.none )

        SetLinkInputText linkInputText ->
            ( { model | linkInputText = linkInputText }, Cmd.none )

        CreateLink ->
            ( model, createLink model.linkInputText )


main =
    program
        { init = init
        , update = update
        , subscriptions = always (links SetLinks)
        , view = view
        }
