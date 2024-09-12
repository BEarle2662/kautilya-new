import { ThemeProvider } from "@material-tailwind/react";
import "../styles/globals.css";
import { Montserrat } from "next/font/google";

import { theme } from "../../appTheme";

const montserrat = Montserrat({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider value={theme}>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
