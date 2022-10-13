import PropTypes from "prop-types";
import { ContactCard, Name, Number, Btn } from "./ContactItem.styled";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/auth/operations";


export const ContactListItem = ({ name, id, phone }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));

    return (
        <ContactCard key={id}>
            <Name>{name} - </Name>
            <Number>{phone}</Number>
            <Btn type="button" id={id} onClick={handleDelete}>
                Delete
            </Btn>
                
            
        </ContactCard>
    )
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};