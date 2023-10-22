import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { isExist } from 'helpers';
import {
  StyledForm,
  Label,
  StyledField,
  StyledErrorMessage,
  Btn,
} from './ContactForm.styled';
import toast from 'react-hot-toast';

const nameRegex =
  "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const numberRegex =
  '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}';
const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .trim('Enter your name, please')
    .matches(nameRegex, 'Name is not valid')
    .required('Required'),
  number: Yup.string()
    .matches(numberRegex, 'Phone number is not valid')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        if (isExist(contacts, values.name)) {
          toast.error(`${values.name} is already in contacts.`);
          return;
        }
        dispatch(addContact(values));
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
          Number
          <StyledField name="number" type="tel" />
          <StyledErrorMessage name="number" component="div" />
        </Label>
        <Btn type="submit">Add contact</Btn>
      </StyledForm>
    </Formik>
  );
};
