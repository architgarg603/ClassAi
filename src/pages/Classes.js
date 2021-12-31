import React from "react";
import { Box, Badge, Image, Center } from "@chakra-ui/react";
const Classes = () => {
  return (
    <Center>
      <Box
        maxW="sm"
        m={4}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxSize={"sm"}
      >
        <Image src={"https://bit.ly/2Z4KKcF"} alt={"nothing"} />
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            ></Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            BIO101
          </Box>

          <Box>
            <Box as="span" color="gray.600" fontSize="sm">
              Intro to Biology
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            <Box as="span" ml="2" color="gray.600" fontSize="sm"></Box>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default Classes;
