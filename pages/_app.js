import "../styles/globals.css";
import { Layout } from "../components";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <AnimatePresence mode="wait">
          <Component {...pageProps} />;
        </AnimatePresence>
      </Layout>
    </>
  );
}
