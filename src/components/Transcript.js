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
const Transcript = ({ messages }) => {
  console.log(messages)
  return (
    <Box borderWidth="1px" borderRadius="lg">
      <Tabs color={"black"} size="lg">
        <TabList>
          <Tab>Everyone</Tab>
          {/* < Tab>Alice</Tab> */}
          <Tab>Professor</Tab>
        </TabList>
        <br />
        <TabPanels>
          <TabPanel>

            {messages.map((data, idx) => {
              if (idx % 2) {
                return (
                  <Grid
                    bg={"rgba(196, 196, 196, 0.28)"}
                    templateColumns="repeat(8, 1fr)"
                    w="full"
                  >
                    <GridItem colSpan={7} h="10">
                      <Text m={4}>
                        {data.text}
                      </Text>
                    </GridItem>
                    <GridItem colSpan={1} m={6}>
                      <PlayCircleFilledWhiteIcon fontSize={"large"} />
                    </GridItem>
                  </Grid>
                )
              } else {
                return (<Grid templateColumns="repeat(8, 1fr)" w="full">
                  <GridItem colSpan={7} h="10">
                    <Text m={4}>
                      {data.text}
                    </Text>
                  </GridItem>
                  <GridItem colSpan={1} m={6}>
                    <PlayCircleFilledWhiteIcon fontSize={"large"} />
                  </GridItem>
                </Grid>)
              }
            })}



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
