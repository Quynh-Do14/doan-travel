import addItem from "./addItem";
import {combineReducers} from 'redux';
import searchResult from "./searchResult";
const rootReducers = combineReducers({
    addItem,
    searchResult
})
export default rootReducers;