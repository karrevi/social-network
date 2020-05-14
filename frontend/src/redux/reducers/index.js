import { combineReducers } from 'redux';

import user from "./user";
import pokemon from "./pokemon.js";

const reducer = combineReducers({
    user,
    pokemon,
})



export default reducer;