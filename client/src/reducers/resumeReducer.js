import { SEND_RESUME } from '../actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case SEND_RESUME:
            return action.payload
        default:
            return state
    }
}