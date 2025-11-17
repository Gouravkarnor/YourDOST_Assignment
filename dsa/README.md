# 📘 Second Largest Unique Number — Solution

## 🔍 Problem

Given an array of integers, return the **second largest unique** number.
If no such number exists, return **-1**.

---

## 💡 Approach

Simple one–pass logic:

- Keep track of:

  - `largest`
  - `secondLargest`

- Update values while iterating
- Ignore duplicates of the largest number
- Return `-1` if a second unique value doesn’t exist

**Time Complexity:** `O(n)`
**Space Complexity:** `O(1)`

---

## 🧪 Sample Input & Output

| Input                   | Output |
| ----------------------- | ------ |
| `[3, 5, 2, 5, 6, 6, 1]` | `5`    |
| `[7, 7, 7]`             | `-1`   |
| `[10, 9, 8]`            | `9`    |
| `[1]`                   | `-1`   |
