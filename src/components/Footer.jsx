import { Image, Container, Box, Text } from "@chakra-ui/react";
import React from "react";
import logoSpacex from "../assets/logo-spacex.png";

import "../assets/main.css";

export const Footer = () => {
  return (
    <>
      <Container maxW="12xl" bg="#26272b" centerContent className="footer">
        <Box padding="4" h="100px" color="white" maxW="md">
          <Text align={"center"}>© 2022 Desarrollo by Cristobal Maldonado</Text>
          <Text align={"center"}>todos los derechos reservados</Text>
        </Box>
      </Container>
    </>
  );
};
