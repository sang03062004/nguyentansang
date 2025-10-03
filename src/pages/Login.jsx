import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Giả lập login: username=admin, password=123
    if (form.username === "admin" && form.password === "123") {
      setIsAuth(true);
      navigate("/dashboard");
    } else {
      alert("❌ Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <div>
      <h2>🔑 Login</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "300px" }}>
        <div>
          <label>Tài khoản:</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
            style={{ width: "100%", margin: "5px 0", padding: "8px" }}
          />
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            style={{ width: "100%", margin: "5px 0", padding: "8px" }}
          />
        </div>
        <button
          type="submit"
          style={{ padding: "10px 15px", marginTop: "10px" }}
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}

export default Login;
