import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Flex,
  Spacer,
  Tag,
  Text,
  Spinner,
  AspectRatio,
  Center,
} from "@chakra-ui/react";
import * as API from "../services/launches";

export function LaunchDetails() {
  const [launch, setLaunch] = useState({});
  const { launchId } = useParams();

  useEffect(() => {
    API.getLaunchByFlightNumber(launchId).then(setLaunch).catch(console.log);
  }, [launchId]);

  return (
    <Box paddingTop={40}>
      {!launch ? (
        <Flex justifyContent="center">
          <Spinner m={10} size="lg" justifyContent="center" color="red.500" />
        </Flex>
      ) : (
        <>
          <Flex
            alignItems={"center"}
            justifyContent="center"
            flexDirection="column"
          >
            <Center
              bg="#083040"
              borderRadius={"md"}
              m={4}
              p={4}
              h="100px"
              w={"50%"}
              color="#D3D3D3"
            >
              <Text fontSize="2xl">
                Mission <strong>{launch.mission_name}</strong> (
                {launch.launch_year})
              </Text>
              <Spacer />
              <Tag
                p={2}
                fontSize="1.2rem"
                colorScheme={launch.launch_success ? "green" : "red"}
              >
                {launch.launch_success ? "Exitoso" : "Fallido"}
              </Tag>
            </Center>
            <Text
              as="mark"
              fontSize={"1.3rem"}
              p={3}
              maxWidth="60%"
              textAlign={"justify"}
            >
              {launch.details ? `"${launch.details}"` : "Sin Detalle"}
            </Text>{" "}
          </Flex>
          <AspectRatio margin={"auto"} mt={3} maxW="700px" ratio={1.5}>
            <iframe
              title="naruto"
              src={`https://www.youtube.com/embed/${launch.links?.youtube_id}`}
              allowFullScreen
            />
          </AspectRatio>
        </>
      )}
    </Box>
  );
}
