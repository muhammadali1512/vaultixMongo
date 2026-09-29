# 🔐 Vaultix — Full-Stack Password Manager

**Vaultix** is a modern full-stack password manager built to securely manage website credentials through a clean and responsive interface.

The project started as a **React + Tailwind CSS frontend** and was expanded with an **Express.js backend and MongoDB database** to create a complete full-stack application.

---

##  Live Demo

### Frontend
🔗 https://vaultix-mongo-lklv.vercel.app/

### Backend
🔗 https://vaultix-mongo.vercel.app/

### GitHub Repository
🔗 https://github.com/muhammadali1512/vaultixMongo

---

##  Features

-  Add website credentials
-  Edit saved passwords
-  Delete credentials
-  Copy username and password
-  Show/hide passwords
-  Mask passwords in the password table
-  Store credentials in MongoDB
-  Frontend and backend API integration
-  Responsive user interface
-  Toast notifications
-  Fast React-based interface

---

##  Tech Stack

### Frontend

-  React.js
-  Tailwind CSS
-  Vite
-  React Toastify
- UUID

### Backend

-  Node.js
-  Express.js
-  MongoDB
-  REST API
-  CORS

### Deployment

- ▲ Vercel
-  MongoDB Atlas

---

##  Project Structure

```text
VaultixMongo/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

##  How Vaultix Works

```text
User
  ↓
React Frontend
  ↓
REST API
  ↓
Express.js Backend
  ↓
MongoDB
  ↓
Stored Credentials
```

When a user adds a credential:

1. The user enters the website, username, and password.
2. React sends the data to the backend.
3. Express.js receives the request.
4. The backend communicates with MongoDB.
5. The credential is stored in the database.
6. The frontend displays the updated data.

---

##  Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/muhammadali1512/vaultixMongo.git
```

### 2. Open the Project

```bash
cd vaultixMongo
```

---

#  Frontend Setup

Go to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

---

#  Backend Setup

Open another terminal and go to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
```

Start the backend:

```bash
npm start
```

---

##  MongoDB Setup

Vaultix uses **MongoDB Atlas** for database storage.

Create a MongoDB Atlas cluster and add your connection string to the backend `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
```

Make sure your MongoDB Atlas network access and database user are configured correctly.

---

##  Environment Variables

Never upload your real credentials or secrets to GitHub.

Example:

```env
MONGO_URI=your_mongodb_connection_string
```

Add `.env` to `.gitignore`:

```text
.env
node_modules
```

---

##  Project Preview

### Vaultix Dashboard

Add your project screenshot here:

```markdown
![Vaultix Dashboard](./screenshots/vaultix-dashboard.png)
```

---

##  Learning Goals

I built Vaultix to gain practical experience with:

- React component development
- State management
- API integration
- Express.js
- REST APIs
- MongoDB
- CRUD operations
- Frontend and backend communication
- Environment variables
- Deployment
- Responsive UI development

This project helped me understand how different technologies work together to create a complete web application.

---


---

## 👨‍💻 Developer

**Muhammad Ali**

Full-Stack Web Development Learner | React.js | Node.js | Express.js | MongoDB

### Connect With Me

 LinkedIn:  
https://www.linkedin.com/in/muhammad-ali-0b126642a/

 GitHub:  
https://github.com/muhammadali1512

---

##  Support

If you found this project interesting, feel free to **star ⭐ the repository** and explore the code.

Feedback and suggestions are always welcome!

---

###  Built with React, Express & MongoDB

**Vaultix — Manage your credentials with a clean and simple interface.**
