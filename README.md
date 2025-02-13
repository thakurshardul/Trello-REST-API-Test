**Trello REST API Test

This project is a full-stack application designed to interact with the Trello REST API, enabling various operations on Trello boards, lists, and cards.

Prerequisites

Before setting up the project, ensure you have the following installed:

Node.js (LTS version recommended)

npm (comes with Node.js)

Git

Project Structure

The repository is structured as follows:

Trello-REST-API-Test/
├── backend/
│   ├── .env
│   ├── package.json
│   └── ...other backend files
└── frontend/
    ├── package.json
    └── ...other frontend files

Setup Instructions

1. Clone the Repository

git clone https://github.com/thakurshardul/Trello-REST-API-Test.git
cd Trello-REST-API-Test

2. Backend Setup

Navigate to the backend directory and install the necessary dependencies:

cd backend
npm install

Create a .env file in the backend directory with the following content:

TRELLO_API_KEY=your_trello_api_key
TRELLO_API_TOKEN=your_trello_api_token
TRELLO_BOARD_ID=your_trello_board_id
PORT=5000  # or any other preferred port

Replace your_trello_api_key, your_trello_api_token, and your_trello_board_id with your actual Trello credentials and board ID.

Start the backend server:

npm start

The backend server will start and listen on the specified port.

3. Frontend Setup

Open a new terminal window, navigate to the frontend directory, and install the necessary dependencies:

cd frontend
npm install

Start the frontend application:

npm start

The frontend application will start, typically on port 3000, and you can access it via http://localhost:3000.

Available Scripts

In both the backend and frontend directories, you can run:

npm start: Starts the application in production mode.

License

This project is licensed under the MIT License.


