import "./Payment.css";

import { Box } from "@chakra-ui/react";
import React from "react";

import About from "./About/About";
import BankService from "./BankService/BankService";
import Eylence from "./Eylence/Eylence";
import imageSearch from "./image/Fill.png";
import Check from "./image/Vector.png";
import Internet from "./Internet/Internet";
import Inzibati from "./InzibatiCerime/Inzibati";
import Kommunal from "./Kommunal/Kommunal";
import Operators from "./Operators/Operators";
import Phone from "./Phone/Phone";
import Tv from "./TV/Tv";

export default function Payment() {
  return (
    <div className="main">
      <Box className="container">
        <Box className="payment-head">
          <h1>Ödəniş</h1>
          <form>
            <img src={imageSearch} alt="search" />
            <span></span>
            <input type="search" placeholder="Axtar" />
            <button type="submit">
              <img src={Check} alt="check" />
            </button>
          </form>
        </Box>
        <Operators />
        <Internet />
        <Kommunal />
        <Phone />
        <Tv />
        <Inzibati />
        <Eylence />
        <BankService />
        <About />
      </Box>
    </div>
  );
}
