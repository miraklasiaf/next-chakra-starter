import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/core';
import Nprogress from '@/components/nprogress';
import theme from '@/design-system';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <ChakraProvider resetCSS theme={theme} portalConfig={{ zIndex: 40 }}>
        <DefaultSeo {...SEO} />
        <Nprogress />

        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
