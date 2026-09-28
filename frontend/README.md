#  VaultixMongo

> **Your Own Full-Stack Password Manager**

VaultixMongo is the **second version of VaultixPass**, upgraded from browser-based LocalStorage to a **full-stack password management application** powered by **React.js, Tailwind CSS, Express.js, and MongoDB**.

The project provides a clean and responsive interface for managing website credentials while communicating with a backend API for database operations.

 **From LocalStorage to MongoDB — Vaultix is becoming a full-stack application.**

---

##  Features

-  Save website credentials
-  Store usernames
-  Store passwords in masked form
-  Show / hide password while entering
-  Copy website, username, and password
-  Edit existing credentials
-  Delete credentials
-  Store credentials in MongoDB
-  Communicate with backend using REST API requests
-  React-based dynamic interface
-  Toast notifications
-  Responsive design
-  Modern UI with Tailwind CSS
-  Unique IDs using UUID

---

##  What's New in VaultixMongo?

VaultixMongo moves the project from client-side storage to a backend architecture.

### VaultixPass — Version 1

```text
React
   ↓
LocalStorage
```

### VaultixMongo — Version 2

```text
React + Tailwind CSS
        ↓
     Express.js
        ↓
      MongoDB
```

This allows the application to work with a real database instead of relying only on browser LocalStorage.

---

##  Architecture

```text
                    ┌──────────────────────┐
                    │      VaultixMongo    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      React.js       │
                    │    Tailwind CSS     │
                    └──────────┬───────────┘
                               │
                         HTTP Requests
                               │
                               ▼
                    ┌──────────────────────┐
                    │     Express.js       │
                    │      REST API        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │       MongoDB        │
                    │    Password Data     │
                    └──────────────────────┘
```

---

##  Tech Stack

### Frontend

-  React.js
-  Tailwind CSS
-  JavaScript
-  Vite
-  React Toastify
-  UUID

### Backend

-  Node.js
-  Express.js
-  MongoDB
-  REST API
-  CORS

### Database

```text
MongoDB
    └── passwords
```

---

##  Project Structure

```text
VaultixMongo/
│
├── frontend/
│   ├── public/
│   │   ├── copy.gif
│   │   ├── doodle-motif-49-plus-circle-hover-pinch (1).gif
│   │   ├── eyecross.png
│   │   ├── github.gif
│   │   ├── system-solid-35-pencil-hover-pinch.gif
│   │   ├── system-solid-69-eye-hover-pinch.gif
│   │   └── system-solid-185-trash-bin-hover-pinch.gif
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Manager.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── ...
│
└── README.md
```

> Your exact folder names can be adjusted to match the final repository structure.

---

##  CRUD Operations

VaultixMongo communicates with the Express backend to perform database operations.

###  Get Passwords

The frontend requests saved credentials from the backend:

```javascript
const getPasswords = async () => {
    let req = await fetch("http://localhost:3000");
    let passwords = await req.json();
    setPasswordArray(passwords);
}
```

---

###  Create Password

New credentials are sent to the Express server using a `POST` request.

```javascript
await fetch("http://localhost:3000", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        ...form,
        id: uuidv4()
    })
})
```

---

###  Update Password

When editing an existing credential, VaultixMongo removes the previous record and saves the updated credential.

```text
Existing Password
       ↓
    Delete
       ↓
Updated Password
       ↓
     Save
```

---

###  Delete Password

Credentials can be removed using a `DELETE` request.

```javascript
await fetch("http://localhost:3000", {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ id })
})
```

---

##  MongoDB

VaultixMongo uses MongoDB to persist password records.

A password document follows this general structure:

```javascript
{
    id: "unique-id",
    site: "https://example.com",
    username: "username",
    password: "your-password"
}
```

The frontend communicates with the Express API, while Express handles communication with MongoDB.

---

##  Password Display

Passwords are not displayed as plain text inside the password table.

Instead, VaultixMongo displays password bullets based on the password length:

```text
••••••••••
```

The original password can be copied using the copy button.

> **Important:** Masking a password in the UI is not the same as encrypting it. A production password manager should use proper encryption, authentication, access controls, and secure secret handling.

---

##  Copy to Clipboard

VaultixMongo provides one-click copying for:

-  Website
-  Username
-  Password

The application uses the browser Clipboard API:

```javascript
navigator.clipboard.writeText(text);
```

A Toastify notification confirms the action.

---

##  Show / Hide Password

The password input includes an interactive eye icon.

```text
Password
   ↓
••••••••
   👁️
   ↓
password
```

This allows users to temporarily view the password while entering or editing credentials.

---

##  Responsive Design

VaultixMongo is designed for different screen sizes.

###  Desktop

The credentials table displays all columns in a structured layout.

###  Mobile

The table uses horizontal scrolling so that all important columns remain accessible without breaking the layout.

---

##  UI Design

VaultixMongo uses a clean green-themed interface featuring:

-  Green accent colors
-  Dark footer
-  Rounded input fields
-  Hover effects
-  Toast notifications
-  Copy icons
-  Edit icons
-  Delete icons
-  Responsive layouts
-  Clean password management table

---

##  Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/muhammadali1512/VaultixPass.git
```

### 2. Open the Project

```bash
cd VaultixMongo
```

### 3. Install Frontend Dependencies

```bash
cd VaultixMongo
npm install
```

### 4. Install Backend Dependencies

Open another terminal:

```bash
cd backend
npm install
```

### 5. Start MongoDB

Make sure your MongoDB server is running.

Your backend can then connect to the MongoDB database.

### 6. Start the Backend

```bash
npm start
```

or, if your project uses a development script:

```bash
npm run dev
```

### 7. Start the Frontend

Inside the frontend folder:

```bash
npm run dev
```

The frontend will communicate with the Express backend running on:

```text
http://localhost:3000
```

---

##  API Overview

| Method   | Purpose           | Endpoint |
| -------- | ----------------- | -------- |
| `GET`    | Get all passwords | `/`      |
| `POST`   | Save a password   | `/`      |
| `DELETE` | Delete a password | `/`      |

The API is handled by the Express.js backend and connected to MongoDB.

##

---

##  Project Evolution

### Version 1 — VaultixPass

```text
React.js
   +
Tailwind CSS
   +
LocalStorage
```

### Version 2 — VaultixMongo

```text
React.js
      +
Tailwind CSS
      +
Express.js
      +
MongoDB
```

---

## 📌 Current Project Status

```text
React.js          ✅ Completed
Tailwind CSS      ✅ Completed
Responsive UI     ✅ Completed
Password Masking  ✅ Completed
Copy Function     ✅ Completed
Edit Function     ✅ Completed
Delete Function   ✅ Completed
Express.js        ✅ Connected
MongoDB           ✅ Connected
REST API          ✅ Implemented

```

---

## 👨‍💻 Author

### Muhammad Ali

**Full Stack Developer | MERN Stack Developer**

Building practical projects while continuously improving my skills in modern web development.

### Technologies

```text
React.js
Next.js
Node.js
Express.js
MongoDB
Tailwind CSS
JavaScript
C++
Git & GitHub
```

---

## 🌐 Connect With Me

### GitHub

[https://github.com/muhammadali1512](https://github.com/muhammadali1512)

### LinkedIn

[https://www.linkedin.com/in/muhammad-ali-0b126642a/](https://www.linkedin.com/in/muhammad-ali-0b126642a/)

---

## &#x20;Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

Every project is another step toward becoming a better developer.&#x20;

---

## 🔐 VaultixMongo

> **Your passwords. Your control.**

Built with ❤️ using **React.js + Tailwind CSS + Express.js + MongoDB**.

**Version 2 of the Vaultix project — now powered by a real backend and database.**
