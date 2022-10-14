import { ContactListItem } from "../ContactItem/ContactItem";
import { List } from "./ContactList.styled";

import { selectVisibleContacts} from "redux/contacts/selectors";
import { useSelector} from "react-redux";


export const ContactList = () => {

    const visibleContacts = useSelector(selectVisibleContacts);

    return (
        <List>
            {visibleContacts.length  ? (
                visibleContacts.map(({ name, id, number }) => {
                return (
                    <ContactListItem
                        key={id}
                        name={name}
                        number={number}
                        id={id}
                    />
                )
            })
            ) : (<p  > Contact list is empty</p>)
};
        </List>
    )
};
