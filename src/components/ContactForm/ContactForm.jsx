// import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Form, Label, Input,Btn } from './ContactForm.styled';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';

export function ContactForm ()  {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(getContacts)
    const dispatch = useDispatch();


    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                throw new Error(`Unknows  name - ${name}`);
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
            ? alert(`${name} is already in contacts`)
            : dispatch(addContact({name,number,id:nanoid()}));
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };


     return (
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Label>
                    <span>Name</span>
                    <Input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                <Label>
                    <span>Number</span>
                    <Input
                        onChange={handleChange}
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>
                <Btn type='submit'>Add contact</Btn>
            </Form>
        );
}

// Form.propTypes = {
//     name: PropTypes.string,
//     number: PropTypes.string,
// };