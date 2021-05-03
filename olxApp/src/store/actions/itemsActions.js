import { itemsConstants } from '../types';

export const addItem = (values) => dispatch => {
    dispatch({
        type: itemsConstants.ADD_ITEM,
        payload: values
    })
}

export const setActiveItem = item => dispatch => {
    dispatch({
        type: itemsConstants,
        payload: item
    })
}