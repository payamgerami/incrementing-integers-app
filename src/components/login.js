import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import Header from './header';
import auth from '../utilities/authentication';

class Login extends React.Component {

    responseFacebook = (response) => {
        auth.saveLoginInfo(response);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth.getToken();
        browserHistory.push('/home');
    };
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Header />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 text-center fbLogin">
                                <FacebookLogin
                                    appId="1951446085099956"
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    callback={this.responseFacebook}
                                    cssClass="btn btn-primary"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default Login;
