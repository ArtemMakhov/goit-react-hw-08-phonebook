import { ContactListItem } from "../ContactItem/ContactItem";
import { List } from "./ContactList.styled";

import { getContacts,getFilter,getVisibleContacts} from "redux/selectors";
import {  useSelector,} from "react-redux";


export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const visibleContacts = getVisibleContacts(contacts, filter);

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
            ):(<p>Contact list is empty</p>)};
        </List>
    )
};
