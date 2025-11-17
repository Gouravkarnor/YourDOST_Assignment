const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// 📌 New: API Description Endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Todo API",
    description: "A simple REST API to manage todo items.",
    routes: {
      GET: {
        "/": "API description",
        "/todos": "Get all todos",
      },
      POST: {
        "/todos": {
          description: "Create a new todo",
          sampleBody: { task: "Buy groceries" },
        },
      },
      PUT: {
        "/todos/:id": {
          description: "Update a todo",
          sampleBody: { task: "Updated task", completed: true },
        },
      },
      DELETE: {
        "/todos/:id": "Delete a todo",
      },
    },
    exampleUsage: {
      fetchTodos: "GET https://your-dost-assignmentbackend.vercel/todos",
      createTodo: {
        method: "POST",
        url: "https://your-dost-assignmentbackend.vercel/todos",
        body: { task: "Learn Node.js" },
      },
      updateTodo: {
        method: "PUT",
        url: "https://your-dost-assignmentbackend.vercel/todos/<id>",
        body: { completed: true },
      },
      deleteTodo:
        "DELETE https://your-dost-assignmentbackend.vercel/todos/<id>",
    },
  });
});

// Simple in-memory todo list
let todos = [
  { id: uuidv4(), task: "Learn Express.js", completed: true },
  { id: uuidv4(), task: "Build a To-Do API", completed: false },
];

// Get all todos
app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

// Add a new todo
app.post("/todos", (req, res) => {
  const { task } = req.body;

  if (!task || typeof task !== "string" || task.trim() === "") {
    return res.status(400).json({ error: "Task must be a non-empty string." });
  }

  const newTodo = {
    id: uuidv4(),
    task: task.trim(),
    completed: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;

  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) return res.status(404).json({ error: "Todo not found." });

  if (task !== undefined && (typeof task !== "string" || task.trim() === "")) {
    return res.status(400).json({ error: "Task must be a non-empty string." });
  }

  if (completed !== undefined && typeof completed !== "boolean") {
    return res.status(400).json({ error: "Completed must be true or false." });
  }

  const existing = todos[index];

  const updated = {
    ...existing,
    task: task !== undefined ? task.trim() : existing.task,
    completed: completed !== undefined ? completed : existing.completed,
  };

  todos[index] = updated;
  res.status(200).json(updated);
});

// Delete a todo
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;

  if (!todos.some((t) => t.id === id)) {
    return res.status(404).json({ error: "Todo not found." });
  }

  todos = todos.filter((t) => t.id !== id);
  res.status(204).send();
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
