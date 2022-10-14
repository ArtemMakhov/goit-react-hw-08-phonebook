import { Box } from "components/Box";
import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { Title, Btn } from "./UserMenu.stuled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    const hendleLogOut = () => dispatch(logOut());

    return (
        <Box display="flex">
            <Title>Welcome, {user.name}</Title>
            <Btn type="button" onClick={hendleLogOut}>Logout</Btn>
        </Box>
    );
};