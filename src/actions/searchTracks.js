import axios from 'axios';
// const URL = 'http://localhost:8080/api/users/'

const searchStart = () => {
    return {
        type: 'SEARCH_START'
    }
};

const searchSuccess = tracks => {
    return {
        type: 'SEARCH_SUCCESS',
        tracks
    }
};

const getTopsSuccess = tops => {
    return {
        type: 'GET_TOPS_SUCCESS',
        tops
    }
};

const searchFail = err => {
    return {
        type: 'SEARCH_FAIL',
        err
    }
}

export const getTops = () => {
    return (dispatch, getState) => {
        dispatch(searchStart());
        axios
            .get(`http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=fr&f_has_lyrics=1&apikey=${
                process.env.REACT_APP_MM_KEY
                }`
            )
            .then(res => {
                dispatch(getTopsSuccess(res.data.message.body.track_list))
            })
            .catch(err => dispatch(searchFail(err)))
    }
}

export const getTracks = (searchTitle) => {
    return (dispatch, getState) => {
        dispatch(searchStart());
        axios
            .get(`http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_artist=${searchTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${
                process.env.REACT_APP_MM_KEY
                }`
            )
            .then(res => {
                // console.log(res.data)
                dispatch(searchSuccess(res.data.message.body.track_list))
            })
            .catch(err => dispatch(searchFail(err)))
    }
}