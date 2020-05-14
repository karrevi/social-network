import store from '../store';
import axios from 'axios';

export const pokemon = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=25&offset=0');
    store.dispatch({
        type: 'POKEMON',
        payload: res.data.results
    })
    return res;
}

export const pokemonDetail = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=25&offset=0');
    store.dispatch({
        type: 'POKEMON',
        payload: res.data.results
    })
    return res;
}