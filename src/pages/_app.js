import "@/styles/globals.css";
import { HeroProvider } from "./context/heroContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeroProvider>
        <Component {...pageProps} />
      </HeroProvider>
    </>
  );
}
