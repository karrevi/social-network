import React from 'react';
import { useSelector } from 'react-redux';

const ResultadoCharacter = () => {
    const buscador = useSelector((state) => state.buscador);

    return (
        <div>
            <h3 className="text-white">Resultado: </h3>
            {buscador.loading && <div className="text-warning">Buscando...</div>}
            {buscador.character.length >= 1 &&
                <div className="text-success">
                    <img src={buscador.character[0].image.default} alt="Character" />
                    <span>{buscador.character[0].name}</span>
                </div>}
            {buscador.error !== '' && <span className="text-danger">{buscador.error}</span>}
        </div>
    );
}

export default ResultadoCharacter;