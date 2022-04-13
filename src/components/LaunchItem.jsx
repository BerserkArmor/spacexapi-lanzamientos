import React from "react";
import { HiCalendar } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Button,
  Badge,
  Image,
  WrapItem,
} from "@chakra-ui/react";
import "../assets/main.css";

import dayjs from "dayjs";
import "dayjs/locale/es";

export function LaunchItem(launch) {
  const img_404 =
    "https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg";

  return (
    <WrapItem borderWidth="5px">
      {/* Box principal de la imagen e informacion del lanzamiento */}
      <Box maxW="23rem" bg={"#083040"} borderRadius="md" overflow={"hidden"}>
        {/* Flex contenedor de la imagen del lanzamiento */}
        <Flex m={4} justifyContent={"center"}>
          <Image
            src={launch.links?.mission_patch || img_404}
            alt={launch.mission_name}
            borderRadius="full"
            boxSize="250px"
            loading="lazy"
          />
        </Flex>
        {/* Contenedor principal del card */}
        <Box
          fontFamily={"monospace"}
          p="6"
          fontSize={"1rem"}
          minW={"23rem"}
          bg={"#D3D3D3"}
          color={"#0D0D0D"}
        >
          <Flex mt={1} mb={4} justifyContent="space-between">
            <Text fontWeight="semibold" as="h5" lineHeight="tight" isTruncated>
              🚀 Misión <strong>{launch.mission_name}</strong>
            </Text>

            <Badge
              borderRadius="full"
              px="2"
              colorScheme={launch.launch_success ? "green" : "red"}
            >
              {launch.launch_success ? "Exitoso" : "Fallido"}
            </Badge>
          </Flex>

          <Text as="mark" noOfLines={1} m={1} p={1} textAlign={"justify"}>
            {launch.details ? `"${launch.details}"` : "Sin Detalle"}
          </Text>

          <Flex
            mt={4}
            mb={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <Text>
              📅{" "}
              {dayjs(launch.launch_date_local)
                .locale("es")
                .format("D MMMM, YYYY")}
            </Text>
            <Link to={`/launch/${launch.flight_number}`}>
              <Button mt={2} position="initial" colorScheme="blue">
                Ver mas
              </Button>
            </Link>
          </Flex>
        </Box>
      </Box>
    </WrapItem>
  );
}
