import { combineReducers } from 'redux'
import resumeReducer from './resumeReducer'
import quoteReducer from './quoteReducer'

export default combineReducers({
    resume: resumeReducer,
    quotefinder: quoteReducer
})