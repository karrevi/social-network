import store from '../store';
import axios from 'axios';

export const pokemon = async () => {
    const res = await axios.get('https://rickandmortyapi.com/api/character/');
    store.dispatch({
        type: 'POKEMON',
        payload: res.data.results
    })
    return res;
}