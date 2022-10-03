import PropTypes from "prop-types";
import { ContactCard, Name, Number, Btn } from "./ContactItem.styled";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";

export const ContactListItem = ({ name, id, number }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(id));
    }

    return (
        <ContactCard>
            <Name>{name} - </Name>
            <Number>{number}</Number>
            <Btn type="button" id={id} onClick={handleDelete}>
                Delete
            </Btn>
        </ContactCard>
    )
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};