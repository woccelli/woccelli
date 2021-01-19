import { SEND_RESUME } from '../actions/types'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
    switch (action.type) {
        case SEND_RESUME:
            return action.payload
        default:
            return state
    }
}