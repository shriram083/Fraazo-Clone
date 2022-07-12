import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import myorder from "../assets/myorder.png";
import invite from "../assets/invite.png";
import logout from "../assets/logout.svg";
import mycredit from "../assets/mycredit.png";
import support from "../assets/support.svg";
import { Userlogout } from "../store/authentication/auth.actions";
import { useEffect } from "react";

const LinkItems = [
  { name: "My Orders", icon: myorder, add: "myorders" },
  { name: "My Credits", icon: mycredit, add: "mycredits" },
  { name: "Invite A Friend", icon: invite, add: "invite" },
  {
    name: "Help & Support",
    icon: "https://raw.githubusercontent.com/shriram083/Fraazo-Clone/284b6e2ffac46355138edb6633b44ae79b800e0d/src/assets/support.svg",
    add: "support",
  },
];

export const SimpleSidebar = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "18% 80%" }}>
      <Box minH="70vh" bg={useColorModeValue("", "gray.900")}>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          {children}
        </Box>
      </Box>
      <Outlet />
    </div>
  );
};

// interface SidebarProps extends BoxProps {
//     onClose: () => void;
// }

const SidebarContent = ({ onClose, ...rest }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mNumber = useSelector((otp) => otp.auth.otp.mobile);
  const accData = useSelector((otp) => otp.auth);
  console.log("mobile no", mNumber);
  console.log("details", accData);

  const getMobileNumber = () => {
    const { mobile } = JSON.parse(localStorage.getItem("currentLogin"));
    return mobile;
  };

  const handleLogout = () => {
    dispatch(Userlogout());
    navigate("/");
  };
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      // pos="fixed"
      h="500px"
      {...rest}
    >
      <Flex h="40" alignItems="center" mx="8" justifyContent="space-between">
        <div>
          <img
            src="https://thumbs.dreamstime.com/b/funny-fruit-orange-isolated-cartoon-character-cute-white-background-vector-illustration-positive-friendly-emoticon-88087413.jpg"
            alt=""
            width="120px"
            borderRadius="50%"
          />
          <p>+91 {getMobileNumber()}</p>
        </div>

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          onClick={() => navigate(`/myaccount/${link.add}`)}
        >
          <Image src={link.icon} mr="10px" />
          {link.name}
        </NavItem>
      ))}
      <NavItem color={"red.500"} onClick={() => handleLogout()}>
        <Image
          src={
            "https://raw.githubusercontent.com/shriram083/Fraazo-Clone/284b6e2ffac46355138edb6633b44ae79b800e0d/src/assets/logout.svg"
          }
          mr="10px"
        />
        {"Logout"}
      </NavItem>
    </Box>
  );
};

// interface NavItemProps extends FlexProps {
//     icon: IconType;
//     children: ReactText;
// }
const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        // borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "gray.100",
          // color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

// interface MobileProps extends FlexProps {
//     onOpen: () => void;
// }
const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
