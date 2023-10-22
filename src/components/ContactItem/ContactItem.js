import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import { Btn, Wrapper } from './ContactItem.styled';
import { Heading, Text } from '@chakra-ui/react';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispach = useDispatch();
  const handleDelete = () => dispach(deleteContact(id));
  return (
    <Wrapper>
      <Heading size="xs"  textTransform="uppercase">
        {name}
      </Heading>
      <Text pt="8" fontSize="sm">
        {number}
      </Text>
      <Btn type="button" onClick={handleDelete}>
        Delete
      </Btn>
    </Wrapper>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
};
