import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { pokemon } from '../../redux/actions/pokemon';
import { Button } from 'antd';
import './Home.scss';

const Home = (props) => {
    useEffect(() => {
        pokemon()
            .catch(console.error)
    }, []);
    return (
        <div className="box-big">{props.pokemon?.map(pokemon =>
            <div className="box-log">
                <p>{pokemon.name}</p>
                <img src={pokemon.image} alt="" />
            </div>)}
            <div className="btn-group">
                <Button className="btn-prev">Anterior</Button>
                <Button className="btn-next">Siguiente</Button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({ pokemon: state.pokemon.pokemon });
export default connect(mapStateToProps)(Home);