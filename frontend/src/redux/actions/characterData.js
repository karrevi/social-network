import store from '../store';
import axios from 'axios';

export const character = async (value) => {
    const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${value}`);
    store.dispatch({
        type: 'CHARACTER',
        payload: res.data
    })
    return res;
}