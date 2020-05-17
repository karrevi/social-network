import React from 'react';
import {Button} from 'antd'

const BuscadorCharacter = () => {
    return (
        <div className="form-group">
            <label htmlFor="buscar_character" className="text-white">Busca tu personaje</label>
            <input type="text" className="form-control" id="buscar_character" value="Rick y Morty"/>
            <Button>Default</Button>
        </div>

    );

}


export default BuscadorCharacter;