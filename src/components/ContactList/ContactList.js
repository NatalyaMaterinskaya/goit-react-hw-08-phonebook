import { useSelector } from 'react-redux';
import { selectvisibleContacts } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

import { Box, Card, CardBody, Stack, StackDivider } from '@chakra-ui/react';

export const ContactList = () => {
  const contacts = useSelector(selectvisibleContacts);

  return (
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="10">
          {contacts?.map(contact => (
            <Box key={contact.id}>
              <ContactItem contact={contact} />
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  )
};
