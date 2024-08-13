import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hey! I'm Byron Luke";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} alignItems="center">
      <Avatar
        size="2xl"
        name="Byron"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHEGYT5VPhxJY2pU4EWS0bHKA1oRAEM-oSaA&s" 
      />
      <Heading as="h1" size="xl" color="white">
        {greeting}
      </Heading>
      <Text fontSize="xl" color="white">
        {bio1}
      </Text>
      <Text fontSize="xl" color="white">
        {bio2}
      </Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
