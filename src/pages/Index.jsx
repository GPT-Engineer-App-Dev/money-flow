import { Container, Text, VStack, Flex, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Online Banking</Heading>
        <Text fontSize="lg">Manage your finances with ease.</Text>
        <Flex>
          <Link to="/accounts">
            <Button colorScheme="blue" mr={4}>Accounts</Button>
          </Link>
          <Link to="/transfers">
            <Button colorScheme="blue" mr={4}>Transfers</Button>
          </Link>
          <Link to="/profile">
            <Button colorScheme="blue">Profile</Button>
          </Link>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;