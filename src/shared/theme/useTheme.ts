import React from "react";
import { ThemeContext } from "./themeProvider";

export const useTheme = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return { theme, toggleTheme };
};
