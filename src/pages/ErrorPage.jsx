import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  // const id = useParams();
  // console.log("id", Object.keys(id));

  return (
    <Box
      textAlign="center"
      py={10}
      px={6}
      height="100vh"
      // border="1px solid red"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Heading
          display="inline-block"
          as="h2"
          size="4xl"
          bgGradient="linear(to-r, teal.400, teal.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="22px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={"gray.500"} fontSize="18px" mb={6}>
          The page you're looking for does not seem to exist
        </Text>

        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid"
          onClick={() => navigate("/")}
        >
          Go to Home
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorPage;
