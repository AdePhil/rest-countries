import { ThemeContext } from "../../context/theme";
import { fetchCountry } from "../../api/country";
import Router from "next/router";
import { useContext } from "react";
const CountryDetails = ({ countryArray }) => {
  const { theme } = useContext(ThemeContext);
  const country = countryArray.length ? countryArray[0] : {};
  console.log(country);
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies = [],
    languages = []
  } = country;
  return (
    <div className="country-details">
      <div className="container">
        <button onClick={() => Router.back()}>&larr; Back</button>
        <div className="country-details-group">
          <img src={flag} alt="country's flag" />
          <h2 className="country-name">{name}</h2>

          <div className="details first">
            <p>
              <span className="label">Native Name: </span>
              <span className="info">{nativeName}</span>
            </p>
            <p>
              <span className="label">Population: </span>
              <span className="info">{population}</span>
            </p>
            <p>
              <span className="label">Region: </span>
              <span className="info">{region}</span>
            </p>
            <p>
              <span className="label">Sub Region: </span>
              <span className="info">{subregion}</span>
            </p>
            <p>
              <span className="label">Capital: </span>
              <span className="info">{capital}</span>
            </p>
          </div>
          <div className="details second">
            <p>
              <span className="label">Top Level Domain: </span>
              <span className="info">{topLevelDomain}</span>
            </p>
            <p>
              <span className="label">Currencies: </span>
              {currencies.map(currency => (
                <span className="info" key={currency.code}>
                  {currency.code}
                  {", "}
                </span>
              ))}
            </p>
            <p>
              <span className="label">Currencies: </span>
              {languages.map(language => (
                <span className="info" key={language.name}>
                  {language.name}
                  {", "}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .country-details {
          padding: 60px 0px 20px;
        }
        button {
          padding: 8px 16px;
          outline: none;
          border: none;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.18);
          background-color: inherit;
          transition: background-color 1s ease-in-out;
          background-color: ${theme === "light"
            ? "#fff"
            : "hsl(209, 23%, 22%)"};
          color: inherit;
        }
        .country-details-group {
          display: grid;
          grid-template-columns: 600px 1fr 1fr;
          grid-template-rows: auto auto;
          padding-top: 60px;
          grid-gap: 0 50px;
        }

        .label {
          font-weight: 500;
        }
        .info {
          color: hsl(200, 15%, 8%);
          color: ${theme === "light"
            ? "hsl(200, 15%, 8%)"
            : "rgba(255,255,255,0.8)"};
        }
        img {
          object-fit: cover;
          max-height: 100%;
          width: 100%;
          grid-row: 1 / -1;
        }
        .country-name {
          grid-column: 2 / -1;
          line-height: 1.3;
          align-self: end;
          margin: 0;
        }
        .details.first {
          grid-column-start: 2;
        }

        @media (max-width: 1000px) {
          .country-details-group {
            grid-template-columns: auto 1fr;
            grid-gap: 30px 50px;
          }
          img {
            grid-column: 1/-1;
          }

          .country-name {
            grid-column-start: 1;
            margin-bottom: -40px;
          }
          .details.first {
            grid-column-start: 1;
          }
        }
      `}</style>
    </div>
  );
};

CountryDetails.getInitialProps = async ({ query }) => {
  let countryArray;
  try {
    const countryName = query.name;
    const response = await fetchCountry(countryName);
    countryArray = response.data;
  } catch (error) {
    countryArray = [];
  }
  return { countryArray };
};
export default CountryDetails;
