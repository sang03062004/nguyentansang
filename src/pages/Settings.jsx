import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../App";

export default function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext); // lấy theme từ context
  const [fontSize, setFontSize] = useState("16px");
  const [language, setLanguage] = useState("vi");

  // Lấy dữ liệu từ localStorage
  useEffect(() => {
    const savedFont = localStorage.getItem("fontSize") || "16px";
    const savedLang = localStorage.getItem("language") || "vi";
    setFontSize(savedFont);
    setLanguage(savedLang);
  }, []);

  // Cập nhật localStorage & áp dụng style
  useEffect(() => {
    localStorage.setItem("fontSize", fontSize);
    localStorage.setItem("language", language);

    document.body.style.fontSize = fontSize;
  }, [fontSize, language]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>⚙️ {language === "vi" ? "Cài đặt" : "Settings"}</h2>

      {/* Dark / Light Mode */}
      <div style={styles.settingItem}>
        <label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          {language === "vi" ? " Chế độ tối" : " Dark Mode"}
        </label>
      </div>

      {/* Font size */}
      <div style={styles.settingItem}>
        <label>
          {language === "vi" ? "Cỡ chữ:" : "Font Size:"}
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            style={{ marginLeft: "10px" }}
          >
            <option value="14px">{language === "vi" ? "Nhỏ" : "Small"}</option>
            <option value="16px">{language === "vi" ? "Vừa" : "Medium"}</option>
            <option value="20px">{language === "vi" ? "Lớn" : "Large"}</option>
          </select>
        </label>
      </div>

      {/* Ngôn ngữ */}
      <div style={styles.settingItem}>
        <label>
          {language === "vi" ? "Ngôn ngữ:" : "Language:"}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{ marginLeft: "10px" }}
          >
            <option value="vi">Tiếng Việt</option>
            <option value="en">English</option>
          </select>
        </label>
      </div>

      <hr />
      <p>
        {language === "vi"
          ? "👋 Xin chào! Đây là trang cài đặt."
          : "👋 Hello! This is the settings page."}
      </p>
    </div>
  );
}

const styles = {
  settingItem: {
    margin: "15px 0",
    fontSize: "16px",
  },
};
