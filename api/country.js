import axios from "axios";
export const fetchAllCountries = () => {
  return axios.get("https://restcountries.eu/rest/v2/all");
};

export const fetchCountry = name => {
  return axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
};
