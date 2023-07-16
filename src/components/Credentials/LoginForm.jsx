import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label, InputSt, BtnSt } from 'components/Credentials/FormStyles';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <InputSt type="email" name="email" />
      </Label>
      <Label>
        Password
        <InputSt type="password" name="password" />
      </Label>
      <BtnSt type="submit">Log In</BtnSt>
    </Form>
  );
};