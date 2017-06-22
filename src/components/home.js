import React, { Component } from 'react';
import Header from './header';
import NextId from './nextId';
import CurrentId from './currentId'
import ResetId from './resetId'

class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Header />
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <NextId />
                        <CurrentId />
                        <ResetId />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;