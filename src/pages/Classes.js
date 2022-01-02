import React from "react";
import ClassCard from ".././components/ClassCard";
import { Box, HStack, Wrap, WrapItem, Text } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import img1 from ".././assets/1.png";
import img2 from ".././assets/2.png";
import img3 from ".././assets/3.png";
import img4 from ".././assets/4.png";
import img5 from ".././assets/5.png";
import { Link } from "react-router-dom";

const data = [
  {
    title: "BIO101",
    subtitle: "Intro to Biology",
    image: img1,
  },
  {
    title: "MCV4UN",
    subtitle: "Calculus and Vectors",
    image: img5,
  },
  {
    title: "ENG4UN",
    subtitle: "English",
    image: img4,
  },
  {
    title: "SCH4UN",
    subtitle: "Chemistry",
    image: img3,
  },
  {
    title: "SPH4UN",
    subtitle: "Physics",
    image: img2,
  },
];

const Classes = () => {
  const cards = data.map((item) => {
    return (
      <WrapItem>
        <Link to="/dashboard">
          <ClassCard
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
          />
        </Link>
      </WrapItem>
    );
  });
  return (
    <>
      <HStack ml={"93px"} mt={"34px"} justifyContent={"flex-start"}>
        <PlusSquareIcon w={8} h={8} />
        <Text>New Class</Text>
      </HStack>
      <Box p={"20px"}>
        <Wrap spacing="1px">{cards}</Wrap>
      </Box>
    </>
  );
};

export default Classes;
