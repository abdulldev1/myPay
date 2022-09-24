import { Flex } from "@chakra-ui/react";
import React from "react";

import About from "./About/About";
import BankService from "./BankService/BankService";
import Eylence from "./Eylence/Eylence";

export default function PaymentListBottom() {
  return (
    <Flex
      className="payment-bottom"
      gap="24px"
      width="1320px"
      h="160px"
      position="absolute"
      bottom="0"
    >
      <Eylence />
      <BankService />
      <About />
    </Flex>
  );
}
