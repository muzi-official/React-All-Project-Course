export const UPDATE_USER = 'UPDATE_USER'

const userLogin = (result) => dispatch => {
    dispatch({
        type: UPDATE_USER,
        payload: result.user
    })

}

export default userLogin



