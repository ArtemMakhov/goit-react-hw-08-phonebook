import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    const hendleLogOut = () => dispatch(logOut());

    return (
        <div>
            <p>Welcome, {user.name}</p>
            <button type="button" onClick={hendleLogOut}>Logout</button>
        </div>
    );
};