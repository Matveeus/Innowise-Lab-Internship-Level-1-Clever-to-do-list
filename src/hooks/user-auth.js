import {useSelector} from "react-redux";

export function userAuth() {
    const {email, token, id} = useSelector(state => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    }
}