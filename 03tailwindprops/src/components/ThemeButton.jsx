// ThemeButton.js (Child Component)

function ThemeButton({ theme, toggleTheme }) {
    return (
        <button style={{
            background: theme === "dark" ? "#212121" : "#ccc",
            color: theme === "dark" ? "#ccc" : "#212121",
        }}
        className="rounded-xl p-5 " 
            onClick={toggleTheme}>
            {theme === "dark" ? "Dark Mode 🌙" : "Light Mode ☀️"}
        </button>
    );
}



export default ThemeButton;