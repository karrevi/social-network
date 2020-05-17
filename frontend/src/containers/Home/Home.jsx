import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { character } from '../../redux/actions/characterData';
import './Home.scss';
import { Pagination } from 'antd';

const Home = (props) => {
    const totalPages = props.character.info.pages * 20
    useEffect(() => {
        console.log()
        character(1)
            .catch(console.error)
    }, []);

    const onPageChange = (value) => {
        character(value)
    }

    return (
        <div className="box-big">{props.character.results?.map(character =>
            <div className="box-log">
                <p>{character.name}</p>
                <img src={character.image} alt="" />
            </div>)}
            <div className="box-btn">
                <Pagination defaultCurrent={1} defaultPageSize={20} total={totalPages} onChange={onPageChange} showSizeChanger={false} />
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({ character: state.character.character });
export default connect(mapStateToProps)(Home);