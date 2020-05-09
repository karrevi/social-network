import React, { Fragment } from 'react';
import './Profile.scss';
import { connect } from 'react-redux';
import { EditOutlined } from '@ant-design/icons'

const Profile = (props) => {
    const { name, surname, email, age } = props.userProfile
    return (
        <Fragment>
            <div className="container fluid user-profile">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="well well-sm">
                            <div className="user-profile-card">
                                <div className="user-profile-header"></div>
                                <div className="user-profile-avatar text-center"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/WLM_logo.svg" alt="" /> </div>
                                <div className="row">
                                    <div className="text-center">
                                        <h4>Nombres: {name} {surname}</h4>
                                    </div>
                                    <div className="panel-footer"></div>
                                    <div className="container">
                                        <p><small> Email: {email}</small></p>
                                        <p><small> Edad: {age}</small></p>
                                    </div>
                                </div>
                                <div className="panel-footer" ><a href="./Profile" data-original-title="Edit My Profile" data-toggle="tooltip" type="button" className="btn btn-sm btn-primary"><EditOutlined /><i className="glyphicon glyphicon-edit" ></i> Editar mi perfíl </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

const mapStateToProps = state => ({ userProfile: state.user.user });
export default connect(mapStateToProps)(Profile);