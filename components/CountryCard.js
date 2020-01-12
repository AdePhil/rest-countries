import { ThemeContext } from "../context/theme";
import Link from "next/link";
import { useContext } from "react";
const CountryCard = ({ country }) => {
  const { theme } = useContext(ThemeContext);
  const { flag, population, name, region, capital } = country;
  return (
    <div className="country">
      <Link href="/country/[name]" as={`/country/${name}`}>
        <a>
          <img src={flag} alt="country's flag" />
          <div className="country-body">
            <h3>{name}</h3>
            <p>
              <span className="label">Population: </span>
              <span className="info">{population}</span>
            </p>
            <p>
              <span className="label">Region: </span>
              <span className="info">{region}</span>
            </p>
            <p>
              <span className="label">Capital: </span>
              <span className="info">{capital}</span>
            </p>
          </div>
        </a>
      </Link>

      <style jsx>
        {`
          a {
            color: inherit;
            text-decoration: none;
          }
          .country {
            transition: background-color 500ms ease-in-out;
            background-color: ${theme === "light"
              ? "#fff"
              : "hsl(209, 23%, 22%)"};
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
          }
          .label {
            font-weight: 500;
            color: ${theme === "light" ? "#000" : "#fff"};
          }
          .info {
            color: hsl(200, 15%, 8%);
            color: ${theme === "light"
              ? "hsl(200, 15%, 8%)"
              : "rgba(255,255,255,0.8)"};
          }
          h3 {
            margin: 0 0 0px 0;
          }
          p {
            margin-top: 8px;
            margin-bottom: 0;
          }
          .country img {
            height: 200px;
            object-fit: cover;
          }
          .country-body {
            padding: 10px 25px 30px;
          }
        `}
      </style>
    </div>
  );
};

export default CountryCard;
