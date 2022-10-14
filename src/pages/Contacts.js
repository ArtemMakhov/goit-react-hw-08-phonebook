import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { fetchContacts } from "redux/contacts/operations";
import { selectIsLoading } from "redux/contacts/selectors";
import { Filter } from "components/Filter/Filter";

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <ContactForm />
            <div>{isLoading && 'Request in progress ... '}</div>
            <ContactList />
            <Filter/>
        </>
    );
}

