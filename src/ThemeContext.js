import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState("16px");
  const [language, setLanguage] = useState("vi");

  // Load dữ liệu từ localStorage khi reload
  useEffect(() => {
    const savedDark = localStorage.getItem("darkMode") === "true";
    const savedFont = localStorage.getItem("fontSize") || "16px";
    const savedLang = localStorage.getItem("language") || "vi";

    setDarkMode(savedDark);
    setFontSize(savedFont);
    setLanguage(savedLang);
  }, []);

  // Lưu dữ liệu khi thay đổi
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("fontSize", fontSize);
    localStorage.setItem("language", language);

    document.body.style.backgroundColor = darkMode ? "#121212" : "#ffffff";
    document.body.style.color = darkMode ? "#ffffff" : "#000000";
    document.body.style.fontSize = fontSize;
  }, [darkMode, fontSize, language]);

  return (
    <ThemeContext.Provider
      value={{ darkMode, setDarkMode, fontSize, setFontSize, language, setLanguage }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
