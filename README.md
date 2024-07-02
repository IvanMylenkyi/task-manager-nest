# Task Management Application

This is a simple task management application built with NestJS and Prisma. The application allows you to create, read, update, and delete tasks.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later)
- [PostgreSQL](https://www.postgresql.org/) (or any other database supported by Prisma)

## Getting Started

### Clone the repository

git clone https://github.com/yourusername/task-management-app.git

cd task-management-app

### Install dependencies


npm install
### Set up the database

Ensure PostgreSQL is running on your machine.
Create a new database (e.g., task_management).
Configure the environment variables
Create a .env file in the root of the project and add the following:

### env

DATABASE_URL=postgresql://username:password@localhost:5432/task_management

Replace username, password, and localhost:5432/task_management with your PostgreSQL credentials and database name.

### Prisma setup
Generate the Prisma client and apply migrations:

npx prisma migrate dev --name init
npx prisma generate
Run the application

### Development

npm run start:dev

### Build the application:

npm run build

### Start the application:

npm run start:prod

### Endpoints


#### Create Task

URL: POST /task
Body:
json

{
  "name": "Task name",
}
Response:
json

{
  "id": 1,
  "name": "Task name",
  "isDone":Bool
}
#### Get All Tasks

URL: GET /task
Response:
json

[
  {
    "id": 1,
    "name": "Task name",
    "isDone":false
  },
  ...
]
#### Get Task by ID

URL: GET /task/:id
Response:
json
{
  "id": 1,
  "name": "Task name",
  "isDone":bool
}
#### Update Task

URL: PATCH /tasks/:id
Body:
json

{
  "isDone":true
}
Response:
json
Copy code
{
  "id": 1,
  "name": "Updated Task name",
  "isDone": true
}
#### Update name of Task

URL: PATCH /tasks/:id/e
Body:
json

{
  "name":"another task name"
}
Response:
json

{
  "id": 1,
  "name": "Updated Task name",
  "isDone": true
}
#### Delete Task

URL: DELETE /tasks/:id
Response:
json
Copy code
{
  "id": 1,
  "name": "Task name",
  "isDone": bool
}
### Project Structure

src/
├── app.module.ts
├── main.ts
├── prisma.service.ts
├── tasks/
│   ├── task.controller.ts
│   ├── task.module.ts
│   ├── task.service.ts
└── prisma/
    └── schema.prisma
#### app.module.ts: The root module of the application.
#### main.ts: The entry point of the application.
#### prisma.service.ts: The Prisma service for database interaction.
#### tasks/: Directory containing task-related modules, controllers, and services.
#### prisma/schema.prisma: The Prisma schema definition file.