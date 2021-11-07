import { Button } from "@chakra-ui/button";
import { Box, Container } from "@chakra-ui/layout";
import Link from "next/link";

export const Header = () => {
  return (
    <Box bg="blackAlpha.800">
      <Container maxW="container.lg">
        <Box
          h="60px"
          display="flex"
          flexDirection="row-reverse"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/create-new-listing">
            <a>
              <Button color="white" bg="linear-gradient(262.5deg, #BC43DA -1.89%, #277AC7 107.71%)">
                Create New Listing{" "}
              </Button>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Button variant="link" color="white">
                Home
              </Button>
            </a>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};
