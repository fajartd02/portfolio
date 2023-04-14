import { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Button,
  useColorModeValue,
  useDisclosure,
  IconButton,
  useColorMode,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen: isDrawerOpen, onOpen, onClose } = useDisclosure();

  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bg={useColorModeValue("white", "gray.800")}
      borderBottom="1px"
      borderColor={useColorModeValue("gray.200", "gray.900")}
      width="full"
      zIndex="10"
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="1200px"
        margin="0 auto"
        py="4"
        px="6"
      >
        <Box>
          <Heading as="h1" size="lg">
            fajarhamka.
          </Heading>
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            aria-label="Toggle navigation"
            icon={<HamburgerIcon />}
            size="md"
            onClick={onOpen}
            display={isOpen ? "none" : "flex"}
          />
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <Stack direction="row" spacing="4">
            {links.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                _hover={{ textDecoration: "none" }}
              >
                {link.label}
              </Button>
            ))}
            {isOpen ? null : (
              <Box display={{ base: "none", md: "block" }} mr="4">
                <IconButton
                  aria-label="Toggle dark mode"
                  icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                  onClick={toggleColorMode}
                  size="md"
                />
              </Box>
            )}
          </Stack>
        </Box>
      </Flex>

      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={onClose}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack spacing="4">
              {links.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  onClick={() => {
                    onClose();
                  }}
                  width="full"
                >
                  {link.label}
                </Button>
              ))}
              <Button
                variant="ghost"
                width="full"
                onClick={() => {
                  toggleColorMode();
                }}
                leftIcon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              >
                {colorMode === "light" ? "Dark" : "Light"} Mode
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
export default Header;
