import Axios from "axios";

export const FETCH_CHARACTER_REQUEST = "FETCH_CHARACTER_REQUEST";
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";
export const FETCH_CHARACTER_FAILURE = "FETCH_CHARACTER_FAILURE";

//Actions
export const fetchCharacterRequest = () => {
    return {
        type: FETCH_CHARACTER_REQUEST
    }
}
export const fetchCharacterSuccess = (Character) => {
    return {
        type: FETCH_CHARACTER_SUCCESS,
        payload: Character
    }
}
export const fetchCharacterFailure = (error) => {
    return {
        type: FETCH_CHARACTER_FAILURE,
        payload: error
    }
}
const fetchCharacter = (valor) => {
    return (dispatch) => {
        dispatch(fetchCharacterRequest());
        Axios.get(`https://rickandmortyapi.com/api/character/${valor}`)
            .then(response => {
                dispatch(fetchCharacterSuccess([response.data]));                
            })
            .catch(error => {
                dispatch(fetchCharacterFailure('No se encontró el personaje'));
            });
    }
}

export default fetchCharacter;