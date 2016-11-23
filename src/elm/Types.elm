module Types exposing (..)


type alias Link =
    { href : String
    , timestamp : Int
    , guid : String
    }


type Msg
    = SetLinks (List Link)
    | SetLinkInputText String
    | CreateLink
