import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import kommunalIcon from "./../../icon/kommunal.png";

export default function Kommunal() {
  return (
    <RouterLink to="/communal" className="boxes after">
      <Box
        className="box kommunal"
        w="64px"
        height="64px"
        backgroundColor="rgba(254, 144, 1, 0.1)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        borderRadius="16px"
        bottom="45%"
        flexDirection="row"
      >
        <img className="internet-icon" src={kommunalIcon} alt="operators" />
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
        Komunal xidmətlər
      </Heading>
    </RouterLink>
  );
}
