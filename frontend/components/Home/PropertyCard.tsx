import { Box, Text } from "@chakra-ui/layout";
import { Property } from "../PropertyDetails/types";
import Image from "next/image";
import Link from "next/link";
import HouseImage from "../../images/house.jpeg";
import { formatPrice } from "../PropertyDetails/util";

type Props = {
  property: Property;
};

export const PropertyCard = ({ property }: Props) => {
  return (
    <Box w={[1 / 2, 1 / 3]} p={3}>
      <Link href={`/property/${property.id}`}>
        <a>
          <Box overflow="hidden" rounded="md" bg="gray.100" shadow="md">
            <Image src={HouseImage} alt="house image" />
            <Box p={2}>
              <Text fontSize="lg">
                {property.city} {property.postcode}
              </Text>
              <Text fontWeight="bold" color="blue.700">
                {formatPrice(property)}
              </Text>
            </Box>
          </Box>
        </a>
      </Link>
    </Box>
  );
};
