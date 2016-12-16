module Types exposing (..)

import Material
import Time exposing (Time)
import Material.Snackbar as Snackbar


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


type alias SessionData =
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
    = LoggedIn SessionData
    | LoggedOut LoginForm


type alias Flags =
    { user : Maybe User
    }


type Page
    = HomePage
    | SelectFilterPage
    | CreateFilterPage


type alias Filter =
    { icon : String
    , color : String
    , clickedAt : String
    , name : String
    , timestamp : String
    }


type alias BaseModel model =
    { model
        | session : Session
    }


type alias Model =
    BaseModel Sessionless


type alias Sessionless =
    { links : List Link
    , renderedLinks : List Link
    , mdl : Material.Model
    , snackbar : Snackbar.Model ()
    , page : Page
    }


type alias BaseLoggedInModel model =
    { model
        | sessionData : SessionData
    }


type alias LoggedInModel =
    BaseLoggedInModel Sessionless


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
