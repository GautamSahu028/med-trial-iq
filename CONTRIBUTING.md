# 🚀 Contributing Guide

This guide will help you understand how to set up your environment, work on features, and contribute effectively.

---

## 🧱 Branching Strategy

- `main` → Stable release branch (protected).
- `dev` → Development branch. All new work should merge here.
- `feature/<your-task>` → Use this format for working branches.

---

## 🛠️ Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/GautamSahu028/med-trial-iq.git
   cd med-trial-iq
   ```

2. **Checkout the dev branch**

   ```bash
   git checkout dev
   git pull origin dev
   ```

3. **Create a new feature branch**
   ```bash
   git checkout -b feature/<your-task-name>
   ```

---

## 👨‍💻 Making Changes

1. Make your changes locally

2. Stage and commit your work

   ```bash
   git add .
   git commit -m "Clear and descriptive message"
   ```

3. Push your branch to GitHub

   ```bash
   git push origin feature/<your-task-name>
   ```

4. Open a Pull Request (PR) into the `dev` branch from GitHub

---

## ✅ Pull Request Guidelines

- Base branch should be `dev`
- PR title should reflect the work (e.g., "Add login page")
- Keep PRs focused and minimal
- Assign teammates if a review is needed

---

## 🚫 Avoid

- Directly pushing to `main` or `dev`
- Committing `.env`, secrets, or sensitive files
- Large unreviewed PRs

---
