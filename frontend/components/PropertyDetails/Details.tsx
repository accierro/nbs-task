import { Container, Box, Heading, Text, HStack, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import HouseImage from "../../images/house.jpeg";
import Image from "next/image";
import Link from "next/link";
import { formatFullAdress, formatPrice } from "./util";
import { Property } from "./types";
import { DeleteButton } from "./DeleteButton";

export const Details = () => {
  const router = useRouter();
  const key = "/property/" + router.query["id"];
  const { data } = useSWR<Property>(key);

  return (
    <Container maxW="container.md" mt={10}>
      <Box mb={3} display="flex" justifyContent="space-between" alignItems="center">
        <Link href="/">
          <a>
            <Button variant="link" leftIcon={<ArrowBackIcon />}>
              Back
            </Button>
          </a>
        </Link>
        <Box>
          <DeleteButton id={router.query["id"] as string} />
        </Box>
      </Box>
      <Box rounded="md" overflow="hidden">
        <Image src={HouseImage} alt="house image" />
        <Box display="flex" justifyContent="space-between">
          <Heading fontSize={{ base: "20px", md: "30px" }}>{`${data!.city}, ${
            data!.postcode
          }`}</Heading>
          <Heading fontSize={{ base: "20px", md: "30px" }}>{formatPrice(data!)}</Heading>
        </Box>
        <Text fontSize={{ base: "14px", md: "16px" }} opacity={0.7}>
          {formatFullAdress(data!)}
        </Text>

        <Box mt={6} mb={3}>
          <Text fontSize="xl" fontWeight="bold">
            Description
          </Text>
          <Text opacity={0.7}>{data!.description}</Text>
        </Box>
        <HStack spacing={6}>
          <Box>
            <b>Beds:</b> {data!.bedRooms}
          </Box>
          <Box>
            <b>Baths:</b> {data!.bathRooms}
          </Box>
        </HStack>
      </Box>
    </Container>
  );
};
