import React, { Component } from 'react';
import { getTracks } from '../../actions/searchTracks';
import { connect } from 'react-redux';

class Search extends Component {
    state = {
        trackTitle: ''
    }

    onChange = e => {
        this.setState({
            trackTitle: e.target.value
            // told in video 3 about 14mins
        })
    }

    findTracks = e => {
        e.preventDefault();
        this.props.dispatch(getTracks(this.state.trackTitle))
    }

    render() {
        return (
            <div className="card card-body mb-4 p-4">
                <h1 className="display-4 text-center">
                    <i className="fas fa-music" /> Search For A Song
                </h1>
                <p className="lead text-center">Get the lyrics for any song</p>
                <form onSubmit={this.findTracks}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Artist name..."
                            // name="trackTitle"
                            value={this.state.trackTitle}
                            onChange={this.onChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(Search);