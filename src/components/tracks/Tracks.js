import React, { Component } from 'react';
import Spinner from '../layout/spinner';
import Track from './Track';

import { connect } from 'react-redux';
import { getTops } from '../../actions/searchTracks'

class Tracks extends Component {

  componentDidMount() {
    this.props.dispatch(getTops());
  }

  render() {
    const { data, heading } = this.props;

    return (
      (data === undefined || data.length === 0) ? <Spinner /> : (
        <div>
          <h3 className='text-center mb-4'>{heading}</h3>
          <div className='row'>
            {data.map(track => (
              <Track
                key={track.track.track_id}
                track={track.track}
              />
            ))}
          </div>
        </div>
      )
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    data: state.data,
    heading: state.heading
  }
}
export default connect(mapStateToProps)(Tracks);