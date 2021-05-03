import { UPDATE_USER } from '../actions/userActions'

const InitialState = { user: null }

const userReducer = (state = InitialState, { type, user }) => {

    switch (type) {
        case UPDATE_USER:
            return {
                ...state, user

            }

        default:
            return state
    }
}

export default userReducer