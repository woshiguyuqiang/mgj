import {createStore,combineReducers,applyMiddleware} from 'redux'
import reduxPromiseMiddleware from 'redux-promise-middleware'
import home from "./reducers/home"
import shop from "./reducers/shop"
import goodhot from "./reducers/goodhot"
const reducers = combineReducers({
	home,shop,goodhot
})
const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));
export default store;