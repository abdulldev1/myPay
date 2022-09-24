import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import InzibatiIcon from "./../../icon/inzibati.png";

export default function Inzibati() {
  return (
    <RouterLink to="/adminpay" className="boxes after">
      <Box
        className="box admin-pay"
        w="64px"
        height="64px"
        backgroundColor="rgba(66, 218, 94, 0.1)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        borderRadius="16px"
        bottom="45%"
        flexDirection="row"
      >
        <img className="internet-icon" src={InzibatiIcon} alt="operators" />
      </Box>
      <Heading
        as="h2"
        fontSize="20px"
        color="#586268"
        fontWeight="normal"
        lineHeight="32px"
        left="8%"
        bottom="2.5%"
        position="absolute"
      >
        İnzibati cərimə ödənişləri
      </Heading>
    </RouterLink>
  );
}
