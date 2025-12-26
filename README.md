💳 Wallet API (Expense Tracker Backend)

A simple and secure Wallet / Expense Tracker API built to manage expenses, categories, and user-wise data efficiently.
This project focuses on backend logic, database design, and API handling.

🚀 Features

📌 Add, edit, delete expenses

🗂 Category-wise expense management

👤 User-based expense tracking

📊 Monthly & category summaries

🔐 Secure database interaction

🧩 Clean and modular PHP structure

🛠 Tech Stack

Backend: PHP

Database: MySQL (MariaDB)

Server: Apache (XAMPP)

Tools: phpMyAdmin, Git

📁 Project Structure
expense-tracker/
│
├── config/
│   └── db.php
│
├── expenses/
│   ├── add.php
│   ├── edit.php
│   ├── delete.php
│   ├── list.php
│   ├── chart.php
│
├── categories/
│   └── list.php
│
├── includes/
│   ├── navbar.php
│   └── footer.php
│
├── dashboard.php
└── README.md

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/your-username/wallet-api.git


Move the project to XAMPP htdocs

C:\xampp\htdocs\


Start Apache & MySQL from XAMPP

Import the database:

Open phpMyAdmin

Create database: expense_tracker

Import the provided .sql file

Configure database connection in:

config/db.php


Run the project:

http://localhost/expense-tracker/dashboard.php

📸 Screenshots

Add screenshots like this:

![Dashboard](screenshots/dashboard.png)
![Expense List](screenshots/expenses.png)


📌 Create a screenshots/ folder and upload images there.

📌 Learning Outcomes

PHP CRUD operations

MySQL database relationships

Backend logic for real-world applications

Session handling

Debugging and error handling

🔮 Future Improvements

Authentication (Login / Signup)

REST API version

JWT-based security

Frontend integration (React / React Native)

Cloud deployment

👩‍💻 Author

Jaishree Singh
B.Tech CSE (3rd Year)
📱 Mobile & Backend Developer
🔗 GitHub: https://github.com/zuzujaishri

⭐ Show Your Support

If you like this project, don’t forget to ⭐ the repository!
