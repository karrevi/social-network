import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import ResultadoCharacter from '../../components/Buscador/ResultadoCharacter';
import fetchCharacter from '../../redux/actions/buscadorCharacter';
import './buscadorStyle.scss';
import { Button, Layout, Input } from 'antd'

const BuscadorCharacter = () => {
    const { Content } = Layout;
    const dispatch = useDispatch();
    const [character_name, set_character_name] = useState('New Character');
    return (

        <Layout className="layaout">
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">
                    <label htmlFor="buscar_character" className="text-white">Busca tu personaje</label>
                    <Input placeholder="" className="" id="buscar_character"
                        value={character_name}
                        onChange={
                            (event) => {
                                set_character_name(event.target.value);
                            }
                        }
                    />
                    <div className="search-box-big">
                        <Button className="btn-search" onClick={() => {
                            dispatch(fetchCharacter(character_name))
                        }}>Buscar</Button>
                    </div>

                    <ResultadoCharacter />
                </div>
            </Content>
        </Layout>
    )
}
export default BuscadorCharacter;