import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/homeLogo.svg";
import {
  Box,
  Button,
  Collapse,
  Flex,
  Image,
  Icon,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Container,
} from "@chakra-ui/react";

import {
  HamburgerIcon,
  CloseIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import styled from "styled-components";

const CartIcon = styled.i`
  font-size: 18px;
  cursor: pointer;
  margin-left: 10px;
`;
const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  // const [NAV_ITEMS, setNAV_ITEMS] = React.useState(navItems);
  // console.log(NAV_ITEMS);

  return (
    <Box
      // style={{ position: "fixed", width: "100%", zIndex: "100000" }}
      bg={useColorModeValue("white", "gray.800")}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
    >
      <Container maxW="container.xl">
        <Flex
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
          justifyContent="space-between"
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              fontWeight="bold"
              fontSize="20px"
              color={useColorModeValue("orange.400", "white")}
            >
              <Link to="/">Home</Link>
            </Text>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              {/* <DesktopNav NAV_ITEMS={NAV_ITEMS} /> */}
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Stack
              display={"flex"}
              alignItems="center"
              justifyContent="center"
              color={useColorModeValue("black", "white")}
            >
              {/* //TODO  */}
              <Link to="/cart">
                <CartIcon
                  className="fa-solid fa-cart-shopping"
                  
                ></CartIcon>
              </Link>
            </Stack>
            <Button fontSize={"sm"} fontWeight={400}>
              Sign In
            </Button>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              _hover={{
                bg: "pink.300",
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          {/* <MobileNav NAV_ITEMS={NAV_ITEMS} /> */}
        </Collapse>
      </Container>
    </Box>
  );
};

export default Navbar;
