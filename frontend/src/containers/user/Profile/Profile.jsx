import React from 'react';
import './Profile.scss';
import { connect } from 'react-redux'

const Profile = ({ user }) => {
    return (
        <div className="profileContainer">
            {user && <React.Fragment>
                <div className="userHeader">
                    <img src="" alt="" />
                    <div className="userData">
                        <span>{user.name}</span>
                    </div>
                </div>
            </React.Fragment>}
        </div>
    )
}

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(Profile);