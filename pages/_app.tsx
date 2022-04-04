import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import theme from "../lib/theme";

type WebsiteProps = {
  Component: React.FC;
  pageProps: { [key: string]: string };
  router: { route: string };
};

const Website: React.FC<WebsiteProps> = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
