import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Alert } from 'antd';

const ResultadoCharacter = () => {
    const { Meta } = Card;
    const buscador = useSelector((state) => state.buscador);
    return (
        <Card hoverable
            style={{ width: 240 }}
            cover={<img alt="" src={buscador.character[0].results[0].image} />}>
            <Meta title={buscador.character[0].results[0].name} description={buscador.character[0].results[0].status} />
            <h3 className="text-white">Resultado: </h3>
            {buscador.loading && <Alert message="Buscando..." type="warning" showIcon closable />}
            {buscador.character.length >= 1 &&
                <Alert message="Se encontró" type="success" showIcon />}
            {buscador.error !== '' && <Alert message={buscador.error} type="error" showIcon />}
        </Card>
    );
}

export default ResultadoCharacter;