module Main exposing (..)

import Html exposing (text, program, div)
import Ports exposing (createLink, links)
import Types exposing (Msg(..))


init =
    ( { links = [] }, createLink "first" )


view model =
    div []
        (List.map (\link -> text link.href)
            model.links
        )


update msg model =
    case msg of
        SetLinks links ->
            ( { model | links = links }, Cmd.none )


main =
    program
        { init = init
        , update = update
        , subscriptions = always (links SetLinks)
        , view = view
        }
