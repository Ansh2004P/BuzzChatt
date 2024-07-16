import React from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../components/Authentication/login";
import Signup from "../components/Authentication/signup";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        textColor={"black"}
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        opacity={0.9}
        w="100%"
        m="50px 0 0px 0"
        borderTopLeftRadius={"25px"}
        borderTopRightRadius={"25px"}
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          BuzzChat
        </Text>
      </Box>
      <Box
        bg="white"
        opacity={0.9}
        w="100%"
        p={4}
        borderBottomRightRadius={"25px"}
        borderBottomLeftRadius={"25px"}
      >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
