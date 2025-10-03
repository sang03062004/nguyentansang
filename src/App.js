import React, { useState, createContext } from "react";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

// Context để share theme giữa App và Settings
export const ThemeContext = createContext();

function App() {
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(false);
  const [theme, setTheme] = useState("light"); // "light" | "dark"

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          ...styles.app,
          backgroundColor: theme === "light" ? "#f8f9fa" : "#121212",
          color: theme === "light" ? "black" : "white",
        }}
      >
        {/* --- Navbar --- */}
        <nav style={styles.nav}>
          <div style={styles.navContent}>
            <h2 style={styles.logo}>⚛️ My React App</h2>
            <div style={styles.links}>
              <Link
                to="/"
                style={{
                  ...styles.link,
                  ...(location.pathname === "/" ? styles.activeLink : {}),
                }}
              >
                🏠 Home
              </Link>

              <Link
                to="/about"
                style={{
                  ...styles.link,
                  ...(location.pathname === "/about" ? styles.activeLink : {}),
                }}
              >
                ℹ️ About
              </Link>

              <Link
                to="/contact"
                style={{
                  ...styles.link,
                  ...(location.pathname === "/contact" ? styles.activeLink : {}),
                }}
              >
                📞 Contact
              </Link>

              {!isAuth && (
                <Link
                  to="/login"
                  style={{
                    ...styles.link,
                    ...(location.pathname === "/login" ? styles.activeLink : {}),
                  }}
                >
                  🔑 Login
                </Link>
              )}

              {isAuth && (
                <>
                  <Link
                    to="/dashboard"
                    style={{
                      ...styles.link,
                      ...(location.pathname.startsWith("/dashboard")
                        ? styles.activeLink
                        : {}),
                    }}
                  >
                    📊 Dashboard
                  </Link>
                  <button
                    onClick={() => setIsAuth(false)}
                    style={{
                      ...styles.link,
                      backgroundColor: "#dc3545",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    🚪 Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* --- Routes --- */}
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

            {/* Dashboard nested routes */}
            <Route
              path="/dashboard/*"
              element={isAuth ? <Dashboard /> : <Navigate to="/login" replace />}
            >
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </main>

        {/* --- Footer --- */}
        <footer style={styles.footer}>
          <p>© 2025 - Made with ❤️ using React</p>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

const styles = {
  app: { minHeight: "100vh", display: "flex", flexDirection: "column" },
  nav: {
    backgroundColor: "#343a40",
    color: "white",
    padding: "15px 0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  navContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: { margin: 0, fontSize: "24px" },
  links: { display: "flex", gap: "20px", alignItems: "center" },
  link: {
    color: "white",
    textDecoration: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "all 0.3s",
  },
  activeLink: { backgroundColor: "#007bff" },
  main: { flex: 1, padding: "20px" },
  footer: {
    backgroundColor: "#343a40",
    color: "white",
    textAlign: "center",
    padding: "20px",
  },
};

export default App;
