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
    
        default:
            return {
                ...state
            }
    }
}

export default userReducer;