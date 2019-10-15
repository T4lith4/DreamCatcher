import axios from 'axios';
import { GET_DREAMS, ADD_DREAM, DELETE_DREAM, DREAMS_LOADING, EDIT_DREAM } from './types';
//we need to import the helper function which gets te token from local storage and put it in the headers
import { tokenConfig } from './authActions';
//be able to return errors if something goes wrong 
import { returnErrors } from './errorActions';


//get action (get request, token not required)
export const getDreams = () => dispatch => {
    dispatch(setDreamsLoading());
    axios
        .get('api/dreams')
        .then(res => 
            dispatch({
                type: GET_DREAMS,
                payload: res.data
            }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status))
        ); 
};

//add action (post request, token is required)
export const addDream = dream => (dispatch, getState) => {
        axios
        .post('api/dreams', dream, tokenConfig(getState))
        .then(res => 
            dispatch({
                type: ADD_DREAM,
                payload: res.data
            })
        )
};

//edit action (post request, token is required)
export const editDream = id => (dispatch, getState) => {
    axios
    .put('api/dreams', id, tokenConfig(getState))
    .then(res => 
        dispatch({
            type: EDIT_DREAM,
            payload: res.data
        })
    )
};
//delete action (delete request, token required)
export const deleteDream = id => (dispatch, getState) => {
    axios
    .delete(`/api/dreams/${id}`, tokenConfig(getState))
    .then(res =>
    dispatch({
        type: DELETE_DREAM,
        payload: id
    }))
    //handle any errors
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//loading action (for when fetching items)
export const setDreamsLoading = () => {
    return {
        type: DREAMS_LOADING,
    };
};




