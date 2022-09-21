import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import React from "react";
import config from "config/theme.json";
import { AppThemeProvider } from "./ThemeProvider";

type Props = {
  children: any;
};

export default function ({ children }: Props) {
  return (
    <NavigationContainer>
      <AppThemeProvider value={config.theme}>{children}</AppThemeProvider>
    </NavigationContainer>
  );
}
