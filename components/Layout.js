import { ThemeContext } from "../context/theme";
import { useContext } from "react";
const Layout = props => {
  const { theme, setThemeValue } = useContext(ThemeContext);

  const setThemeState = () => {
    if (theme === "light") {
      setThemeValue("dark");
      return;
    }
    setThemeValue("light");
  };
  return (
    <div>
      <header className="header">
        <div className="container header-container">
          <h2 className="heading">Where in the world?</h2>
          <button onClick={setThemeState}>
            {theme === "light" ? (
              <img src="/moon.svg" alt="Moon icon" className="moon-icon" />
            ) : (
              <img src="/moon-dark.svg" alt="Moon icon" className="moon-icon" />
            )}
            <p>{theme === "light" ? "Dark Mode" : "Light Mode"}</p>
          </button>
        </div>
      </header>
      <main className="body">{props.children}</main>
      <style jsx>{`
        .header {
          box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.18);
          transition: background-color 500ms ease-in-out;
          background-color: ${theme === "light"
            ? "#fff"
            : "hsl(209, 23%, 22%)"};
        }
        .header-container {
          display: flex;
          align-items: center;
        }
        .heading {
          margin-right: auto;
          color: inherit;
        }
        .moon-icon {
          width: 12px;
          margin-right: 8px;
        }
        button {
          display: flex;
          padding: 10px;
          border: none;
          align-items: center;
          font-size: 300px;
          font-size: 14px;
          outline: none;
          background-color: inherit;
          color: inherit;
        }
      `}</style>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        body {
          font-family: "Nunito Sans", sans-serif;
          line-height: 1.5;
          font-weight: 300;
          margin: 0;
          min-height: 100vh;
          transition: background-color 500ms ease-in-out;
          color: ${theme === "light" ? "#000" : "#fff"};
          background-color: ${theme === "light"
            ? " hsl(0, 0%, 98%);"
            : "hsl(207, 26%, 17%);"};
        }
        img {
          width: 100%;
        }
        .container {
          max-width: 1250px;
          width: 100%;
          padding: 0 1em;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default Layout;
