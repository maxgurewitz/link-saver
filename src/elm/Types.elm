module Types exposing (..)

import Material
import Time exposing (Time)
import Material.Snackbar as Snackbar
import Trie exposing (Trie)


type alias Link =
    { href : String
    , timestamp : Int
    , clickedAt : Int
    , guid : String
    }


type alias User =
    { email : String
    , uid : String
    }


type alias LoggedInModel =
    { email : String
    , uid : String
    , linkInputText : String
    , linkInputValidation : Maybe String
    }


type alias ResultRecord err ok =
    { ok : Maybe ok
    , err : Maybe err
    }


type alias LoginForm =
    { email : String
    , password : String
    }


type Session
    = LoggedIn LoggedInModel
    | LoggedOut LoginForm


type alias Flags =
    { user : Maybe User
    }


type alias Model =
    { links : List Link
    , renderedLinks : List Link
    , session : Session
    , mdl : Material.Model
    , trie : Trie Link
    , snackbar : Snackbar.Model ()
    }


type Msg
    = SetLinks (List Link)
    | Search String
    | SetLinkInputText String
    | SetLoginForm LoginForm
    | CreateLink
    | DeleteLink String
    | Timestamp (Time -> Msg)
    | ClickedAt Link Time
    | LogIn
    | LogOut
    | LogOutResponse (Maybe String)
    | CreateUserResponse (Result String String)
    | Snack (Snackbar.Msg ())
    | Mdl (Material.Msg Msg)
