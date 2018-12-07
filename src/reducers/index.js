import { combineReducers } from "redux";
import bookListReducer from "./reducers_booklist";

const rootReducer = combineReducers({
    books: bookListReducer,
});

export default rootReducer;