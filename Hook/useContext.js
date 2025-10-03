const ThemeContext = createContext("light");


function ThemedButton() {
const theme = useContext(ThemeContext);
return <button className={theme}>Nút theo theme</button>;
}