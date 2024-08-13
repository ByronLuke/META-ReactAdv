import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      backgroundColor="white"
      _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
      transition="transform 0.3s ease-in-out"
    >
      <Image src={imageSrc} alt={title} objectFit="cover" width="100%" height="200px" />

      <VStack align="start" spacing={4} p={6}>
        <Heading as="h3" size="md" color="gray.800">
          {title}
        </Heading>
        <Text color="gray.600">
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

export default Card;
