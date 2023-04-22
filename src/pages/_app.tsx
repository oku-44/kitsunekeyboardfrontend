import '../styles/globals.css'
import NavBar from '../../components/Navbar'
import { useShoppingCart, CartProvider } from 'use-shopping-cart'
import Head from 'next/head'
import Footer from '../../components/Footer'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
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
        <NavBar/>
        <Component 
          {...pageProps} 
        />
        <Footer />
      </CartProvider>
    </>
  );
}


export default MyApp;