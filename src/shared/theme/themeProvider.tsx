import React from "react";
import { useColorScheme } from "nativewind";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ThemeContextType {
  theme: "light" | "dark" | undefined;
  toggleTheme: (newTheme: "light" | "dark") => void;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { setColorScheme, colorScheme: theme } = useColorScheme();

  React.useEffect(() => {
    // Load saved theme from storage
    const getTheme = async () => {
      try {
        const savedTheme = (await AsyncStorage.getItem("theme")) as
          | "light"
          | "dark";
        if (savedTheme) {
          setColorScheme(savedTheme);
        }
      } catch (error) {
        console.log("Error loading theme:", error);
      }
    };
    getTheme();
  }, []);

  const toggleTheme = (newTheme: "light" | "dark") => {
    setColorScheme(newTheme);
    // Save selected theme to storage
    AsyncStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
