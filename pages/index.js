import Layout from "../components/Layout.js";
import CountryCard from "../components/CountryCard";
import { fetchAllCountries, fetchCountry } from "../api/country";
import { useState, useEffect, useCallback, useContext } from "react";
import { ThemeContext } from "../context/theme";
const Index = ({ initialCountries }) => {
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [countries, setCountries] = useState(initialCountries);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    async function searchCountry() {
      if (!searchValue) {
        const response = await fetchAllCountries();
        setCountries(response.data);
        return;
      }
      try {
        const response = await fetchCountry(searchValue);
        setCountries(response.data);
      } catch (error) {
        setCountries([]);
      }
    }
    searchCountry();
  }, [searchValue]);

  useEffect(() => {
    if (!countries.length) {
      setErrorMessage("Sorry 😔. Country not found.");
      return;
    }
    setErrorMessage("");
  }, [countries]);

  return (
    <div className="home">
      <div className="container">
        <div className="filter-container">
          <div className="input-container">
            {theme === "light" ? (
              <img
                src="/search-dark.svg"
                alt="Search icon"
                className="search-icon"
              />
            ) : (
              <img
                src="/search-white.svg"
                alt="Search icon"
                className="search-icon"
              />
            )}
            <input
              placeholder="Search for a country"
              type="text"
              className="search-input"
              onChange={e => setSearchValue(e.target.value)}
            />
          </div>
        </div>
        <div className="country-list">
          {countries.map(country => (
            <CountryCard key={country.numericCode} country={country} />
          ))}
        </div>
        {errorMessage && <div className="error">{errorMessage}</div>}
      </div>
      <style jsx>
        {`
          .home {
            padding: 40px 0;
          }
          .country-list {
            display: grid;
            grid-gap: 50px 50px;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          }
          .filter-container {
            margin-bottom: 40px;
          }
          .search-input {
            padding: 20px 38px;
            min-width: 500px;
            font-size: 16px;
            outline: none;
            border: none;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
            transition: background-color 1s ease-in-out;
            background-color: ${theme === "light"
              ? "#fff"
              : "hsl(209, 23%, 22%)"};
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
            color: hsl(200, 15%, 8%);
            color: ${theme === "light"
              ? "hsl(200, 15%, 8%)"
              : "rgba(255,255,255,0.8)"};
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
          }
          .input-container {
            position: relative;
          }
          .search-icon {
            width: 15px;
            position: absolute;
            top: 23px;
            left: 15px;
          }
        `}
      </style>
    </div>
  );
};
Index.getInitialProps = async ({ req }) => {
  const response = await fetchAllCountries();
  return { initialCountries: response.data };
};

export default Index;
