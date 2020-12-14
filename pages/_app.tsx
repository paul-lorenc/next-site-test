import { ApolloProvider } from "@apollo/client";
import Navbar from "components/Navbar";
import type { AppProps } from "next/app";
import { Client } from "client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={Client}>
      <Navbar />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
