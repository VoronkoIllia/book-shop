import { ActionTypes } from "../../types/actions-types";

const SIGN_IN = "books-shop/auth/signin";
const SIGN_OUT = "books-shop/auth/sign-out";


type AuthState = {
    username: string
    isAuth:boolean
}

type AuthActionType = ReturnType<ActionTypes<typeof AuthActionCreators>>;

const authInitialState:AuthState = {
    username: "",
    isAuth: false
}

export default function authReducer(state = authInitialState, action: AuthActionType):AuthState {
    switch (action.type) {
        case SIGN_IN:
            return {
                username: action.username,
                isAuth: true
            }
        case SIGN_OUT:
            return {
                username: "",
                isAuth: false
             }
        default:
            return state;
}
}

export const AuthActionCreators = {
    signIn: (username: string) => ({ type: SIGN_IN, username } as const),
    signOut: () => ({type:SIGN_OUT} as const)
}