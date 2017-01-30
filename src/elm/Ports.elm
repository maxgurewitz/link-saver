port module Ports exposing (..)

import Types exposing (..)
import Maybe exposing (Maybe)


port createLink : { href : String, uid : String } -> Cmd msg


port createUser : LoginForm -> Cmd msg


port open : String -> Cmd msg


port logOut : String -> Cmd msg


port deleteLink : String -> Cmd msg


port updateLink : Link -> Cmd msg


port createFilter : FilterPayload -> Cmd msg


port deleteFilterAssignment : String -> Cmd msg


port createFilterAssignment : FilterAssignmentPayload -> Cmd msg


port createUserResponse : (ResultRecord String String -> msg) -> Sub msg


port logOutResponse : (Maybe String -> msg) -> Sub msg


port filters : (List Filter -> msg) -> Sub msg


port links : (List Link -> msg) -> Sub msg


port filterAssignments : (List FilterAssignment -> msg) -> Sub msg
