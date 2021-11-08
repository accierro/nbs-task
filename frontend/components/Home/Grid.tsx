import { Button } from "@chakra-ui/button";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, HStack, Text } from "@chakra-ui/layout";
import useSWR from "swr";
import { Property } from "../PropertyDetails/types";
import { PropertyCard } from "./PropertyCard";

export const Grid = () => {
  const { data } = useSWR<Property[]>("/property");

  if (data?.length === 0) {
    return (
      <Container maxW="container.md">
        <Box mt={10}>
          <Heading>We haven't got any listings yet.</Heading>
          <HStack mt={3}>
            <Text>Do you want to be first?</Text>
            <Button variant="link" color="blue" rightIcon={<ArrowForwardIcon />}>
              Create new
            </Button>
          </HStack>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxW="container.md">
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {data!.map((item, i) => (
          <PropertyCard key={i} property={item} />
        ))}
      </Box>
    </Container>
  );
};
