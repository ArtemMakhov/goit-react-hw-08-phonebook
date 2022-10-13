import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/auth/operations';
import { selectContact } from 'redux/contacts/selectors';
import { Form, Label, Input,Btn } from './ContactForm.styled';

export function ContactForm ()  {

    const dispatch = useDispatch();
    const contacts = useSelector(selectContact);

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.elements.name.value;
        const phone = form.elements.phone.value;   

        if (contacts) {
            contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
            ? alert(name + ' is already in contacts')
            : dispatch(addContact({ name,phone }))
        }
        form.reset();
    };


     return (
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Label>
                    <span>Name</span>
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                <Label>
                    <span>Number</span>
                    <Input
                        type="tel"
                        name="phone"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>
                <Btn type='submit'>Add contact</Btn>
            </Form>
        );
}
