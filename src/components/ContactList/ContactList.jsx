import PropTypes from "prop-types";
import { ContactListItem } from "../ContactItem/ContactItem";
import { List } from "./ContactList.styled";

import { getContacts,getFilter ,} from "redux/selectors";
import { useDispatch, useSelector,} from "react-redux";
import { deleteContact } from "redux/contactsSlice";

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const onDeleteContact = contactId => dispatch(deleteContact(contactId));

    const normalizedValue = filter.toLowerCase().trim();
    const filteredContactList = () => contacts.filter(contact => contact.name.toLowerCase().includes(normalizedValue));

    const contactList = filteredContactList();
    return (
        <List>
            {contactList.length > 0 ? (
                contacts.map(({ name, id, number }) => {
                return (
                    <ContactListItem
                        key={id}
                        name={name}
                        number={number}
                        onDeleteContact={onDeleteContact}
                        id={id}
                    />
                )
            })
            ):(<p>Contact list is empty</p>)};
        </List>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
};