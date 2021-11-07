import { Button, ButtonGroup } from "@chakra-ui/button";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger
} from "@chakra-ui/popover";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { deleteProperty } from "./queries";

type Props = {
  id: string;
};

export const DeleteButton = ({ id }: Props) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  return (
    <>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={close}
        placement="bottom"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button color="red" onClick={open}>
            Delete
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>Are you sure you want to delete?</PopoverBody>
          <PopoverFooter d="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              <Button variant="outline" onClick={close}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={async () => {
                  if (await deleteProperty(id)) {
                    router.push("/");
                  }
                }}
              >
                Apply
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
};
