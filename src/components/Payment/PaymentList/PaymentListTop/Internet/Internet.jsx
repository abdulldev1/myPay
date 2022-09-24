import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import InternetIcon from "./../../icon/internet.png";

export default function Internet() {
  return (
    <RouterLink to="/internet" className="boxes after">
      <Box
        className="box internet"
        w="64px"
        height="64px"
        backgroundColor="rgba(255, 54, 131, 0.1)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        borderRadius="16px"
        bottom="45%"
        flexDirection="row"
      >
        <img className="internet-icon" src={InternetIcon} alt="operators" />
      </Box>
      <Heading
        as="h2"
        fontSize="20px"
        color="#586268"
        fontWeight="normal"
        lineHeight="32px"
        top="65%"
        position="absolute"
      >
        İnternet
      </Heading>
    </RouterLink>
  );
}
