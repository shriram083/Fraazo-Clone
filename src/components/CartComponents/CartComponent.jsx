import React from "react";
import CartProduct from "./CartProduct";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const CartComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  const size = "sm";

  return (
    <>
      <Button
        onClick={() => handleClick()}
        key={size}
        m={4}
      >{`Open ${size} Drawer`}</Button>

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`My Cart (3 items)
`}</DrawerHeader>
          <DrawerBody>
            {/* pass props in cartProduct */}
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />

            <CartProduct />
            <CartProduct />

            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default CartComponent;
