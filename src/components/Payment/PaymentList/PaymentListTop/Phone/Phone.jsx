import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Link as RotuerLink } from "react-router-dom";

import phoneIcon from "./../../icon/phone.png";

export default function Phone() {
  return (
    <RotuerLink to="/phone" className="boxes after">
      <Box
        className="box phone"
        w="64px"
        height="64px"
        backgroundColor="rgba(55, 191, 254, 0.1)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        borderRadius="16px"
        bottom="45%"
        flexDirection="row"
      >
        <img className="internet-icon" src={phoneIcon} alt="operators" />
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
        Telefon
      </Heading>
    </RotuerLink>
  );
}
