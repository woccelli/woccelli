import axios from "axios"
import { SEND_RESUME } from "./types"

export const sendResume = dest => async dispatch => {
    dispatch({ type: SEND_RESUME, payload: { status: "loading" } })
    try {
        await axios.post('/api/send-resume', dest)
        dispatch({ type: SEND_RESUME, payload: { status: "sent" } })
    } catch {
        dispatch({ type: SEND_RESUME, payload: { status: "limit" } })
    }


}

export const resetSendResume = () => dispatch => {
    dispatch({ type: SEND_RESUME, payload: { status: "" } })
}