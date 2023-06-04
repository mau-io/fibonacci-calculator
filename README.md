# Fibonacci Calculator

This project includes an API that calculates Fibonacci numbers and a React frontend to interact with the API.

## Prerequisites

- Node.js >= 16.0.0
- npm >= 6.0.0

## Installation

### Backend

1. Clone the repository:

```bash
git clone https://github.com/mau-io/fibonacci-calculator.git
cd fibonacci-calculator
```

2. Install the backend dependencies:

```bash
cd backend
npm install
```

### Frontend

3. Install the frontend dependencies:

```bash
cd ../frontend
npm install
```

## Usage

### Backend

Start the server:

```bash
cd ../backend
npm start
```

The server will start running at http://localhost:3002.

You can access the Fibonacci endpoint at http://localhost:3002/api/fibonacci/:n, where :n is the Fibonacci number you want to calculate.

For example, to calculate the 6th Fibonacci number, you would access http://localhost:3002/api/fibonacci/6.

### Frontend

Start the React app:

```bash
cd ../frontend
npm start
```

The React app will start running at http://localhost:3000.

## Testing

To run the backend tests, use the following command:

```bash
cd ../backend
npm test
```

This will run unit and integration tests.
