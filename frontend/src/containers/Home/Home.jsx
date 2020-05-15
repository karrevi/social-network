import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { pokemon } from '../../redux/actions/pokemon';
import { Pagination } from 'antd';
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
            
            <Pagination defaultCurrent={1} total={50} />
        </div>
    )
}
const mapStateToProps = (state) => ({ pokemon: state.pokemon.pokemon });
export default connect(mapStateToProps)(Home);