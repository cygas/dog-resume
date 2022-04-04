import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

type MainProps = {
  children: JSX.Element;
  router: any;
};

const Main: React.FC<MainProps> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mariusz Cyags - Homepage</title>
      </Head>
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
