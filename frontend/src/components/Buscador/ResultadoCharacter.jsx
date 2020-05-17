import React from 'react';

const ResultadoCharacter = () => {
    return (
        <div>
            <h3 className="text-white">Resultado: </h3>
            <div className="text-warning">Buscando...</div>
            <div className="text-success">
                <img src="" alt="" />
                <span>character</span>
            </div>
            <span className="text-danger">Error</span>
        </div>
    );
}

export default ResultadoCharacter;