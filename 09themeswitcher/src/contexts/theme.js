import { createContext, useContext } from "react";

// 1. Create context
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){   // custome hook
    return useContext(ThemeContext)
}
 