module Types exposing (..)

import Material
import Time exposing (Time)
import Material.Snackbar as Snackbar
import Html exposing (Html)
import Array exposing (Array)
import Dict exposing (Dict)


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
    | CreateFilterPage
    | AssignFilterPage Link


type alias Filter =
    { values : FilterValues
    , timestamp : Int
    , guid : String
    }


type alias FilterValues =
    { name : String
    }


type alias FilterPayload =
    { values : FilterValues, uid : String }


type alias WithGuid extension =
    { extension | guid : String }


type alias BaseModel model =
    { model
        | session : Session
    }


type alias Model =
    BaseModel Sessionless


type alias ToggledFilters =
    Dict String Bool


type alias FilterAssignments =
    Dict String FilterAssignmentStatus


type alias Sessionless =
    { links : List Link
    , renderedLinks : List Link
    , mdl : Material.Model
    , filterAssignments : FilterAssignments
    , snackbar : Snackbar.Model ()
    , page : Page
    , initializedFilterAssignments : Bool
    , appliedLinksPostFilter : Bool
    , showNsfw : Bool
    , highlightedLink : Maybe String
    , filters : List Filter
    , linkInputText : String
    , linkInputValidation : Maybe String
    , filterInputText : String
    , searchInputText : String
    }


type alias BaseLoggedInModel model =
    { model
        | sessionData : SessionData
    }


type alias FilterAssignmentValues =
    { filterGuid : String
    , linkGuid : String
    }


type alias FilterAssignmentPayload =
    { values : FilterAssignmentValues
    , uid : String
    }


type alias FilterAssignment =
    { guid : String
    , values : FilterAssignmentValues
    , timestamp : Int
    }


type FilterAssignmentStatus
    = FilterAssigned FilterAssignment
    | AssignmentInProgress FilterAssignmentPayload


type alias LoggedInModel =
    BaseLoggedInModel Sessionless


type alias LoggedInView =
    LoggedInModel -> Html Msg


type Msg
    = SetLinks (List Link)
    | ToggleNsfw
    | Search String
    | SetHighlightedLink Link
    | SetLinkInputText String
    | SetFilterInputText String
    | SetLoginForm LoginForm
    | CreateLink
    | CreateFilter
    | AssignFilter String String
    | SetFilterAssignments (List FilterAssignment)
    | DeleteLink String
    | Timestamp (Time -> Msg)
    | ClickedAt Link Time
    | LogIn
    | ChangePage Page
    | LogOut
    | LogOutResponse (Maybe String)
    | CreateUserResponse (Result String String)
    | Snack (Snackbar.Msg ())
    | Mdl (Material.Msg Msg)
