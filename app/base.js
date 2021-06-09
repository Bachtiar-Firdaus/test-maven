import { combineReducers, createHome, applyMiddleware, compose } from "redux";
import authReducer from "../features/Auth/reducer";
import homeReducer from "../features/Home/reducer";
import thunk from "redux-thunk";
// untuk konek ke dev tools
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  auth: authReducer,
  home: homeReducer,
});

const Home = createHome(rootReducers, composerEnhancer(applyMiddleware(thunk)));
export default Home;
