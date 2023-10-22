import { Box, Flex } from "@chakra-ui/react";

const HomePage = () => {
  const basicBoxStyles = {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    textAlign: 'center',
    boxSize: '100vh',
    color: 'white',
    textShadow: '0 0 20px black',
    fontWeight: 'bold',
    fontSize: '100px',
    px: 4,
    background:
      'url(https://fastly.picsum.photos/id/1062/5000/3334.jpg?hmac=1jFC_07EZ7OTx3E3wEATWlBl0qM9jHOdifnK27Cp6e0) center/cover no-repeat',
  };
  return (
    <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly">
      {/* adding filter property to the element */}
      <Box sx={basicBoxStyles} filter="grayscale(80%)">
        Phonebook
      </Box>
    </Flex>
  );
};

export default HomePage;
