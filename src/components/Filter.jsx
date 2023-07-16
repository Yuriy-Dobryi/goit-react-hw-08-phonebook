import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/slice';
import { InputSt } from './Credentials/FormStyles';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <InputSt
        name="filter"
        value={filter}
        onChange={({ target }) => dispatch(setFilter(target.value.trim()))}
        placeholder="Find contacts by name"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
    </>
  );
}