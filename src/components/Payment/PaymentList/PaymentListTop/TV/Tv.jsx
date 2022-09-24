import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import tvIcon from "./../../icon/tv.png";

export default function Tv() {
  return (
    <RouterLink to="/tv" className="boxes after">
      <Box
        className="box tv"
        w="64px"
        height="64px"
        backgroundColor="rgba(139, 97, 244, 0.1)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        borderRadius="16px"
        bottom="45%"
        flexDirection="row"
      >
        <img className="internet-icon" src={tvIcon} alt="operators" />
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
        TV
      </Heading>
    </RouterLink>
  );
}
