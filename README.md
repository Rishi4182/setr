# Fibonacci App

This is a React application that allows users to generate Fibonacci numbers and includes user registration and login functionality.

## Features

- User Registration: Users can create an account to access the Fibonacci generator.
- User Login: Registered users can log in to the application.
- Fibonacci Generator: Users can input a number to generate and display the Fibonacci sequence up to that number.

## Project Structure

```
fibonacci-app
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── components
│   │   ├── Fibonacci.tsx   # Component for generating Fibonacci numbers
│   │   ├── Login.tsx       # Component for user login
│   │   └── Register.tsx    # Component for user registration
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point of the React application
│   └── types
│       └── index.ts        # TypeScript interfaces
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/fibonacci-app.git
   ```
2. Navigate to the project directory:
   ```
   cd fibonacci-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.