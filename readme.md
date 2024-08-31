# Flat-Sharing App

## Overview

The Flat-Sharing App is a backend service designed to facilitate the process of finding and managing shared living spaces. It provides a range of APIs for user authentication, apartment listings, roommate matching, and other related functionalities. The service is built using Node.js, Express, TypeScript, and Prisma ORM, ensuring a robust and scalable solution.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server-side logic.
- **Express**: A web application framework for routing and middleware management.
- **TypeScript**: A statically typed superset of JavaScript that enhances code reliability.
- **Prisma ORM**: A modern ORM for database management and interaction.
- **JWT (JSON Web Tokens)**: Used for secure user authentication.
- **Bcrypt**: A library for password hashing.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **Dotenv**: For managing environment variables.
- **Cors**: Enables Cross-Origin Resource Sharing for the APIs.

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)
- **PostgreSQL** (recommended, as Prisma is set up for use with PostgreSQL)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/mostafizurRahaman/flat-sharing-app.git
    cd flat-sharing-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following environment variables:

    ```plaintext
    DATABASE_URL=postgresql://username:password@localhost:5432/flat_sharing_db
    PORT=5000
    NODE_ENV=development
    BCRYPT_SALT_ROUND=10
    ACCESS_TOKEN_SECRET=your_access_token_secret_key
    REFRESH_TOKEN_SECRET=your_refresh_token_secret_key
    RESET_TOKEN_SECRET=your_reset_token_secret_key
    ACCESS_TOKEN_EXPIRES_IN=15m
    REFRESH_TOKEN_EXPIRES_IN=7d
    RESET_TOKEN_EXPIRES_IN=1h
    ```

4. **Run database migrations:**

    ```bash
    npm run db:migrate
    ```

5. **Generate Prisma client:**

    ```bash
    npm run db:generate
    ```

6. **Start the development server:**

    ```bash
    npm run dev
    ```

## Database Management

The app uses Prisma for database management. Below are some useful commands:

- **Migrate the database:**

    ```bash
    npm run db:migrate
    ```

- **Generate Prisma client:**

    ```bash
    npm run db:generate
    ```

- **Format Prisma schema:**

    ```bash
    npm run db:format
    ```

- **Push Prisma schema changes to the database:**

    ```bash
    npm run db:push
    ```

- **Pull database schema into Prisma schema:**

    ```bash
    npm run db:pull
    ```

- **Debug Prisma queries:**

    ```bash
    npm run db:debug
    ```

- **Open Prisma Studio:**

    ```bash
    npm run db:studio
    ```

## API Documentation

You can find the full API documentation on [Postman](https://documenter.getpostman.com/view/24279484/2sAXjM2qkF).

## License

This project is licensed under the MIT License.
