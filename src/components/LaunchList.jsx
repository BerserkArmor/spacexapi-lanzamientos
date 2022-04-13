import { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Image,
  Spinner,
  Box,
  Wrap,
  Container,
} from "@chakra-ui/react";

import { LaunchItem } from "./LaunchItem";
import { Footer } from "./Footer";
import * as API from "../services/launches";

export function LaunchList() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.log);
  }, []);

  return (
    <>
      <Container maxW="10xl" centerContent>
        <Heading
          align="center"
          fontFamily={"sans-serif"}
          color="#D3D3D3"
          bg={"#012E40"}
          borderRadius="md"
          as="h1"
          size="2xl"
          m={4}
          p={3}
          mt={"3.5em"}
        >
          Registro de Lanzamientos
        </Heading>
        <Heading
          fontFamily={"sans-serif"}
          align="center"
          color="#D3D3D3"
          bg={"#012E40"}
          as="h1"
          size="lg"
          m={4}
          p={3}
          borderRadius="md"
        >
          Encontrados: {launches.length}
        </Heading>
        {launches.length === 0 ? (
          <Flex justifyContent="center">
            <Spinner m={10} size="lg" justifyContent="center" color="red.500" />
          </Flex>
        ) : (
          <Wrap
            spacing="1rem"
            p={2}
            justify="space-around"
            alignItems={"center"}
          >
            {launches.map((launch, i) => (
              <LaunchItem key={`${launch.flight_number}-${i}`} {...launch} />
            ))}
          </Wrap>
        )}
      </Container>
      <Flex
        className="footerr"
        justifyContent={"flex-start"}
        flexDirection="column"
      >
        {launches.length === 0 ? <></> : <Footer />}
      </Flex>
    </>
  );
}
