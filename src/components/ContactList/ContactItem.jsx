import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { selectContacts, selectLoading } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { setFilter } from 'redux/filter/slice';
import { BtnSt } from 'components/Credentials/FormStyles';

export default function ContactItem({ contact: { id, name, number } }) {
  const contacts = useSelector(selectContacts);
  const isDeleting = useSelector(selectLoading);
  const dispatch = useDispatch();

  function removeContactHandle(id, name) {
    dispatch(deleteContact(id));
    toast.success(`${name} has been removed`);

    if (contacts.length - 1 === 0) {
      toast.info('You deleted all contacts🙄');
      dispatch(setFilter(''));
    }
  }

  return (
    <ItemSt>
      <InfoSt>{name}</InfoSt>
      <InfoSt>{number}</InfoSt>
      <BtnSt
        onClick={() => removeContactHandle(id, name)}
        disabled={isDeleting}
      >
        Delete
      </BtnSt>
    </ItemSt>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

const ItemSt = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f8f4ed;
  font-size: 20px;
  font-style: oblique;
  border: 1px solid black;
  border-radius: 10px;
`;

const InfoSt = styled.p`
  width: 220px;
`;