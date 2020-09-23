import { START_LOADING, STOP_LOADING } from '../actions/types';


const INITIAL_STATE = {
    loading: false,
    active: true,
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case START_LOADING:
            console.log(action.payload)
            return { ...state, loading: true, active: action.payload === undefined ? true : action.payload };
        case STOP_LOADING:
            return { ...state, loading: false, active: true };
        default:
            return state;
    }
}