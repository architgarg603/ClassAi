import React from "react";
import ClassCard from ".././components/ClassCard";
import { Box, HStack, Wrap, WrapItem, Text } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
const data = [
  {
    title: "BIO101",
    subtitle: "Intro to Biology",
  },
  {
    title: "MCV4UN",
    subtitle: "Calculus and Vectors",
  },
  {
    title: "ENG4UN",
    subtitle: "English",
  },
  {
    title: "SCH4UN",
    subtitle: "Chemistry",
  },
  {
    title: "SPH4UN",
    subtitle: "Physics",
  },
];

const Classes = () => {
  const cards = data.map((item) => {
    return (
      <WrapItem>
        <ClassCard title={item.title} subtitle={item.subtitle} />
      </WrapItem>
    );
  });
  return (
    <>
      <HStack ml={"93px"} mt={"34px"} justifyContent={"flex-start"}>
        <PlusSquareIcon w={8} h={8} />
        <Text>New Class</Text>
      </HStack>
      <Box p={"75px"}>
        <Wrap spacing="118px">{cards}</Wrap>
      </Box>
    </>
  );
};

export default Classes;
