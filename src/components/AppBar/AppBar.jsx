import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { useAuth } from "hooks";

import { Header } from "./AppBar.styled";

export const AppBar = () => {
    const { isLggedIn } = useAuth();

    console.log(isLggedIn);
    return (
        <Header>
            <Navigation />
            {isLggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
    );
};