import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import bankIcon from "./../../icon/bank.png";

export default function BankService() {
  return (
    <RouterLink to="/bankservice" className="boxes">
      <Box
        className="box bank-service"
        w="64px"
        height="64px"
        bg="rgba(61, 184, 104, 0.1)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        borderRadius="16px"
        bottom="45%"
        flexDirection="row"
      >
        <img className="internet-icon" src={bankIcon} alt="operators" />
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
        Bank xidmәtlәri, Sığorta
      </Heading>
    </RouterLink>
  );
}
