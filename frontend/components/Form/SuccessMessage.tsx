import { Button } from "@chakra-ui/button";
import { Container, Heading, HStack, Text } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";

type Props = {
  propertyId: string;
  onReset: () => void;
};

export const SuccessMessage = ({ propertyId, onReset }: Props) => {
  const router = useRouter();

  return (
    <Container maxW="container.lg" centerContent mt={6}>
      <Heading>Congratualions!</Heading>
      <Text>Your listing is now live!</Text>
      <HStack mt={6}>
        <Button variant="outline" onClick={onReset}>
          Create new
        </Button>
        <Button variant="solid" onClick={() => router.push(`/property/${propertyId}`)}>
          Go to Property
        </Button>
      </HStack>
    </Container>
  );
};
