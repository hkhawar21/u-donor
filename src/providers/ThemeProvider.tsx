import { createContext, useContext } from "react";
import config from "config/theme.json";
export const ThemeContext = createContext(config.theme);
export const AppThemeProvider = ThemeContext.Provider;
export const useTheme = () => useContext(ThemeContext);
