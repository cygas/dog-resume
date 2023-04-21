import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from "@chakra-ui/react";

const Page: React.FC = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        alignContent="center"
      >
        Hello, I&apos;m a front-end developer based in Poland!
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mariusz Cygas
          </Heading>
          <p>Digital Craftzman ( Artist / Developer / Skater )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          alignItems="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            width="100px"
            maxHeight="100px"
            objectFit="cover"
            display="inline-block"
            borderRadius="full"
            src="/images/cd.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
