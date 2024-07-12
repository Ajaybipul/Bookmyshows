# Almabetter - Capstone Project (2nd) - BookMyShow

This is a backend capstone project assigned by Almabetter. In this project, we have created a BookMyShow website. The project features a very simple and user-friendly UI, making it easy to navigate. It is also responsive, ensuring a seamless experience across various devices.

## Deployment Links

Click on the links below to see the project:

Frontend on Netlify:
- [Frontend](https://6690e628dc6b2ef26038f352--grand-fudge-1ae5c5.netlify.app/)

Backend on Render:
- [Backend](https://bookmyshows-2.onrender.com/)

## Installation

To run this project locally, follow the steps below:

### For Frontend

1. Open the project in your local IDE.
2. In the terminal, navigate to the `frontend` directory and run the following commands:

```bash
cd frontend
npm install
npm start
```

This will start the frontend part of the application on `http://localhost:3000`.

### For Backend

1. Open the project in your local IDE.
2. In the terminal, navigate to the `backend` directory and run the following commands:

```bash
cd backend
npm install
npm start
```

This will start the backend part of the application on `http://localhost:8080`.

## How to Use

Click on this link to use the website: [BookMyShow](https://6690e628dc6b2ef26038f352--grand-fudge-1ae5c5.netlify.app)

1. First, select the movie you like.
2. Choose the time schedule.
3. Select the seats.
4. Click on the "Book Show" button. A confirmation pop-up window will appear. Close this and see the right side of the screen where the previous movie ticket will be displayed.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

This is a MERN stack project.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

- Note: Your MongoDB cluster connection key

```plaintext
API_KEY
```

## API Documentation

### Base URL

- [Backend Base URL](https://bookmyshows-2.onrender.com/)

### Booking Endpoints

#### Get the Booking

```http
GET /booking
```

Returns a list of the last bookings stored in the database in JSON format.

#### Create a Booking

```http
POST /booking
```

| Parameter | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| `movie`   | `string` | **Required**. Your selected movie |
| `slots`   | `string` | **Required**. Your selected time  |
| `Seats`   | `number` | **Required**. Number of seats you have selected |

Returns the newly created booking in JSON format.

## Overview

This project was designed to simulate the functionalities of a movie booking platform, much like the popular service BookMyShow. It provides users with the ability to browse movies, select showtimes, choose their seats, and book tickets seamlessly. The primary aim was to create an intuitive and responsive interface that works well on all devices, ensuring a pleasant user experience.

### Frontend

The frontend is built using React.js, which provides a dynamic and responsive user interface. The simplicity of the UI design ensures that users can easily navigate through the website without any confusion. React's component-based architecture allows for reusable components, making the codebase more maintainable and scalable.

### Backend

The backend is developed using Node.js and Express.js. Node.js provides a powerful runtime environment for executing JavaScript on the server-side, while Express.js offers a robust set of features for web and mobile applications. The backend handles all the necessary logic for processing requests, interacting with the database, and returning responses.

### Database

MongoDB is used as the database for this project. It is a NoSQL database that stores data in flexible, JSON-like documents. This allows for easy storage and retrieval of data, making it an ideal choice for applications that require a dynamic schema.

### Deployment

The frontend is deployed on Netlify, a popular platform for hosting static sites and frontend applications. Netlify offers continuous deployment from Git repositories, which simplifies the process of deploying updates. The backend is deployed on Render, a cloud platform that automatically builds and deploys applications from Git repositories. Render provides a straightforward and efficient way to deploy backend services.

### Conclusion

This project demonstrates the practical application of the MERN stack in building a functional and user-friendly movie booking platform. By leveraging the strengths of React.js, Node.js, Express.js, and MongoDB, we have created a seamless experience for users. The deployment on Netlify and Render ensures that the application is accessible and performant. This capstone project not only showcases the technical skills acquired but also highlights the ability to deliver a complete and polished product.
