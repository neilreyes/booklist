import { combineReducers } from "redux";
import bookListReducer from "./reducers_booklist";
import activeBookReducer from "./reducers_activeBook";

const rootReducer = combineReducers({
    books: bookListReducer,
    activeBook: activeBookReducer,
});

export default rootReducer;