import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/downloadAppBg.svg";
import androidStore from "../assets/AndroidStore.png";
import appleStore from "../assets/appleStore.png";
import googlePlay from "../assets/googlePlay.png";
import mobileApp from "../assets/homepage/mobileApp.png";
import { useRef } from "react";
import { useState } from "react";
const DownloadApp = () => {
  const [mobileNum, setMobileNum] = useState("");

  // console.log(mobileNum);
  return (
    <Box>
      <Flex>
        <Box w={"50%"}  position={"relative"}>
          <Image src={logo} alt="" />
          <Box
            position={"absolute"}
            top={0}
            left={0}
            right={0}
            bottom={0}
            // border="1px solid red"
          >
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              verticalAlign="middle"
              mt={"140px"}
            >
              <Image
                h="450px"
                verticalAlign={"middle"}
                // src="https://fraazo.com/static/app-screen-95bf468762091341a8e4bb213eeda2f8.png"
                src={mobileApp}
              />
            </Flex>
          </Box>
        </Box>
        <Box
          w={"50%"}
          
          p={"152px 0 0 95px"}
          textAlign={"left"}
        >
          <Container
            fontSize={"40px"}
            lineHeight={"48px"}
            fontWeight={600}
            p={"0 0 18px 0"}
          >
            Download The App
          </Container>
          <Container
            fontSize={"18px"}
            lineHeight={"25px"}
            fontWeight={400}
            p={"0 140px 40px 0"}
          >
            Enter your phone number to receive a text with a link to download
            the app
          </Container>
          <Flex
            h={"51px"}
            w={"266px"}
            rounded="95px"
            border={"1px solid #e5e5e5"}
            p={"5px"}
            // gap={5}
            fontWeight={600}
          >
            <Flex
              bg={"black"}
              rounded="95px"
              p={"0 20px"}
              gap={2}
              alignItems={"center"}
              cursor={"pointer"}
            >
              <Flex ml={2}>
                <Image height={"20px"} src={androidStore} />
              </Flex>
              <Box color={"white"}>Android</Box>
            </Flex>
            <Flex p={5} gap={2} alignItems={"center"} cursor={"pointer"}>
              <Box fontSize={"24px"}>
                <i className="fa-brands fa-apple"></i>
              </Box>
              <Box>IPhone</Box>
            </Flex>
          </Flex>
          <Box p={"20px 140px 20px 0"}>
            <Flex
              h={"71px"}
              border={
                mobileNum.length < 10
                  ? "1px solid #e5e5e5"
                  : "1px solid #5dc6ad;"
              }
              rounded={"5px"}
              alignItems={"center"}
            >
              <Flex alignItems={"center"}>
                <Flex>
                  <Text pl={"20px"} fontSize={"18px"} lineHeight={"22px"}>
                    + 91
                  </Text>
                </Flex>
                <Flex bg={"#e5e5e5"} h={"36px"} w={"2px"} ml={"15px"}></Flex>
              </Flex>

              <Flex pl={"15px"}>
                <Input
                  variant="unstyled"
                  maxLength="10"
                  type={"text"}
                  placeholder="Enter Your Mobile number"
                  w={"221px"}
                  fontSize={"18px"}
                  lineHeight={"22px"}
                  _placeholder={{ color: "#c9c9c9" }}
                  onChange={(e) => setMobileNum(e.target.value)}
                />
              </Flex>
            </Flex>
          </Box>
          <Flex
            pr={"140px"}
            h={"71px"}
            // border="1px solid #e5e5e5"
            rounded={"5px"}
            alignItems={"center"}
          >
            <Button
              disabled={mobileNum.length < 10}
              colorScheme="teal"
              h={"100%"}
              w={"100%"}
              bgGradient="linear(91.88deg,#5dc6ad 12.32%,#4cdfbc)"
              _hover={{ bgGradient: "linear(91.88deg,#5dc6ad 12.32%,#4cdfbc)" }}
            >
              <Box fontSize={"20px"} fontWeight={500}>
                SUBMIT
              </Box>
            </Button>
          </Flex>
          <Flex p={"54px 0 20px 0"} alignItems={"center"} gap={3}>
            <Box fontSize={"18px"} opacity={"0.6"}>
              Available on
            </Box>
            <Box>
              <a
                href="https://play.google.com/store/apps/details?id=com.fraazo.app"
                target="_blank"
              >
                <Image src={googlePlay}></Image>
              </a>
            </Box>
            <Box>
              <a
                href="https://apps.apple.com/us/app/fraazo/id1243998420"
                target="_blank"
              >
                <Image src={appleStore}></Image>
              </a>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default DownloadApp;
