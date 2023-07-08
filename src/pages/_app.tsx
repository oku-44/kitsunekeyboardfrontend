import App from 'next/app';
import type { AppProps } from 'next/app';
import { createContext } from 'react';
import Head from 'next/head';
import { CartProvider } from 'use-shopping-cart';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { fetchAPI } from '../../lib/api';
import '../styles/globals.css';
import { usePageView } from "@/hooks/usePageView";
import { AppContext } from 'next/app';

// Store Strapi Global object in context
type GlobalContext = {
  readonly global: {
    readonly attributes?: {
      readonly siteName: string;
      readonly createdAt: string;
      readonly updatedAt: string;
      readonly favicon: {
        readonly data: {
          readonly attributes: {
            readonly alternativeText?: string;
            readonly caption?: string;
            readonly createdAt?: string;
            readonly ext?: string;
            readonly formats?: string;
            readonly hash?: string;
            readonly height?: number;
            readonly mime?: string;
            readonly name?: string;
            readonly previewUrl?: string;
            readonly provider?: string;
            readonly provider_metadata?: string;
            readonly size?: number;
            readonly updatedAt?: string;
            readonly url?: string;
            readonly width?: number;
          };
        };
      };
      readonly defaultSeo: {
        readonly id?: number;
        readonly metaTitle?: string;
        readonly metaDescription?: string;
        readonly keywords?: string;
        readonly metaRobots?: string;
        readonly structuredData?: string;
        readonly metaViewport?: string;
        readonly canonicalURL?: string;
        // readonly metaImage?: [Object];
        // readonly metaSocial?: [];
      };
    };
  };
};


export const GlobalContext = createContext<GlobalContext | undefined>(undefined);

function MyApp({ Component, pageProps }: AppProps) {
	const { global } = pageProps;
	usePageView(); //for google analitics
	return (
		<>
			<GlobalContext.Provider value={global.attributes}>
				<Head>
					<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
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

MyApp.getInitialProps = async (ctx: AppContext) => {
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
