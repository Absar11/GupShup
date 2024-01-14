import React from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Logo from "./LogoBlack.png";
import Login from "../component/Auth/Login";
import Signup from "../component/Auth/Signup";

const Homepage = () => {
  return (
    <Container maxWidth={"xl"} centerContent>
      <Box
        d="flex"
        justifyContent={"center"}
        p={3}
        w={"100%"}
        m={"40px 0 15px 0"}
      >
        <Flex d="flex" justifyContent={"center"} alignItems={"center"} gap={5}>
          <Image
            borderRadius="full"
            boxSize="90px"
            boxShadow="lg"
            src={Logo}
            alt="GupShup Logo"
          />
          <Text
            fontSize={"3xl"}
            fontFamily="Lemon"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
          >
            GupShup
          </Text>
        </Flex>
      </Box>
      <Box
        w={"100%"}
        backgroundColor="rgba(255, 255, 255, 0.5)"
        fontFamily="Work Sans"
        p={4}
        borderRadius={"lg"}
        borderWidth={"3px"}
        fontWeight={"3xl"}
        boxShadow="2px 2px 8px rgba(0, 0, 0, 0.3)"
      >
        <Tabs variant="enclosed" colorScheme="orange">
          <TabList>
            <Tab
              width={"50%"}
              sx={{ fontFamily: "Lemon", fontWeight: "lg" }}
              // bg={"black"}
              _selected={{ boxShadow: "3px -3px 2px rgba(0, 0, 0, 0.3)" }}
            >
              Login
            </Tab>
            <Tab
              width={"50%"}
              sx={{ fontFamily: "Lemon", fontWeight: "lg" }}
              _selected={{
                boxShadow: "-3px -3px 2px rgba(0, 0, 0, 0.3)",
              }}
            >
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{<Login />}</TabPanel>
            <TabPanel>{<Signup />}</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};
export default Homepage;
