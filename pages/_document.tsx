/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Roberto J. Serrano Veras • Full-Stack Developer</title>
        <meta name="description" content="I'm a Full-Stack Developer." />
        <meta name="msapplication-TileColor" content="#7671bf" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:url" content="https://ema.saonas/" />
        <meta property="og:app_id" content="" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Roberto J. Serrano Veras • Full-Stack Developer"
        />
        <meta property="og:description" content="I'm a Full-Stack Developer." />
        <meta property="og:image" content="" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
