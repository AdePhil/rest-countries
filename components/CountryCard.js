const CountryCard = ({ country }) => {
  return (
    <div className="country">
      <img src={country.flag} alt="country's flag" />
      <div className="country-body">
        <h3>{country.name}</h3>
        <p>
          <span className="label">Population: </span>
          <span className="info">{country.population}</span>
        </p>
        <p>
          <span className="label">Region: </span>
          <span className="info">{country.region}</span>
        </p>
        <p>
          <span className="label">Capital: </span>
          <span className="info">{country.capital}</span>
        </p>
      </div>
      <style jsx>
        {`
          .country {
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
          }
          .label {
            font-weight: 500;
          }
          .info {
            color: hsl(200, 15%, 8%);
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
