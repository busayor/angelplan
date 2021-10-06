import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

// use this to declare one reducer that combines multiple reducers
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestoreCollections: firestoreReducer
})

export default rootReducer