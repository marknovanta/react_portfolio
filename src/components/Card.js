import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      backgroundColor="white"
      color="black"
      borderRadius="10px"
    >
      <Image src={imageSrc} alt='image' borderRadius="10px" />
      <VStack
        spacing={5}
        alignItems="left"
        padding="10px"
      >
        <Heading as='h5' size='sm'>{title}</Heading>
        <Text fontSize='xs' color="gray">{description}</Text>
        <HStack>
          <Text fontSize='xs'>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
