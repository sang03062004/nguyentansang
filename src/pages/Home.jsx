import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../App"; // lấy context từ App.js

export default function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const { theme } = useContext(ThemeContext);

  // Cập nhật thời gian real-time
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Hiển thị lời chào khi name thay đổi
  useEffect(() => {
    if (name) {
      setGreeting(`Xin chào, ${name}! 👋`);
    } else {
      setGreeting("");
    }
  }, [name]);

  // Arrow function
  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);
  const handleReset = () => setCount(0);

  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: theme === "light" ? "#f8f9fa" : "#1e1e1e",
        color: theme === "light" ? "black" : "#f1f1f1",
      }}
    >
      <h1>🏠 Trang Chủ</h1>

      {/* Thời gian real-time */}
      <div
        style={{
          ...styles.section,
          backgroundColor: theme === "light" ? "#ffffff" : "#2c2c2c",
        }}
      >
        <h3>⏰ Thời gian hiện tại</h3>
        <p style={styles.time}>{time}</p>
      </div>

      {/* Counter */}
      <div
        style={{
          ...styles.section,
          backgroundColor: theme === "light" ? "#ffffff" : "#2c2c2c",
        }}
      >
        <h3>🔢 Bộ đếm</h3>
        <p style={styles.count}>{count}</p>
        <div style={styles.buttonGroup}>
          <button
            onClick={handleDecrement}
            style={{
              ...styles.button,
              backgroundColor: theme === "light" ? "#007bff" : "#0d6efd",
            }}
          >
            ➖ Giảm
          </button>
          <button
            onClick={handleReset}
            style={{
              ...styles.button,
              backgroundColor: theme === "light" ? "#6c757d" : "#adb5bd",
              color: "white",
            }}
          >
            🔄 Reset
          </button>
          <button
            onClick={handleIncrement}
            style={{
              ...styles.button,
              backgroundColor: theme === "light" ? "#28a745" : "#198754",
            }}
          >
            ➕ Tăng
          </button>
        </div>
      </div>

      {/* Form nhập tên */}
      <div
        style={{
          ...styles.section,
          backgroundColor: theme === "light" ? "#ffffff" : "#2c2c2c",
        }}
      >
        <h3>📝 Nhập tên của bạn</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nhập tên..."
          style={{
            ...styles.input,
            backgroundColor: theme === "light" ? "white" : "#3a3a3a",
            color: theme === "light" ? "black" : "white",
            border: theme === "light"
              ? "2px solid #dee2e6"
              : "2px solid #555",
          }}
        />
        {greeting && <p style={styles.greeting}>{greeting}</p>}
      </div>

      {/* Thông tin */}
      <div
        style={{
          ...styles.section,
          backgroundColor: theme === "light" ? "#ffffff" : "#2c2c2c",
        }}
      >
        <p>
          Bạn đã click {count} lần {count > 10 && "🎉"}
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  section: {
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  time: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#007bff",
    margin: "10px 0",
  },
  count: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#28a745",
    margin: "20px 0",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "5px",
    marginBottom: "10px",
    boxSizing: "border-box",
  },
  greeting: {
    fontSize: "20px",
    color: "#28a745",
    fontWeight: "bold",
    marginTop: "10px",
  },
};
