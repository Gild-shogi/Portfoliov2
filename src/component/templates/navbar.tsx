import { useState } from "react";
import {
  Button,
  HStack,
  VStack,
  Image,
  Link,
  Spacer,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack
        as="header"
        top={0}
        zIndex="10"
        overflow="unset"
        position="sticky"
        bg="white"
        px={4}
        py={2}
        justifyContent="space-between"
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={<HamburgerIcon />}
          onClick={onOpen}
          aria-label="Open Menu"
        />
        <HStack display={{ base: "none", md: "flex" }} spacing={4}>
          <Link href="#Skills">
            <Button>Skills</Button>
          </Link>
          <Link href="#Products">
            <Button>Products</Button>
          </Link>
          <Link href="#Publication">
            <Button>Publication</Button>
          </Link>
          <Link href="#Presentation">
            <Button>Presentation</Button>
          </Link>
          <Link href="#History">
            <Button>History</Button>
          </Link>
        </HStack>
        <Spacer />
        <Link className="microtask repeat lazyload" href="//crowd4u.org">
          <Image src="//crowd4u.org/img/crowd4u_banner182x47.png" />
        </Link>
      </HStack>

      {/* モバイル用ドロワーメニュー */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <VStack align="start" spacing={4} mt={4}>
              <IconButton
                icon={<CloseIcon />}
                onClick={onClose}
                aria-label="Close Menu"
                alignSelf="flex-end"
              />
              <Link href="#Skills" onClick={onClose}>
                <Button w="full">Skills</Button>
              </Link>
              <Link href="#Products" onClick={onClose}>
                <Button w="full">Products</Button>
              </Link>
              <Link href="#Publication" onClick={onClose}>
                <Button w="full">Publication</Button>
              </Link>
              <Link href="#Presentation" onClick={onClose}>
                <Button w="full">Presentation</Button>
              </Link>
              <Link href="#History" onClick={onClose}>
                <Button w="full">History</Button>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavBar;
