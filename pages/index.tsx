import { Container, Box, Heading } from "@chakra-ui/react";

const Page: React.FC = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} alignContent="center">
        Hello, I&apos;m a front-end developer based in Poland!
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mariusz Cygas
          </Heading>
          <p>Digital Craftzman ( Artist / Developer / Designer / Skater )</p>
        </Box>
        
      </Box>
    </Container>
  );
};

export default Page;
