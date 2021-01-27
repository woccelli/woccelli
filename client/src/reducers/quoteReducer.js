import { GET_QUOTES } from '../actions/types'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {status: "", quotes: []}, action) {
    switch (action.type) {
        case GET_QUOTES:
            return action.payload
        default:
            return state
    }
}