import axios from "axios"
import { GET_QUOTES } from "./types"

export const getQuotes = quoteContent => async dispatch => {
    dispatch({ type: GET_QUOTES, payload: { status: "", quotes: [] } })
    const res = await axios.get("https://okeenea-interview.ew.r.appspot.com/api/quotes/find", { params: { "innerContent": quoteContent } })
    if(res) {
        dispatch({type: GET_QUOTES, payload: {status:"loaded", quotes: res.data}})
    }
}