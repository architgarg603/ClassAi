import { Box, Heading, Text, HStack } from "@chakra-ui/react";
import React from "react";
import syllabus from ".././assets/11.png";
import schedule from ".././assets/14.png";
import lectures from ".././assets/15.png";
import banner from ".././assets/10.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Box
      p={"65px"}
      justifyContent="center"
      backgroundImage={banner}
      backgroundPosition={"top"}
      backgroundRepeat="no-repeat"
      height={"250px"}
      w={"100%"}
      backgroundPosition={"top left"}
      backgroundSize={"cover"}
    >
      <Text mb={"100px"} color={"white"} fontSize={"6xl"} fontWeight={"bold"}>
        BIO101: Intro to Biology
      </Text>
      <HStack spacing={"150px"}>
        <Link to="/lectures">
          <Box
            minW="251px"
            minH="280px"
            m={4}
            borderRadius="lg"
            overflow="hidden"
            boxSize={"sm"}
            backgroundImage={schedule}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          >
            <Box p="6">
              <Box mt="1" fontWeight="semibold" lineHeight="tight" isTruncated>
                <Text color={"white"} fontSize={"24px"} paddingLeft={"50px"}>
                  Lectures
                </Text>
              </Box>
            </Box>
          </Box>
        </Link>
        <Box
          minW="251px"
          minH="280px"
          m={4}
          borderRadius="lg"
          overflow="hidden"
          boxSize={"sm"}
          backgroundImage={syllabus}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          <Box p="6">
            <Box mt="1" fontWeight="semibold" lineHeight="tight" isTruncated>
              <Text color={"white"} fontSize={"24px"} paddingLeft={"50px"}>
                Schedule
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          minW="251px"
          minH="280px"
          m={4}
          borderRadius="lg"
          overflow="hidden"
          boxSize={"sm"}
          backgroundImage={lectures}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          <Box p="6">
            <Box mt="1" fontWeight="semibold" lineHeight="tight" isTruncated>
              <Text color={"white"} fontSize={"24px"} paddingLeft={"50px"}>
                Syllabus
              </Text>
            </Box>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default Dashboard;
