module Main exposing (..)

import Html exposing (text, program)


init =
    ( Maybe.Nothing, Cmd.none )


view model =
    text "Hello, World!"


update msg model =
    ( model, Cmd.none )


main =
    program
        { init = init
        , update = update
        , subscriptions = always Sub.none
        , view = view
        }
