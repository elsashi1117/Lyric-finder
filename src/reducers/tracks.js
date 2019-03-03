const tracks = (state = { isFetching: false, data: [], err: '', heading: 'Top 10 Tracks' }, action) => {
    switch (action.type) {
        case 'SEARCH_START':
            return {
                ...state,
                isFetching: true,
            }
        case 'GET_TOPS_SUCCESS':
            return {
                ...state,
                isFetching: false,
                data: action.tops,
                heading: 'Top 10 Tracks',
                err: ''
            }
        case 'SEARCH_SUCCESS':
            return {
                ...state,
                isFetching: false,
                data: action.tracks,
                heading: 'Search Result',
                err: ''
            }
        case 'SEARCH_FAIL':
            return {
                ...state,
                isFetching: false,
                err: action.err
            }
        default:
            return state;
    }
}

export default tracks;