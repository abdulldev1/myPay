import "./../../style.css";

import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import aboutIcon from "./../../icon/about.png";

export default function About() {
  return (
    <RouterLink to="/about" className="boxes">
      <Box
        className="box about"
        w="64px"
        height="64px"
        backgroundColor="rgba(164, 212, 233, 0.2)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        borderRadius="16px"
        bottom="45%"
        border="1px solid #f3f5f8"
      >
        <img className="internet-icon" src={aboutIcon} alt="operators" />
      </Box>
      <Heading
        className="last-child"
        as="h2"
        fontSize="20px"
        color="#1E3A8A"
        fontWeight="normal"
        lineHeight="32px"
        top="65%"
        position="absolute"
      >
        Digər
      </Heading>
    </RouterLink>
  );
}
