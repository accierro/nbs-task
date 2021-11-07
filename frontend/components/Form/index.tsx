import { Button } from "@chakra-ui/button";
import { Box, Container, Heading, HStack, VStack } from "@chakra-ui/layout";
import {
  FormControl,
  Select,
  FormErrorMessage,
  Textarea,
  Input,
  FormLabel,
  Checkbox,
  InputGroup,
  InputLeftAddon,
  Divider
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { DEFAULT_VALUES, REGISTER_OPTIONS } from "./constants";
import { postProperty } from "./queries";
import { FormFields } from "./types";
import { useState } from "react";
import { SuccessMessage } from "./SuccessMessage";

export const Form = () => {
  const [createdPropertyId, setCreatedPropertyId] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({ defaultValues: DEFAULT_VALUES });

  const onSubmit = async (values: FormFields) => {
    try {
      const id = await postProperty(values);
      setCreatedPropertyId(id);
    } catch (e) {
      throw e;
    }
  };

  if (createdPropertyId) {
    return (
      <SuccessMessage
        propertyId={createdPropertyId}
        onReset={() => {
          setCreatedPropertyId(null);
          reset();
        }}
      />
    );
  }

  return (
    <Container maxW="container.md" centerContent mt={6}>
      <Heading>New Listing</Heading>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <VStack mb={16}>
          <FormControl isInvalid={!!errors.propertyType}>
            <FormLabel htmlFor="propertyType">Property type</FormLabel>
            <Select placeholder="Property Type" {...register("propertyType")}>
              <option value="flat">Flat</option>
              <option value="semi-detached">Semi Detached House</option>
              <option value="detached">Detached House</option>
              <option value="terraced">Terraced House</option>
              <option value="mansion">Mansion</option>
            </Select>
            <FormErrorMessage>
              {errors.propertyType && errors.propertyType.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.isForSale}>
            <Checkbox {...register("isForSale")}>For Sale</Checkbox>
            <FormErrorMessage>{errors.isForSale && errors.isForSale.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.price}>
            <FormLabel htmlFor="price">Price</FormLabel>
            <InputGroup>
              <InputLeftAddon children="£" />
              <Input type="number" {...register("price")} />
            </InputGroup>
            <FormErrorMessage>{errors.price && errors.price.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.description}>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Textarea placeholder="Please describe your listing" {...register("description")} />
            <FormErrorMessage>{errors.description && errors.description.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.availableDate}>
            <FormLabel htmlFor="availableDate">Available Date</FormLabel>
            <Input type="date" {...register("availableDate")} />
            <FormErrorMessage>
              {errors.availableDate && errors.availableDate.message}
            </FormErrorMessage>
          </FormControl>

          <HStack spacing={4} w="full">
            <FormControl isInvalid={!!errors.bedRooms}>
              <FormLabel htmlFor="bedRooms">Bed Rooms</FormLabel>
              <Input type="number" {...register("bedRooms")} />
              <FormErrorMessage>{errors.bedRooms && errors.bedRooms.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.bathRooms}>
              <FormLabel htmlFor="bathRooms">Bath Rooms</FormLabel>
              <Input type="number" {...register("bathRooms")} />
              <FormErrorMessage>{errors.bathRooms && errors.bathRooms.message}</FormErrorMessage>
            </FormControl>
          </HStack>
        </VStack>

        <Divider />

        <VStack mt={10}>
          <FormControl isInvalid={!!errors.addressLine1}>
            <FormLabel htmlFor="addressLine1">Address Line 1</FormLabel>
            <Input type="string" {...register("addressLine1")} />
            <FormErrorMessage>
              {errors.addressLine1 && errors.addressLine1.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.addressLine2}>
            <FormLabel htmlFor="addressLine2">Address Line 2</FormLabel>
            <Input type="string" {...register("addressLine2")} />
            <FormErrorMessage>
              {errors.addressLine2 && errors.addressLine2.message}
            </FormErrorMessage>
          </FormControl>

          <HStack w="full" spacing={4}>
            <FormControl isInvalid={!!errors.city}>
              <FormLabel htmlFor="city">City</FormLabel>
              <Input type="string" {...register("city")} />
              <FormErrorMessage>{errors.city && errors.city.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.postcode}>
              <FormLabel htmlFor="postcode">Postcode</FormLabel>
              <Input type="string" {...register("postcode")} />
              <FormErrorMessage>{errors.postcode && errors.postcode.message}</FormErrorMessage>
            </FormControl>
          </HStack>

          <Box py={3} display="flex" flexDirection="row-reverse" w="full">
            <Button size="lg" colorScheme="blue" isLoading={isSubmitting} type="submit">
              Submit
            </Button>
          </Box>
        </VStack>
      </form>
    </Container>
  );
};
