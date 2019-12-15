import Layout from "../components/Layout";
import { ThemeProvider } from "../context/theme";
import { useState } from "react";
const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <ThemeProvider value={{ theme, setTheme }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
};

export default MyApp;
