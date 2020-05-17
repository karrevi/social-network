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
                    <span>{buscador.character[0].results[0].name}</span>
                    <img src={buscador.character[0].results[0].image} alt="Character" />

                </div>}
            {buscador.error !== '' && <span className="text-danger">{buscador.error}</span>}
        </div>
    );
}

export default ResultadoCharacter;