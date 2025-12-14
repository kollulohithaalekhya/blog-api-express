# Blog API – Express.js & PostgreSQL

A RESTful Blog API built using **Express.js**, **Sequelize**, and **PostgreSQL** that manages **Authors** and their **Posts** with a proper **one-to-many relationship**.

This project demonstrates backend fundamentals such as database modeling, foreign key constraints, cascade deletes, efficient queries, and clean API design.

---

## Tech Stack

- **Node.js**
- **Express.js**
- **PostgreSQL**
- **Sequelize ORM**
- **dotenv** (environment variables)
- **Thunder Client / Postman** (API testing)

---

## 📁 Project Structure

```
blog-api-express/
│
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── author.controller.js
│   │   └── post.controller.js
│   ├── models/
│   │   ├── Author.js
│   │   ├── Post.js
│   │   └── index.js
│   ├── routes/
│   │   ├── author.routes.js
│   │   └── post.routes.js
│   ├── app.js
│   └── server.js
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Database Design

### Author Table
- `id` (Primary Key)
- `name` (string)
- `email` (string, unique)

### Post Table
- `id` (Primary Key)
- `title` (string)
- `content` (text)
- `author_id` (Foreign Key → Author.id)

### Relationship
- **One Author → Many Posts**
- **Cascade delete enabled**  
  (Deleting an author automatically deletes all related posts)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/kollulohithaalekhya/blog-api-express.git
cd blog-api-express
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Environment Variables

Create a `.env` file in the project root.

> ⚠️ **Do NOT commit this file** (it is ignored via `.gitignore`)

Example (`.env.example`):

```env
PORT=3000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=blog_db
DB_DIALECT=postgres
```

---

### 4️⃣ Create Database

```sql
CREATE DATABASE blog_db;
```

---

### 5️⃣ Run the Server

```bash
npm run dev
```

Expected output:

```
Database synced
Server running on port 3000
```

---

## 📌 API Endpoints

### Author Endpoints

| Method | Endpoint       | Description                   |
|--------|----------------|-------------------------------|
| POST   | `/authors`     | Create a new author           |
| GET    | `/authors`     | Get all authors               |
| GET    | `/authors/:id` | Get author by ID              |
| PUT    | `/authors/:id` | Update author                 |
| DELETE | `/authors/:id` | Delete author (cascade posts) |

---

### Post Endpoints

| Method | Endpoint             | Description                         |
|--------|----------------------|-------------------------------------|
| POST   | `/posts`             | Create post (valid author required) |
| GET    | `/posts`             | Get all posts with author details   |
| GET    | `/posts?author_id=1` | Filter posts by author              |
| GET    | `/posts/:id`         | Get single post with author         |
| PUT    | `/posts/:id`         | Update post                         |
| DELETE | `/posts/:id`         | Delete post                         |

---

### Nested Resource Endpoint

| Method | Endpoint             | Description                         |
|--------|----------------------|-------------------------------------|
| GET    | `/authors/:id/posts` | Get all posts for a specific author |

---

## API Testing

Tested using **Thunder Client** and **Postman**.

### Scenarios:
- Valid & invalid author creation
- Duplicate email validation
- Creating posts with valid/invalid authors
- Fetching posts with JOIN queries
- Filtering posts by author
- Nested resource access
- Cascade delete verification

---

##  Key Features

- RESTful API design  
- Sequelize model associations  
- Foreign key constraints  
- Cascade delete support  
- Efficient JOIN queries  
- Clean MVC folder structure  
- Proper HTTP status codes  
- Secure environment variable handling  

---

## Security Notes

- `.env` is ignored via `.gitignore`
- Credentials are never committed
- `.env.example` provided for reference

---

## 👩‍💻 Author

**Alekhya**  
GitHub: https://github.com/kollulohithaalekhya

---
