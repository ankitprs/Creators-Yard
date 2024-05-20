# Creators Yard: Your Secure YouTube Channel Management Platform

Welcome to Creators Yard, a powerful platform designed exclusively for YouTube Creators to manage their channels securely. This platform serves as a mediator between editors and YouTube, offering creators full control over their content to ensure the safety and security of their channels.

![img](./frontend/src/assets/creactors_yard.png)

## Live Link
  Explore the live version of Creators Yard here. [Link](https://creatoryards.com)

## Features
 - Editor Collaboration: Creators can add editors to their channel on Creators Yard, allowing them to upload edited videos to the platform.

 - Approval Workflow: Creators have the authority to approve or disapprove the uploaded videos. Approved videos are automatically published to YouTube, while disapproved ones are removed from the platform.

 - Secure Environment: Creators Yard acts as a secure intermediary, protecting YouTube creators from potential hacks or security threats.

## Tech Stack
 - Frontend: React.js (Deployed on Vercel)
 - Backend: Express.js (Deployed on Google Cloud Run / Render)
 - Authentication: Firebase Auth
 - Storage: Firebase Storage
 - Database: MongoDB

 ## How to Contribute
We welcome contributions from the community to make Creators Yard even better. If you'd like to contribute, follow these steps:

 1. Fork the repository.
 2. Clone the forked repository to your local machine.
 3. Install dependencies by running npm install in both the frontend and backend directories.
 4. Make your changes and improvements.
 5. Test your changes locally to ensure they work as expected.
 6. ommit your changes and push them to your fork.
 7. Submit a pull request to the main repository.


 ## Local Setup
To set up Creators Yard locally, follow these steps:

 ### Frontend
Navigate to the frontend directory.
Run `npm install` to install dependencies.
Create a `.env` file in the frontend directory and add the necessary environment variables.
Run `npm start` to start the development server.

 ### Backend
Navigate to the backend directory.
Run `npm install` to install dependencies.
Create a `.env` file in the backend directory and add the necessary environment variables.
Run `npm start` to start the backend server.

 ### Environment Variables
Ensure that the following environment variables are set:

Frontend (.env file in the frontend directory)
```
VITE_APP_FIREBASE_API_KEY
VITE_APP_FIREBASE_AUTH_DOMAIN
VITE_APP_FIREBASE_PROJECT_ID
VITE_APP_BACKEND_URL (URL where the backend is hosted)
```


Backend (.env file in the backend directory)

```
PORT
MONGODB_URI
FIREBASE_PROJECT_ID
FIREBASE_PRIVATE_KEY
FIREBASE_CLIENT_EMAIL
```

Now you're all set up to run Creators Yard locally!

