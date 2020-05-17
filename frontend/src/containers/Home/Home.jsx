import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { character } from '../../redux/actions/characterData';
import { Pagination } from 'antd';
import './Home.scss';

const Home = (props) => {
    const [totalPages, settotalPages] = useState(5)
    useEffect(() => {
        character()
            .then(res => {
                settotalPages(res.data.pages);
                console.log(res.data.pages)
            })
            .catch(console.error)
    }, []);
    return (
        <div className="box-big">{props.character.results?.map(character =>
            <div className="box-log">
                <p>{character.name}</p>
                <img src={character.image} alt="" />
            </div>)}
            <div className="btn-group">
                <Pagination defaultCurrent={1} defaultPageSize={totalPages} total={50} />
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({ character: state.character.character });
export default connect(mapStateToProps)(Home);