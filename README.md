# User Service API

This is a simple User Service API built with Node.js, Express, TypeORM, and PostgreSQL. It supports CRUD operations, Swagger API documentation, and a license key middleware for endpoint protection. The project is set up to run with Docker and can also be run locally.


## Prerequisites

- Node.js
- PostgreSQL
- Docker (for running with Docker)

## Environment Variables

Create a `.env` file in the `user-service` directory with the following content:

TYPEORM_CONNECTION=postgres
TYPEORM_HOST=db
TYPEORM_USERNAME=postgres
TYPEORM_PASSWORD=123456
TYPEORM_DATABASE=userdb
TYPEORM_PORT=5432
TYPEORM_SYNCHRONIZE=true
TYPEORM_ENTITIES=src/entities/*.ts


## Running Locally

1. **Install Dependencies:**

    ```bash
    cd user-service
    npm install
    ```

2. **Set Up PostgreSQL Database:**

    Create a database and user in your local PostgreSQL instance:

    ```sql
    CREATE DATABASE userdb;
    CREATE USER user WITH PASSWORD 'password';
    GRANT ALL PRIVILEGES ON DATABASE userdb TO user;
    ```

    Run the following SQL script to create the necessary tables:

    ```sql
    CREATE TABLE IF NOT EXISTS "user" (
      "id" SERIAL PRIMARY KEY,
      "name" VARCHAR NOT NULL,
      "email" VARCHAR NOT NULL
    );
    ```

3. **Start the Application:**

    - To build the project:

      ```bash
      npm run build
      ```

    - To start the project:

      ```bash
      npm start
      ```

    - For development with hot-reloading:

      ```bash
      npm run dev
      ```

## Running with Docker

    ```bash
    docker-compose up --build
    ```

## API Documentation

Swagger UI is available at [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Sample API Calls

### Create a New User

```bash
curl -X POST http://localhost:3000/api/users \
-H "Content-Type: application/json" \
-H "x-license-key: your-valid-license-key" \
-d '{"name": "John Doe", "email": "john.doe@example.com"}'

curl -X GET http://localhost:3000/api/users \
-H "x-license-key: your-valid-license-key"

curl -X GET http://localhost:3000/api/users/1 \
-H "x-license-key: your-valid-license-key"

curl -X PUT http://localhost:3000/api/users/1 \
-H "Content-Type: application/json" \
-H "x-license-key: your-valid-license-key" \
-d '{"name": "Jane Doe", "email": "jane.doe@example.com"}'

curl -X DELETE http://localhost:3000/api/users/1 \
-H "x-license-key: your-valid-license-key"

curl -X GET http://localhost:3000/api/users/email/john.doe@example.com \
-H "x-license-key: your-valid-license-key"

curl -X POST http://localhost:3000/api/users/bulk \
-H "Content-Type: application/json" \
-H "x-license-key: your-valid-license-key" \
-d '[{"name": "Alice", "email": "alice@example.com"}, {"name": "Bob", "email": "bob@example.com"}]'

