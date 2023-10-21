import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/authOperations';
import {
  Btn,
  Label,
  StyledErrorMessage,
  StyledField,
  StyledForm,
} from './LoginForm.styled';

const schema = Yup.object().shape({
  email: Yup.string().email('Email number is not valid').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          Email
          <StyledField name="email" type="email" />
          <StyledErrorMessage name="email" component="div" />
        </Label>

        <Label>
          Password
          <StyledField name="password" type="password" />
          <StyledErrorMessage name="password" component="div" />
        </Label>
        <Btn type="submit">Log In</Btn>
      </StyledForm>
    </Formik>
  );
};
