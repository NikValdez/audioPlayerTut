import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {

  return (
    <main className="bg-background">
      <Component {...pageProps} />;
    </main>
  )
};

export default MyApp;
