## Context API Basic Example

```javascript

// 1. Create the context
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


```