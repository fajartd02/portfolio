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
import PersistentDrawer from "./PersistenceDrawer";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen: isDrawerOpen, onOpen, onClose } = useDisclosure();

  const handleToggle = () => setIsOpen(!isOpen);

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
          </Stack>
        </Box>
        <Box>
          {isOpen ? null : (
            <Box display={{ base: "none", md: "block" }}>
              <IconButton
                aria-label="Toggle dark mode"
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                size="md"
                ml={{ md: "4" }}
              />
            </Box>
          )}
          <Box display={{ base: "block", md: "none" }}>
            <IconButton
              aria-label="Toggle navigation"
              icon={<HamburgerIcon />}
              size="md"
              onClick={onOpen}
              display={isOpen ? "none" : "flex"}
            />
          </Box>
        </Box>
      </Flex>
      <PersistentDrawer />
    </Box>
  );
}
export default Header;
