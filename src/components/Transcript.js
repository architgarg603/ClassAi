import React from "react";
import {
  TabPanel,
  Tabs,
  Tab,
  TabPanels,
  Grid,
  GridItem,
  Box,
  TabList,
  Text,
} from "@chakra-ui/react";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
const Transcript = () => {
  return (
    <Box borderWidth="1px" borderRadius="lg">
      <Tabs color={"black"} size="lg">
        <TabList>
          <Tab>Everyone</Tab>
          <Tab>Alice</Tab>
          <Tab>Professor</Tab>
        </TabList>
        <br />
        <TabPanels>
          <TabPanel>
            <Grid
              bg={"rgba(196, 196, 196, 0.28)"}
              templateColumns="repeat(8, 1fr)"
              h="100px"
              w="full"
            >
              <GridItem colSpan={7} h="10">
                <Text m={4}>
                  Sunt enim reprehenderit incididunt labore reprehenderit
                  exercitation sunt nisi nisi aliquip Lorem irure laborum.
                  Voluptate ipsum esse et magna mollit fugiat mollit elit
                  excepteur consequat. Laboris laborum aute sunt enim occaecat
                  incididunt labore. Commodo ut nostrud Lorem est Lorem nostrud
                  velit consectetur exercitation pariatur ex reprehenderit
                  magna.
                </Text>
              </GridItem>
              <GridItem colSpan={1} m={6}>
                <PlayCircleFilledWhiteIcon fontSize={"large"} />
              </GridItem>
            </Grid>
            <Grid templateColumns="repeat(8, 1fr)" h="125px" w="full">
              <GridItem colSpan={7} h="10">
                <Text m={4}>
                  Sunt enim reprehenderit incididunt labore reprehenderit
                  exercitation sunt nisi nisi aliquip Lorem irure laborum.
                  Voluptate ipsum esse et magna mollit fugiat mollit elit
                  excepteur consequat. Laboris laborum aute sunt enim occaecat
                  incididunt labore.
                </Text>
              </GridItem>
              <GridItem colSpan={1} m={6}>
                <PlayCircleFilledWhiteIcon fontSize={"large"} />
              </GridItem>
            </Grid>
            <Grid
              bg={"rgba(196, 196, 196, 0.28)"}
              templateColumns="repeat(8, 1fr)"
              h="125px"
              w="full"
            >
              <GridItem colSpan={7} h="10">
                <Text m={4}>
                  Sunt enim reprehenderit incididunt labore reprehenderit
                  exercitation sunt nisi nisi aliquip Lorem irure laborum.
                  Commodo ut nostrud Lorem est Lorem nostrud velit consectetur
                  exercitation pariatur ex reprehenderit magna.
                </Text>
              </GridItem>
              <GridItem colSpan={1} m={6}>
                <PlayCircleFilledWhiteIcon fontSize={"large"} />
              </GridItem>
            </Grid>
            <Grid templateColumns="repeat(8, 1fr)" h="125px" w="full">
              <GridItem colSpan={7} h="10">
                <Text m={4}>
                  Sunt enim reprehenderit incididunt labore reprehenderit
                  exercitation sunt nisi nisi aliquip Lorem irure laborum.
                  Commodo ut nostrud Lorem est Lorem nostrud velit consectetur
                  exercitation pariatur ex reprehenderit magna.
                </Text>
              </GridItem>
              <GridItem colSpan={1} m={6}>
                <PlayCircleFilledWhiteIcon fontSize={"large"} />
              </GridItem>
            </Grid>
          </TabPanel>
          <TabPanel>
            <Text>two!</Text>
          </TabPanel>
          <TabPanel>
            <Text>three!</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Transcript;
