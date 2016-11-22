port module Ports exposing (..)

import Types exposing (Link)


port createLink : Link -> Cmd msg
