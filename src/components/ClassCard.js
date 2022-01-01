import React from "react";
import { Box, Image } from "@chakra-ui/react";

const ClassCard = (props) => {
  return (
    <Box
      maxW="xs"
      maxH="2xs"
      m={4}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxSize={"sm"}
    >
      {/*<Image src={"https://bit.ly/2Z4KKcF"} alt={"nothing"} /> */}
      <Box p="6" pt={"175px"}>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {props.title}
        </Box>

        <Box>
          <Box as="span" color="gray.600" fontSize="sm">
            {props.subtitle}
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ClassCard;
