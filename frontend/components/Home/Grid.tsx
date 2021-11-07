import { Box, Container } from "@chakra-ui/layout";
import useSWR from "swr";
import { Property } from "../PropertyDetails/types";
import { PropertyCard } from "./PropertyCard";

export const Grid = () => {
  const { data } = useSWR<Property[]>("/property");
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
