import App from 'next/app';
import type { AppProps } from 'next/app';
import { createContext } from 'react';
import Head from 'next/head';
import { CartProvider, useShoppingCart } from 'use-shopping-cart';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { fetchAPI } from '../../lib/api';
import '../styles/globals.css';
import { usePageView } from "@/hooks/usePageView";

// Store Strapi Global object in context
export const GlobalContext = createContext<any>({});

function MyApp({ Component, pageProps }: AppProps) {
  const { global } = pageProps;
  usePageView();

  return (
    <>
      <GlobalContext.Provider value={global.attributes}>
        <Head>
          <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
          <link rel="icon" href={'/kitsune.svg'}></link>
        </Head>
        <CartProvider
          mode="payment"
          cartMode="client-only"
          stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_API_KEY as string}
          successUrl={'example.com'}
          cancelUrl={'example.com'}
          currency={'jpy'}
          shouldPersist={true}
        >
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </CartProvider>
      </GlobalContext.Provider>
    </>
  );
}

MyApp.getInitialProps = async (ctx: any) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI('/global', {
    populate: {
      favicon: '*',
      defaultSeo: {
        populate: '*',
      },
    },
  });
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;
