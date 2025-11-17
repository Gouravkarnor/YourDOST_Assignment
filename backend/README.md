# 📝 To-Do API (Express.js)

A simple and lightweight REST API built with **Express.js**.  
It supports creating, reading, updating, and deleting to-do items using an in-memory list.

---

## 🌐 Live Backend API

👉 **https://your-dost-assignmentbackend.vercel.app/**

---

## 🚀 Features

- Get all to-dos
- Add a new to-do
- Update an existing to-do
- Delete a to-do
- Uses `uuid` for unique IDs
- Includes validation for clean data
- In-memory storage (no database required)

---

## 📌 Tech Stack

- **Node.js**
- **Express.js**
- **UUID**
- **CORS**

---

## ▶️ How to Run

### 1. Install dependencies

```bash
npm install
```

### 2. Start the server

```bash
node index.js
```

### 3. Server will run at

```
http://localhost:4000
```

---

## 📡 API Endpoints

### **GET /todos**

Returns all to-dos.

```json
[
  { "id": "123", "task": "Learn Express.js", "completed": true },
  { "id": "456", "task": "Build a To-Do API", "completed": false }
]
```

---

### **POST /todos**

Create a new to-do.

#### Request Body:

```json
{
  "task": "Buy groceries"
}
```

#### Response:

```json
{
  "id": "uuid",
  "task": "Buy groceries",
  "completed": false
}
```

---

### **PUT /todos/:id**

Update a to-do.

#### Sample Body:

```json
{
  "task": "Updated task",
  "completed": true
}
```

---

### **DELETE /todos/:id**

Deletes a to-do.
Returns `204 No Content`.

---

## 📘 Example To-Dos

```js
[
  { id: uuidv4(), task: "Learn Express.js", completed: true },
  { id: uuidv4(), task: "Build a To-Do API", completed: false },
];
```

---

## 🧪 Sample cURL Commands

### Get todos

```bash
curl https://your-dost-assignmentbackend.vercel.app/todos
```

### Add todo

```bash
curl -X POST https://your-dost-assignmentbackend.vercel.app/todos \
     -H "Content-Type: application/json" \
     -d '{"task": "Practice coding"}'
```

### Update todo

```bash
curl -X PUT https://your-dost-assignmentbackend.vercel.app/todos/ID_HERE \
     -H "Content-Type: application/json" \
     -d '{"completed": true}'
```

### Delete todo

```bash
curl -X DELETE https://your-dost-assignmentbackend.vercel.app/todos/ID_HERE
```

---

## 📍 Notes

- Data resets whenever the server restarts (stored only in memory).
