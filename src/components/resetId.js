import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const url = 'http://localhost:64676/api/v1/uniqueinteger/reset';

class ResetId extends React.Component {
    state = { id: 0 }
    resetId = (event) => {
        event.preventDefault();
        axios.put(url, {
            id: this.state.id
        })
            .then(res => {
                this.setState({ id: res.data.nextId });
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
                        <button type="submit" className="btn btn-default" onClick={this.resetId}>
                            Reset Id >
                        </button>
                    </div>
                    <div className="col-sm-1 text-left">
                        <input id="resetIdValue" className="form-control" type="text" value={this.state.id} onChange={(event) => this.setState({ id: event.target.value })} />
                    </div>
                    <div className="col-sm-5">
                    </div>
                </div>

            </div>
        );
    }
};
export default ResetId;