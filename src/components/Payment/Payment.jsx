import {
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

import imageSearch from "./image/Fill.png";
import Check from "./image/Vector.png";
import PaymentList from "./PaymentList/PaymentList";

export default function Payment() {
  return (
    <Flex
      className="main"
      alignItems="center"
      justifyContent="center"
      w="100%"
      h="100vh"
      bg="#444"
    >
      <Flex
        w={1512}
        h={677}
        alignItems="center"
        flexDirection="column"
        bg="#f9fafb"
        p="80px 96px"
      >
        <Flex
          w={1318}
          h={140}
          flex-direction="column"
          align-items="flex-start"
          p={0}
          gap="32px"
          flexWrap="wrap"
          className="payment-head"
        >
          <Heading
            as="h1"
            width="130px"
            height="56px"
            font-family="Montserrat, sans-serif"
            font-style="normal"
            font-weight="500"
            font-size="36px"
            line-height="56px"
            color="#2e3131"
            flex="none"
            position="relative"
          >
            Ödəniş
          </Heading>
          <FormControl w="1318px" h="48px" border="6px" position="relative">
            <Image
              src={imageSearch}
              alt="search"
              left="16.5px"
              top="15px"
              position="absolute"
              zIndex="1"
            />
            <Text
              w="1px"
              h="20px"
              bg="#e8ecf1"
              position="absolute"
              left="52px"
              bottom="16px"
              zIndex="2"
            ></Text>
            <Input
              type="search"
              placeholder="Axtar"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              w="100%"
              h="100%"
              bg="#fff"
              borderRadius="6px"
              border="none"
              outline="none"
              p="0px 68px"
              position="relative"
              _placeholder={{
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#acb3b8",
                position: "absolute",
                left: "69px",
                top: "15px",
              }}
            />
            <Button
              type="submit"
              w="44px"
              h="32px"
              bg="#44bc82"
              borderRadius="6px"
              position="absolute"
              right="8px"
              top="8px"
            >
              <Image
                src={Check}
                alt="check"
                position="absolute"
                left="13px"
                bottom="28.12%"
              />
            </Button>
          </FormControl>
        </Flex>
        <PaymentList />
      </Flex>
    </Flex>
  );
}
