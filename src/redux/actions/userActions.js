import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../Firebase/firebaseConfig";
import { userTypes } from "../types/userTypes";

export const registerActionAsync = ({email, password, name, avatar}) => {
    return async (dispatch) => {
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            dispatch(registerActionSync({ email, password, name, avatar }, null));
        } catch (error) {
            console.log(error);
            dispatch(registerActionSync({ }, {code: error.code, message: error.message}));
        }
    }
}


const registerActionSync = (newUser, error) => {
    return {
      type: userTypes.CREATE_USER,
      payload: {
          user: newUser,
          error:error
      },
    };
}
