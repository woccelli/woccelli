import axios from "axios"
import { SEND_RESUME } from "./types"

export const sendResume = dest => async dispatch => {
    dispatch({type: SEND_RESUME, payload: {status: "loading"}})
    await axios.post('/api/send-resume', dest)
    dispatch({type: SEND_RESUME, payload: {status: "sent"}})
}

export const resetSendResume = () => dispatch => {
    dispatch({type: SEND_RESUME, payload: {status: ""}})
}