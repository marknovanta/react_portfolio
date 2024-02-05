import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const pic = "https://i.pravatar.cc/150?img=7"

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    
    <Avatar size='2xl' name='Pete' src={pic} />
    <VStack spacing={50}>
      <Heading as='h4' size='md'>
        {greeting}
      </Heading>
      
      <Heading as='h2' size='2xl'>
        {bio1}
      </Heading>
    </VStack>
    <Heading as='h2' size='2xl'>
        {bio2}
      </Heading>
  </FullScreenSection>
);

export default LandingSection;
