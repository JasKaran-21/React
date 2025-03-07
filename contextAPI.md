## Context API Basic Example

```javascript

// 1. Create the context
// ThemeContext is a new Context object that will be used to provide and consume data.
const ThemeContext = React.createContext();

// 2. Provide context in the app
function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Content />
    </ThemeContext.Provider>
  );
}

// 3. Consume context in child components
function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header>
      <p>The current theme is {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </header>
  );
}


// *******************************************************************


// Explanation of Context API Code

// createContext: This function creates a new Context object that we can use to share data across components.
// useState: This React hook manages the theme state (light or dark).

import { createContext, useState } from "react";


// 1: Create a Context
//    ThemeContext is a new Context object that will be used to provide and consume data.

export const ThemeContext = createContext();


// 2: Create a Provider Component
//    ThemeProvider is a custom provider component that wraps around other components to share the theme state.
//    The children prop represents the components wrapped inside ThemeProvider.

export const ThemeProvider = ({ children }) => {}


// 3: Manage Theme State
//    State: Initializes theme with "light".
//    setTheme Function: Updates the theme state.

const [theme, setTheme] = useState("light");


// This function toggles the theme between "light" and "dark" when called.
const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
};


// 4: Provide Context Data
//    ThemeContext.Provider: Wraps children, making theme and toggleTheme accessible to all child components.
//    value={{ theme, toggleTheme }}: This is the data that will be shared with consuming components.

return (
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
  </ThemeContext.Provider>
);


// How This Works in a Project

//    Wrap the application with ThemeProvider (so all components can access the theme).
//    Use useContext(ThemeContext) in any component to read or update the theme.


```