import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`📩 Xin cảm ơn ${form.name}, chúng tôi sẽ liên hệ qua ${form.email}`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <h2>📞 Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <div>
          <label>Tên:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: "100%", margin: "5px 0", padding: "8px" }}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ width: "100%", margin: "5px 0", padding: "8px" }}
          />
        </div>
        <div>
          <label>Tin nhắn:</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            style={{ width: "100%", margin: "5px 0", padding: "8px" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 15px", marginTop: "10px" }}>
          Gửi
        </button>
      </form>
    </div>
  );
}

export default Contact;
