import { Flex } from "@chakra-ui/react";
import React from "react";

import PaymentListBottom from "./PaymentListBottom/PaymentListBottom";
import PaymentListTop from "./PaymentListTop/PaymentListTop";

export default function PaymentList() {
  return (
    <Flex className="payment-ban" w={1320} h={345} top="7" position="relative">
      <PaymentListTop />
      <PaymentListBottom />
    </Flex>
  );
}
