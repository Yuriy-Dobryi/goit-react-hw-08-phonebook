import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';

import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectLoading } from 'redux/contacts/selectors';
import ContactForm from 'components/Credentials/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      
      <WrapperSt>
        <TitleSt>Phonebook</TitleSt>
        <ContactForm />
      </WrapperSt>

      <div>
        <TitleSt>Contacts:</TitleSt>
        <ClipLoader
          loading={isLoading}
          cssOverride={spinWrapper}
          size={36}
          color="black"
          aria-label="Loading Spinner"
        />

        {contacts.length > 0 ? (
          <>
            {!isLoading && <Filter />}
            <ContactList />
          </>
        ) : (
          !isLoading && <p>You don't have contacts yet🧐</p>
        )}
      </div>
    </>
  );
}

const spinWrapper = {
  display: 'block',
  margin: '0 auto 20px',
};

const WrapperSt = styled.div`
  padding: 20px;
  background-color: #dfdcdc;
  border-radius: 10px;
  border: 1px solid black;
`;

const TitleSt = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;