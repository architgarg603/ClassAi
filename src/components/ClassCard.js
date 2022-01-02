import React from "react";
import { Box, Image } from "@chakra-ui/react";

const ClassCard = (props) => {
  return (
    <Box
      maxW="336px"
      maxH="230px"
      m={4}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxSize={"sm"}
      backgroundImage={props.image}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box p="6" pt={"150px"}>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          color={"white"}
          fontSize={"md"}
          isTruncated
        >
          {props.title}
        </Box>

        <Box>
          <Box as="span" color="white" fontSize="sm">
            {props.subtitle}
          </Box>
        </Box>

        <Box display="flex" alignItems="center">
          <Box as="span" ml="2" color="white" fontSize="sm"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ClassCard;
