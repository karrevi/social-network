import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { pokemon } from '../../redux/actions/pokemon';
import './Home.scss';
import { Row, Col, Divider, Layout } from 'antd'

const Home = (props) => {
    const style = { background: '#0092ff', padding: '8px 0' };
    const { Content } = Layout;
    console.log(props);

    useEffect(() => {
        pokemon()
            .catch(console.error)
    }, []);
    return (
        <Layout>
            <Content>
                <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                </Divider>
                <Row gutter={[16, 24]}>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            {props.pokemon?.map(pokemon =>
                                <div>{pokemon.name}{pokemon.url}</div>)}
                        </div>
                    </Col>
                    {/* <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <h1>Hola de prueba</h1>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <h1>Hola de prueba</h1>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <h1>Hola de prueba</h1>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <h1>Hola de prueba</h1>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <h1>Hola de prueba</h1>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <h1>Hola de prueba</h1>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <h1>Hola de prueba</h1>
                        </div>
                    </Col> */}
                </Row>
            </Content>
        </Layout>
    )
}
const mapStateToProps = (state) => ({ pokemon: state.pokemon.pokemon });
export default connect(mapStateToProps)(Home);