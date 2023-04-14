import { motion } from "framer-motion";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FaLaptopCode } from "react-icons/fa";

function Hero() {
  return (
    <Flex
      minHeight="80vh"
      align="center"
      justify="center"
      position="relative"
      overflow="hidden"
    >
      <Box textAlign="center">
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ repeat: Infinity, duration: 3 }}
          style={{ display: "inline-block", marginRight: "10px" }}
        >
          <FaLaptopCode size={80} color="#6B7280" />
        </motion.div>
        <Heading as="h1" size="4xl">
          Fajar Muhammad Hamka
        </Heading>
        <Text fontSize="2xl" fontWeight="bold" mt="4">
          A Software Engineer
        </Text>
      </Box>
    </Flex>
  );
}

export default Hero;
