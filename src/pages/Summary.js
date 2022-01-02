import React from "react";
import {
  Box,
  HStack,
  Heading,
  TabList,
  Tabs,
  TabPanel,
  Tab,
  TabPanels,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import Transcript from ".././components/Transcript";
import Actions from "../components/Actions";
import Questions from "../components/Questions";
const Summary = () => {
  return (
    <Box p={"65px"}>
      <HStack
        alignContent={"center"}
        justifyContent={"space-between"}
        spacing={4}
      >
        <HStack spacing={4}>
          <Link to="/Lectures">
            <ArrowBackIcon w={8} h={8} />
          </Link>

          <Heading>Intro to Bio Lecture Summary</Heading>
        </HStack>
      </HStack>
      <Box my={10}>
        <Tabs isManual variant="enclosed" size="lg">
          <TabList>
            <Tab _selected={{ color: "white", bg: "black" }} px={8}>
              Transcript
            </Tab>
            <Tab _selected={{ color: "white", bg: "black" }} px={8}>
              Questions
            </Tab>
            <Tab _selected={{ color: "white", bg: "black" }} px={8}>
              Actions
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Transcript />
            </TabPanel>

            <TabPanel>
              <Questions />
            </TabPanel>
            <TabPanel>
              <Actions />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Summary;
