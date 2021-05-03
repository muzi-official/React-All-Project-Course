import { itemsConstants } from '../types';

const Initial_State = {
    items: [],
    activeItem: {}
}

export default (state = Initial_State, action) => {
    switch (action.type) {
        case itemsConstants.ADD_ITEM:
            return { ...state, items: [...state.items, action.payload] }
        case itemsConstants.SET_ACTIVE_ITEM:
            return { ...state, activeItem: action.payload }
        default:
            return state
    }
}