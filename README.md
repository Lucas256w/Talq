# Talq
Live : https://talq.netlify.app/

API: https://github.com/Lucas256w/Talq-Backend

<h1>Desktop</h1>
<img width="500" alt="image" src="https://github.com/Lucas256w/Talq/assets/112456075/e3819630-0168-4c9a-8ce8-c3223a315b3e">
<img width="500" alt="image" src="https://github.com/Lucas256w/Talq/assets/112456075/f0b4c989-ce87-4024-850f-f18240da3aa2">

<h1>Mobile</h1>
<img width="200" alt="image" src="https://github.com/Lucas256w/Talq/assets/112456075/376d1e8d-fb68-4c83-825c-13af31063c3a">
<img width="200" alt="image" src="https://github.com/Lucas256w/Talq/assets/112456075/3e006858-455f-4b8d-893b-2357fbd99b66">
<img width="200" alt="image" src="https://github.com/Lucas256w/Talq/assets/112456075/35fb7677-b6eb-42b9-86c5-6a27108acb90">


# About
Talq is a messaging app where users can come and create private or group messaging rooms and start chatting with friends.

I created this project mainly to practice fullstack development using the complete MERN stack.

## Features

- Account creation with username, email, password, and optional profile image.
- Account edit username, email, password, and profile image.
- Users can view friends, add friends, and remove friends.
- Users can send, receive, deny or accept incoming, and cancel outgoing friend requests.
- Users can create private or group message rooms by inviting their friends.
- Users can edit group message room name, leave group message room, and invite additional users to the group message room.
- Users can send messages specific to messagae rooms.
- Message displayed in messgae rooms displays the sender's username and profile image, along with when the message was sent.

## Technology Features
### Frontend
- Made use of hooks such as useState, useEffect, useContext, and useRef.
- Type checking with PropTypes.
- React router to navigate through pages.
- Async and await to fetch data.
- Polling for live updates.

### Backend
- JWT for authorization.
- Model-view-controller (MVC) architecture design pattern to organize logic.
- Validator to validate requests.
- Bcrypt to secure password.
- Cloudinary to store images.

## Run It Locally

### Prerequisites

- You'll need to install the Backend API repository to work with the frontend, vice versa.

### Cloning the repository

Make a appropriate directory and cd to it using the terminal

```bash
# Clone this repository
$ git clone git@github.com:Lucas256w/Talq.git

# Go into the repository
$ cd Talq
```

### Install dependencies

```bash
# Install dependencies
$ npm install
```

### Setting up environment variables

- Make a file at the root directory called `.env`.
- Populate `.env` located in server with the following environment variables:
  - `VITE_MODE`: Set to prod or dev to change the server it will connect to
  - `VITE_PROD_API`: The API that it will connect to if VITE_MODE is set to prod
  - `VITE_DEV_API`: The API that it will connect to if VITE_MODE is set to dev


### Starting the application

From root directory run the following commands:

```bash
# Start the server
$ npm run dev

```

## Technologies Used
- [React](https://react.dev/)
- [Nodejs](https://nodejs.org/)
- [Expressjs](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoosejs](https://mongoosejs.com/)
- [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)

