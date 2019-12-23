import { createContext, useState, useEffect } from "react";
import { fetchAllCountries } from "../api/country";
import Cookie from "js-cookie";
export const ThemeContext = createContext();

export const useTheme = initialTheme => {
  const [theme, setTheme] = useState(initialTheme);
  const setThemeValue = value => {
    setTheme(value);
    Cookie.set("theme", value);
  };
  return [theme, setThemeValue];
};

const ThemeProvider = ThemeContext.Provider;

export default ThemeProvider;
