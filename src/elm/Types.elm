module Types exposing (..)


type alias Link =
    { href : String
    , timestamp : Int
    , guid : String
    }


type alias User =
    { email : String
    }


type alias LoginForm =
    { email : String
    , password : String
    , error : String
    }


type Session
    = LoggedIn User
    | LoggedOut LoginForm


type alias Flags =
    { user : Maybe User
    }


type alias Model =
    { linkInputText : String
    , links : List Link
    , session : Session
    }


type Msg
    = SetLinks (List Link)
    | SetLinkInputText String
    | SetLoginForm LoginForm
    | CreateLink
    | LogIn
    | LogOut
    | LogOutResponse (Maybe String)
    | CreateUserResponse (Result String ())
