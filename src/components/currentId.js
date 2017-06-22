import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const url = 'http://localhost:64676/api/v1/uniqueinteger/current';

class CurrentId extends React.Component {
    state = { id: 0 }
    getCurrentId = (event) => {
        event.preventDefault();
        axios.get(url)
            .then(res => {
                this.setState({ id: res.data.currentId });
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    render() {
        return (
            <div className="container-fluid idContainer">
                <div className="row">
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-2 text-right">
                        <button type="submit" className="btn btn-default" onClick={this.getCurrentId}>
                            Current Id >
                        </button>
                    </div>
                    <div className="col-sm-1 text-left">
                        <label className="idLabel">{this.state.id}</label>
                    </div>
                    <div className="col-sm-5">
                    </div>
                </div>

            </div>
        );
    }
};
export default CurrentId;