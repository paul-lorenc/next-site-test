import Navbar from "components/Navbar";
import type { AppProps /*, AppContext */ } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {

  return <><Navbar/><Component {...pageProps} /></>;
}

export default MyApp;