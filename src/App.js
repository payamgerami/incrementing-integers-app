import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default App;