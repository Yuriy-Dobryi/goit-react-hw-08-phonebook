import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label, InputSt, BtnSt } from './FormStyles';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <InputSt type="text" name="name" />
      </Label>
      <Label>
        Email
        <InputSt type="email" name="email" />
      </Label>
      <Label>
        Password
        <InputSt type="password" name="password" />
      </Label>
      <BtnSt type="submit">Register</BtnSt>
    </Form>
  );
};