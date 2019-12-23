import Layout from "../components/Layout";
import ThemeProvider, { useTheme } from "../context/theme";
import { useState } from "react";
import nextCookie from "next-cookies";
const MyApp = ({ Component, pageProps, initialTheme }) => {
  const [theme, setThemeValue] = useTheme(initialTheme);
  return (
    <div>
      <ThemeProvider value={{ theme, setThemeValue }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
};
MyApp.getInitialProps = async ({ Component, router, ctx }) => {
  const { theme } = nextCookie(ctx);
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  /* your own logic */

  return { pageProps, initialTheme: theme };
};

export default MyApp;
