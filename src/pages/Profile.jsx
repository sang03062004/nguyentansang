import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    dob: "",
    phone: "",
    avatar: ""
  });

  // Fetch dữ liệu user
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        const userData = {
          ...res.data,
          dob: "1998-05-20",
          avatar: "https://i.pravatar.cc/150?img=3" // avatar giả lập
        };
        setUser(userData);
        setForm(userData);
        setLoading(false);
      })
      .catch(() => {
        setError("❌ Không thể tải dữ liệu người dùng!");
        setLoading(false);
      });
  }, []);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Save update
  const handleSave = async () => {
    try {
      const res = await axios.put(
        "https://jsonplaceholder.typicode.com/users/1",
        form
      );
      console.log("✅ Cập nhật thành công:", res.data);
      setUser(form);
      setEditing(false);
    } catch {
      alert("❌ Lỗi khi cập nhật dữ liệu!");
    }
  };

  if (loading) return <p>⏳ Đang tải dữ liệu...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.card}>
      <h2>👤 Thông tin người dùng</h2>

      {editing ? (
        <div style={styles.form}>
          <label>Ảnh đại diện (URL):</label>
          <input type="text" name="avatar" value={form.avatar} onChange={handleChange} />

          <label>Họ và tên:</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} />

          <label>Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />

          <label>Số điện thoại:</label>
          <input type="text" name="phone" value={form.phone} onChange={handleChange} />

          <label>Ngày sinh:</label>
          <input type="date" name="dob" value={form.dob} onChange={handleChange} />

          <button onClick={handleSave} style={styles.saveBtn}>💾 Lưu</button>
          <button onClick={() => setEditing(false)} style={styles.cancelBtn}>❌ Hủy</button>
        </div>
      ) : (
        <div style={styles.info}>
          <img src={user.avatar} alt="Avatar" style={styles.avatar} />
          <p><strong>Họ và tên:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Số điện thoại:</strong> {user.phone}</p>
          <p><strong>Ngày sinh:</strong> {user.dob}</p>
          <button onClick={() => setEditing(true)} style={styles.editBtn}>✏️ Chỉnh sửa</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    maxWidth: "500px",
    margin: "0 auto"
  },
  info: {
    textAlign: "center"
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginBottom: "15px",
    border: "3px solid #007bff"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  editBtn: {
    marginTop: "10px",
    padding: "10px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  saveBtn: {
    padding: "10px",
    background: "green",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  cancelBtn: {
    padding: "10px",
    background: "gray",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};
