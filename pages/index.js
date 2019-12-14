import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";
import CountryCard from "../components/CountryCard";
import { useState, useEffect, useCallback } from "react";
const Index = ({ initialCountries }) => {
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [countries, setCountries] = useState(initialCountries);

  useEffect(() => {
    async function searchCountry() {
      if (!searchValue) {
        return;
      }
      try {
        const response = await fetch(
          `https://restcountries.eu/rest/v2/name/${searchValue}`
        );
        const countries = await response.json();
        if (response.ok) {
          setCountries(countries);
          return;
        }
        throw response;
        setCountries([]);
      } catch (error) {
        setCountries([]);
      }
    }
    searchCountry();
  }, [searchValue]);

  useEffect(() => {
    if (!countries.length) {
      setErrorMessage("Sorry 😢. Country not found.");
      return;
    }
    setErrorMessage("");
  }, [countries]);

  return (
    <Layout>
      <div className="home">
        <div className="container">
          <div className="filter-container">
            <input
              placeholder="Search for a country"
              type="text"
              className="search-input"
              onChange={e => setSearchValue(e.target.value)}
            />
          </div>
          <div className="country-list">
            {countries.map(country => (
              <CountryCard key={country.numericCode} country={country} />
            ))}
          </div>
          {errorMessage && <div className="error">{errorMessage}</div>}
        </div>
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
            padding: 20px 25px;
            min-width: 500px;
            font-size: 16px;
            outline: none;
            border: none;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
            color: hsl(200, 15%, 8%);
          }
        `}
      </style>
    </Layout>
  );
};
Index.getInitialProps = async ({ req }) => {
  const response = await fetch("https://restcountries.eu/rest/v2/all");
  const json = await response.json();
  return { initialCountries: json };
};

export default Index;
