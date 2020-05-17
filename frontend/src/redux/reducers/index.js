import { combineReducers } from 'redux';

import user from "./user";
import character from "./characterData.js";
import buscador from './buscadorCharacter';

const reducer = combineReducers({
    user,
    character,
    buscador
})



export default reducer;