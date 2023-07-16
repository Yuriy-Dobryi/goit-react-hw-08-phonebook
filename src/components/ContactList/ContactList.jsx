import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import { selectFilteredContacts } from 'redux/contacts/selectors';
import ContactItem from './ContactItem';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    if (contacts.length === 0) {
      toast.info('No contacts with this name🤔');
    }
  }, [contacts]);

  return (
    <ul style={{ marginTop: '15px' }}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}