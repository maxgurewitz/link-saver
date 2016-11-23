port module Ports exposing (..)

import Types exposing (Link, LoginForm)


port createLink : String -> Cmd msg


port createUser : LoginForm -> Cmd msg


port links : (List Link -> msg) -> Sub msg
