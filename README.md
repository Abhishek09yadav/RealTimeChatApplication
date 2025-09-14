MERN Stack Realtime Chat Appplication

A full-stack real-time chat application built using the MERN (MongoDB, Express, React, Node.js) stack and Socket.io.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)


## Introduction

This project is a real-time chat application that allows users to sign up, log in, and engage in conversations with other users in real-time. The application is built using the MERN stack and Socket.io, providing a comprehensive example of how to build a full-stack web application.

## Features

* Real-time messaging
* User authentication (sign-up, login)
* Profile image update
* Theme selection (32 different themes)
* Responsive UI design

## Technologies Used

* Frontend: React, Tailwind CSS, Daisy UI
* Backend: Node.js, Express, MongoDB
* Authentication: JSON Web Tokens
* Real-time communication: Socket.io

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/mern-stack-realtime-chat-app.git`
2. Install dependencies: `npm install`
3. Start the backend server: `npm run start:server`
4. Start the frontend development server: `npm run start:client`
5. Open your web browser and navigate to `http://localhost:5173`

## Deployment

To deploy the application to a live server, follow these steps:

1. Build the frontend: `npm run build:client`
2. Deploy the backend to a Node.js environment
3. Configure environmental variables for the backend
4. Deploy the frontend to a static hosting service

## API Endpoints

The following API endpoints are available:

* `POST /api/signup`: Create a new user account
* `POST /api/login`: Log in to an existing user account
* `GET /api/conversations`: Retrieve a list of conversations for the current user
* `POST /api/messages`: Send a new message
* `GET /api/messages`: Retrieve a list of messages for a conversation

## Contributing

To contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Commit your changes and push to your fork
4. Open a pull request against the main branch

