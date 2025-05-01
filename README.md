# ⚡ Fastify Starter API

A blazing fast Node.js API starter built with **Fastify** and **MongoDB**, designed for speed and simplicity.

> "Fastify is faster than Express – give it a try!"

---

## 🚀 Features

- 🚄 Ultra-fast performance using Fastify
- 🗂️ Modular routing structure
- 🧩 MongoDB integration via Mongoose
- 🧪 Easy to scale and extend

---

## 📦 Tech Stack

- **Backend:** [Fastify](https://www.fastify.io/)
- **Database:** [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- **Language:** Node.js (JavaScript)

---

## 🛠️ Setup & Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/18-sumit/fastify.git
cd fastify

2. Install Dependencies
npm install

3. Start MongoDB (if not already running)
mongod

4. Run the Server
npm start



📂 Project Structure
fastify-api/
├── routes/
│   └── index.js        # All your route definitions
├── index.js            # Main server file
└── package.json

🧪 Example Endpoint
GET http://localhost:8000/

Response:
{
  "visitor": "Hello devs!! try fastify , this is faster than express"
}
