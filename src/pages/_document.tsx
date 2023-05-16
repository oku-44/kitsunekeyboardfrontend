import { Html, Head, Main, NextScript } from 'next/document'
import { GA_ID } from "@/../lib/gtag";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.ico" />
      <link
            href="https://fonts.googleapis.com/css2?family=Klee+One&display=swap"
            rel="stylesheet"
          />
                 {/* Google Analytics */}
                 {GA_ID && (
             <>
               <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
               <script
                 dangerouslySetInnerHTML={{
                   __html: `
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', '${GA_ID}', {
                     page_path: window.location.pathname,
                   });`,
                 }}
               />
             </>
           )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
