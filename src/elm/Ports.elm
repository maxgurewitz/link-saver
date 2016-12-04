port module Ports exposing (..)

import Types exposing (Link, LoginForm, ResultRecord)
import Maybe exposing (Maybe)


port createLink : { href : String, uid : String } -> Cmd msg


port createUser : LoginForm -> Cmd msg


port logOut : String -> Cmd msg


port deleteLink : String -> Cmd msg


port createUserResponse : (ResultRecord String String -> msg) -> Sub msg


port logOutResponse : (Maybe String -> msg) -> Sub msg


port links : (List Link -> msg) -> Sub msg
