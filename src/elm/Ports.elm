port module Ports exposing (..)

import Types exposing (Link)


port createLink : String -> Cmd msg


port links : (List Link -> msg) -> Sub msg
