import { Box, Heading, Text, HStack } from "@chakra-ui/react";
import React from "react";

const Dashboard = () => {
  return (
    <Box p={"65px"}>
      <Heading mb={"250px"}>BIO101: Intro to Biology</Heading>
      <HStack spacing={"150px"}>
        <Box
          maxW="xs"
          maxH="s"
          m={4}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxSize={"sm"}
        >
          <Box p="6">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              <Text fontSize={"24px"}>Lectures</Text>
            </Box>
          </Box>
        </Box>
        <Box
          maxW="xs"
          maxH="s"
          m={4}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxSize={"sm"}
        >
          <Box p="6">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              <Text fontSize={"24px"}>Schedule</Text>
            </Box>
          </Box>
        </Box>
        <Box
          maxW="xs"
          maxH="s"
          m={4}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxSize={"sm"}
        >
          <Box p="6">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              <Text fontSize={"24px"}>Syllabus</Text>
            </Box>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default Dashboard;
