# User Directory Table

A simple React app (Create React App) that fetches users from **[https://reqres.in/api/users](https://reqres.in/api/users)** and displays them in a responsive table. Includes search, sort, filter, pagination, and a loading state.

---

## Features

- Fetch user list from Reqres API
- Search by name or email
- Sort (first name / email)
- Pagination
- Filter by email domain or first letter
- Loading spinner
- Responsive UI (MUI + optional Tailwind)
- Optional API key support

---

## Setup (CRA)

### 1. Install dependencies

```bash
npm install
```

### 2. Add optional API key

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

## Tech Used

- Create React App
- Axios
- Material UI
- Tailwind CSS (optional)

---

## Notes

- Search, sort, and filters apply to the data returned on each page.
