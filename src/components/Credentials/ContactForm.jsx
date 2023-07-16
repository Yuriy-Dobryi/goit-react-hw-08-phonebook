import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Form, Label, InputSt, BtnSt } from './FormStyles';

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  function submitClick(e) {
    e.preventDefault();
    const { name, number } = e.target.elements;
    const newContact = { name: name.value, number: number.value };

    const isNameExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isNameExist) {
      toast.error(`${newContact.name} is already in your contacts.🧐`);
      return;
    }

    dispatch(addContact(newContact));
    toast.success(`${newContact.name} has been added`);
    e.target.reset();
  }

  return (
    <Form onSubmit={submitClick}>
      <Label>
        Name
        <InputSt
          name="name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        Number
        <InputSt
          name="number"
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <BtnSt type="submit">Add contact</BtnSt>
    </Form>
  );
}