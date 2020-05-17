import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import fetchCharacter from '../../redux/actions/buscadorCharacter';
import ResultadoCharacter from '../../components/Buscador/ResultadoCharacter';

const BuscadorCharacter = () => {
    const dispatch = useDispatch();
    const [character_name, set_character_name] = useState('New Character');


    return (
        <div className="form-group">
            <label htmlFor="buscar_character" className="text-white">Busca tu personaje</label>
            <input type="text" className="form-control" id="buscar_character"
                value={character_name}
                onChange={
                    (event) => {
                        set_character_name(event.target.value);
                    }
                }
            />
            <Button className="btn-search" onClick={() => {
                dispatch(fetchCharacter(character_name))
            }}>Buscar</Button>
            <ResultadoCharacter />
        </div>


    );

}


export default BuscadorCharacter;