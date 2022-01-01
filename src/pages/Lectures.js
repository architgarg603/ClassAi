import {
  Box,
  Heading,
  HStack,
  Text,
  Flex,
  Button,
  AspectRatio,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import {
  ArrowBackIcon,
  PlusSquareIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
const Lectures = () => {
  return (
    <Box p={"65px"}>
      <HStack
        alignContent={"center"}
        justifyContent={"space-between"}
        spacing={4}
      >
        <HStack spacing={4}>
          <ArrowBackIcon w={8} h={8} />
          <Heading>Lectures</Heading>
        </HStack>
        <HStack spacing={4}>
          <PlusSquareIcon w={4} h={4} />
          <Heading size={"md"}>Upload New Lecture</Heading>
        </HStack>
      </HStack>

      <Flex ml={10} flexDirection={"column"} my={5}>
        <Text my={5} fontSize={"24px"}>
          Upcoming Lectures
        </Text>
        <HStack justifyContent={"space-between"}>
          <Flex
            borderLeft="1px"
            borderColor="black"
            flexDirection={"column"}
            px={4}
          >
            <Text fontSize={"22px"} fontWeight={"semibold"}>
              Intro to Bio
            </Text>
            <Text color={"grey"} fontSize={"18px"}>
              December 13 2021
            </Text>
            <Text fontSize={"22px"}>
              We went over ur mom blah blah blah random description
            </Text>
          </Flex>
          <Button size="lg" colorScheme="blue">
            Go to Lecture <ArrowForwardIcon ml={3} />
          </Button>
        </HStack>
        <Flex flexDirection={"column"} mt={150}>
          <Text fontSize={"24px"} mb={4}>
            Past Lectures
          </Text>

          <Grid mb={8} gap={10} templateColumns="repeat(13, 1fr)">
            <GridItem colSpan={4}>
              <AspectRatio maxW="400px" ratio={2 / 1}>
                <iframe
                  title="naruto"
                  src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                  allowFullScreen
                />
              </AspectRatio>
            </GridItem>
            <GridItem colStart={5} colEnd={12}>
              <Text fontSize={"22px"} fontWeight={"semibold"}>
                Intro to Bio
              </Text>
              <Text color={"grey"} fontSize={"18px"}>
                December 13 2021
              </Text>
              <Text fontSize={"22px"}>
                We went over ur mom blah blah blah random description
              </Text>
              <br />
              <Text fontSize={"20px"} fontWeight={"semibold"} color={"blue"}>
                View Summary <ArrowForwardIcon />
              </Text>
            </GridItem>
          </Grid>
          <Grid gap={10} templateColumns="repeat(13, 1fr)">
            <GridItem colSpan={4}>
              <AspectRatio maxW="400px" ratio={2 / 1}>
                <iframe
                  title="naruto"
                  src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                  allowFullScreen
                />
              </AspectRatio>
            </GridItem>
            <GridItem colStart={5} colEnd={12}>
              <Text fontSize={"22px"} fontWeight={"semibold"}>
                Intro to Bio
              </Text>
              <Text color={"grey"} fontSize={"18px"}>
                December 13 2021
              </Text>
              <Text fontSize={"22px"}>
                We went over ur mom blah blah blah random description
              </Text>
              <br />
              <Text fontSize={"20px"} fontWeight={"semibold"} color={"blue"}>
                View Summary <ArrowForwardIcon />
              </Text>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Lectures;
