import store from '../store';
import axios from 'axios';

export const character = async () => {
    const res = await axios.get('https://rickandmortyapi.com/api/character/');
    store.dispatch({
        type: 'CHARACTER',
        payload: res.data
    })
    return res;
}