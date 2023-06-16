import { userTypes } from "../types/userTypes";

const initialValue = {
    user: {},
    error: null
}


const userReducer = (state = initialValue, action) => {
    switch (action.type) {
        case userTypes.CREATE_USER:
            
            return {
                ...state,
                user: {
                    ...action.payload.user
                },
                error: action.payload.error
            }
        case userTypes.LOGOUT_USER:
            return {
                ...state,
                user: null,
                error: action.payload
            }
        case userTypes.LOGGIN_USER:
            return {
                ...state,
                user: {
                    ...action.payload
                }
            }
        default:
            return {
                ...state
            }
    }
}

export default userReducer;