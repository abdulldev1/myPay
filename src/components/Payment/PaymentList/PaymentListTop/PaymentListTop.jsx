import { Flex } from "@chakra-ui/react";
import React from "react";

import Internet from "./Internet/Internet";
import Inzibati from "./InzibatiCerime/Inzibati";
import Kommunal from "./Kommunal/Kommunal";
import Operators from "./Operators/Operators";
import Phone from "./Phone/Phone";
import Tv from "./TV/Tv";

export default function PaymentListTop() {
  return (
    <Flex className="payment-top" gap="24px" w={1320} h={160}>
      <Operators />
      <Internet />
      <Kommunal />
      <Phone />
      <Tv />
      <Inzibati />
    </Flex>
  );
}
