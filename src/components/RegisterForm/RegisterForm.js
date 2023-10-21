import { useDispatch} from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { singUp } from 'redux/auth/authOperations';
import { Btn, Label, StyledErrorMessage, StyledField, StyledForm } from './RegisterForm.styled';

const nameRegex =
  "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .trim('Enter your name, please')
    .matches(nameRegex, 'Name is not valid')
    .required('Required'),
  email: Yup.string().email('Email number is not valid').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        dispatch(singUp (values));
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          Name
          <StyledField name="name" type="text" />
          <StyledErrorMessage name="name" component="div" />
        </Label>

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
        <Btn type="submit">Register</Btn>
      </StyledForm>
    </Formik>
  );
};
