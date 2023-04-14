import { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Button,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function PersistentDrawer() {
  const [isOpen, setIsOpen] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();

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

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={handleToggle}>
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
                onClick={handleToggle}
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
  );
}

export default PersistentDrawer;
