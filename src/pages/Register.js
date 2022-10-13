import { Helmet } from "react-helmet";
import { RegisterForm } from "components/RegisterForm/RegisterForm";

export default function Register() {
    return (
        <>
            <Helmet>
                <title>Registretion</title>
            </Helmet>
            <RegisterForm />
        </>
    );
}