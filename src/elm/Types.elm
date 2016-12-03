module Types exposing (..)

import Material
import Material.Snackbar as Snackbar


type alias Link =
    { href : String
    , timestamp : Int
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
    , session : Session
    , mdl : Material.Model
    , snackbar : Snackbar.Model ()
    }


type Msg
    = SetLinks (List Link)
    | SetLinkInputText String
    | SetLoginForm LoginForm
    | CreateLink
    | LogIn
    | LogOut
    | LogOutResponse (Maybe String)
    | CreateUserResponse (Result String String)
    | Snack (Snackbar.Msg ())
    | Mdl (Material.Msg Msg)
