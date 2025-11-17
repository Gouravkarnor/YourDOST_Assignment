
# User Directory Table

A simple React app (Create React App) that fetches users from **https://reqres.in/api/users** and displays them in a responsive table. It includes search, sort, filters, pagination, and a loading spinner for better UX.

---

## 🚀 Live Demo
👉 **https://your-dost-assignmentfrontend.vercel.app/**

---

## ✨ Features
- Fetch user list from Reqres API  
- Search by name or email  
- Sort by first name or email  
- Pagination (API-based)  
- Filter by email domain or first letter  
- Loading spinner  
- Responsive UI (MUI + optional Tailwind)  
- Supports optional API key

---

## 🛠️ Setup (Create React App)

### 1. Install dependencies
```bash
npm install
````

### 2.Add API key

Create a `.env` file in the project root:

```env
REACT_APP_API_KEY=reqres-free-v1
```

> CRA requires variables starting with `REACT_APP_`.

### 3. Start the app

```bash
npm start
```

---

## 🧰 Tech Used

* React (Create React App)
* Axios
* Material UI
* Tailwind CSS (optional)

---

## 📌 Notes

* Search, sort, and filters apply to the users returned on the current page.
* UI is built to be responsive for both desktop and mobile.
