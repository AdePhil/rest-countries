import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";
import CountryCard from "../components/CountryCard";
const Index = props => {
  return (
    <Layout>
      <div className="home">
        <div className="container">
          <div className="country-list">
            {props.countries.map(country => (
              <CountryCard key={country.numericCode} country={country} />
            ))}
          </div>
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
        `}
      </style>
    </Layout>
  );
};
Index.getInitialProps = async ({ req }) => {
  const response = await fetch("https://restcountries.eu/rest/v2/all");
  const json = await response.json();
  return { countries: json };
};

export default Index;
