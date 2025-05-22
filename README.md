# **Express + TypeScript + MySQL Starter 🚀**

A scalable, clean-architecture boilerplate for building RESTful APIs using **Express.js**, **TypeScript**, and **MySQL**. This project is ideal for developers who want a strong foundation with clear separation of concerns and modern development practices.

---

## **✨ Features**

✅ **TypeScript + Express** – Fast, typed, and modern API development
✅ **Clean Architecture** – Modular organization into HTTP, Infrastructure, Persistence, and Shared layers
✅ **MySQL + Sequelize ORM** – Integrated with MySQL using Sequelize for models and migrations
✅ **Centralized Middleware** – Auth, validation, and error-handling middlewares
✅ **Environment-Based Config** – Easily configurable via `.env` files
✅ **Zod Validation** – Lightweight schema validation for request bodies
✅ **Preconfigured Scripts** – Dev and build/start scripts with migration support

---

## **📂 Project Structure**

```
express-mysql-ts-starter/
│
├── .env                    # Environment variables
├── .env.example            # Sample env file
├── .gitignore              # Ignored files
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
│
└───src/
    ├── app.ts              # Express app configuration
    ├── config.ts           # Application-level config
    ├── index.ts            # App entry point
    ├── migrate.ts          # Manual migration runner
    │
    ├── http/               # HTTP layer
    │   ├── controllers/    # Controllers for each route
    │   ├── middlewares/    # Auth, validation, error middlewares
    │   ├── request/        # Request-specific types/schemas
    │   └── shared/         # Codes and type helpers
    │
    ├── infrastructure/     # Business logic and app services
    │   ├── dto/            # Data Transfer Objects
    │   ├── implementation/ # Service implementations
    │   ├── mappers/        # Map entities <-> DTOs
    │   ├── repository/     # Abstraction for data access
    │   └── shared/         # Common logic for infrastructure
    │
    ├── persistence/        # Database layer
    │   ├── migrations/     # Sequelize migration scripts
    │   ├── models/         # Sequelize models
    │   ├── connection.ts   # DB connection setup
    │   └── relations.ts    # Table/model relationships
    │
    ├── routes/             # API route declarations
    └── shared/             # App-wide utilities
```

---

## **🚀 Getting Started**

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Configure Environment Variables

Create a `.env` file (or copy from `.env.example`) and add your DB credentials:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=express_ts_db
```

### 3️⃣ Run Migrations

Run Sequelize migrations manually:

```bash
npm run migrate
```

### 4️⃣ Run the Development Server

```bash
npm run dev
```

### 5️⃣ Build and Run in Production

```bash
npm run build
npm start
```

---

## **🧪 Scripts Overview**

| Script            | Purpose                                 |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Start development server with `ts-node` |
| `npm run build`   | Compile TypeScript into `dist/`         |
| `npm start`       | Run compiled app (requires `build`)     |
| `npm run migrate` | Run migrations for development          |
| `migrate:test`    | Run migrations in test environment      |

---

## **🧑‍💻 Contributing**

Feel free to fork the repo and submit PRs or issues. Contributions are welcome! 💡

---

## **📌 Notes**

* Ensure MySQL is running and credentials in `.env` are valid.
* All requests are validated using `zod` in combination with `validator.middleware.ts`.
* The app uses JWT-based authentication (see `auth.middleware.ts`).
* Folder placeholders (`.gitkeep`) help keep the structure even if empty.

---

🔥 **Kickstart your next backend project with a scalable, modular architecture!** 🚀