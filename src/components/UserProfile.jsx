import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../api";
import { urls } from "../constants/urls";
import { message } from "antd";

const UserProfile = () => {
    const isAuth = JSON.parse(localStorage.getItem('user')) || false
  const [users, setUsers] = useState([]);
  const [isEdit, setIsEdit] = useState(null);


  const [user, setUser] = useState({
    firstName: "Ism",
    lastName: "Familiya",
    email: "email@example.com",
    password: "********",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Input qiymatlari o'zgarganda handle qilish uchun funksiya
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Saqlash tugmasini bosganda ishlovchi funksiya
  const handleSave = (values) => {
    const obj = { ...values };

    setIsEditing(false);
    Api.patch(urls.users.patch(isEdit), obj).then((res) => {
      if (res.data.id) {
        message.success('Foydalanuvchi ma\'lumoti muvaffaqiyatli yangilandi!');
        handleClose();
      }
    }).catch((err) => console.log(err, 'users edit'));
    console.log("Foydalanuvchi ma'lumotlari saqlandi:", user);
  };

  

  return (
    <div className="container">

    <div style={styles.container}>
      <h2>Foydalanuvchi Profili</h2>
      <div style={styles.profileItem}>
        <label>Familiya:</label>
        {isEditing ? (
          <input
          defaultValue={isAuth.familiya ? isAuth.familiya : null}
            type="text"
            name="lastName"
            // value={user.lastName}
            onChange={handleInputChange}
            style={styles.input}
          />
        ) : (
          <p>{isAuth.familiya}</p>
        )}
      </div>
      <div style={styles.profileItem}>
        <label>Ism:</label>
        {isEditing ? (
          <input
          defaultValue={isAuth.ism ? isAuth.ism : null}

            type="text"
            name="firstName"
            onChange={handleInputChange}
            style={styles.input}
          />
        ) : (
          <p>{isAuth.ism}</p>
        )}
      </div>
      <div style={styles.profileItem}>
        <label>Email:</label>
        {isEditing ? (
          <input
          defaultValue={isAuth.email ? isAuth.email : null}
            type="email"
            name="email"
            onChange={handleInputChange}
            style={styles.input}
          />
        ) : (
          <p>{isAuth.email}</p>
        )}
      </div>
      <div style={styles.profileItem}>
        <label>Parol:</label>
        {isEditing ? (
          <input
          defaultValue={isAuth.parol ? isAuth.parol : null}
            type="password"
            name="password"
            onChange={handleInputChange}
            style={styles.input}
          />
        ) : (
          <p>{isAuth.parol}</p>
        )}
      </div>
      <button onClick={isEditing ? handleSave : toggleEdit} style={styles.button}>
        {isEditing ? "Saqlash" : "Tahrirlash"}
      </button>
    </div>
    </div>

  );
};

// Oddiy style uchun ob'yekt
const styles = {
  container: {
    width: "300px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    textAlign: "center",
    margin : "100px 0",
    
  },
  profileItem: {
    marginBottom: "15px",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default UserProfile;
