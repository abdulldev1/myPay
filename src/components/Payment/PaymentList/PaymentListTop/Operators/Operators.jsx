import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import operatorIcon from "./../../icon/operator.png";

export default function Operators() {
  return (
    <RouterLink to="/operator" className="boxes after">
      <Box
        className="box operator"
        w="64px"
        height="64px"
        bg="rgba(55, 191, 254, 0.1)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        borderRadius="16px"
        bottom="45%"
        flexDirection="row"
        transition="0.1s"
      >
        <img className="operator-icon" src={operatorIcon} alt="operators" />
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
        Mobil Operatorlar
      </Heading>
    </RouterLink>
  );
}
