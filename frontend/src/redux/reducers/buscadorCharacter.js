import { FETCH_CHARACTER_REQUEST, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_FAILURE } from "../actions/buscadorCharacter";

const initialState = {
    loading: false,
    character: [],
    error: ''
}

const buscador = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CHARACTER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CHARACTER_SUCCESS:
            return {
                loading: false,
                character: action.payload,
                error: ''
            }
        case FETCH_CHARACTER_FAILURE:
            return {
                loading: false,
                character: [],
                error: action.payload
            }
        default: return state;
    }
}

export default buscador;