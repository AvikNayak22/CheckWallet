# CheckWallet

CheckWallet is a user-friendly web application that empowers you to effectively manage your income and expenses.  Categorize transactions, analyze spending patterns, and make informed financial decisions – all within a secure and intuitive platform. CheckWallet simplifies personal finance management, allowing you to achieve your financial goals with greater clarity and confidence.

![mediamodifier_image](https://github.com/AvikNayak22/CheckWallet/assets/110925067/26592534-b0c9-4d65-872c-e03cbf86287f)



## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Features

- User authentication and authorization
- Add, edit, and delete transactions
- View transaction history with filtering options
- Analytics dashboard for income and expense insights

## Demo
See the Demo: [Demo Link](https://youtu.be/SIKJAYgpeT4)

## Technologies Used
- **Frontend:**
  - [React](https://reactjs.org/): A JavaScript library for building user interfaces.
  - [Ant Design](https://ant.design/): A React UI library with a set of high-quality components.
  - [Ant Design Icons](https://ant.design/components/icon/): A set of beautifully designed icons for Ant Design.
  - [Bootstrap](https://getbootstrap.com/): A popular CSS framework for building responsive and visually appealing web pages.
  - [Axios](https://axios-http.com/): A promise-based HTTP client for making requests to the server.

- **Backend:**
  - [Node.js](https://nodejs.org/): A JavaScript runtime built on Chrome's V8 JavaScript engine.
  - [Express](https://expressjs.com/): A fast, unopinionated, minimalist web framework for Node.js.
  - [MongoDB](https://www.mongodb.com/): A NoSQL database for storing application data.

- **Deployment:**
  - [Cyclic](https://cyclic.sh/): A cloud platform for continuous deployment and hosting.

## Installation

1. Clone the repository:
   
   ```
    git clone https://github.com/AvikNayak22/CheckWallet.git
   ```
2. Change into the project directory: 
   ```
   cd CheckWallet
   ```
3. Install dependencies for both the client and server:
   ```
   cd client
   npm install
   ```
   ```
   cd ../server
   npm install
   ```
4. Create a `.env` file in the `server` directory with the following content:
   ```
   MONGO_URL=your-mongodb-connection-string
   PORT=your-server-port-number
   ```
5. Start the development servers:
   ```
   npm run dev
   ```

## Usage
- Register or log in to your account.
- Add transactions by providing the necessary details.
- View your transaction history and filter by date and type.
- Access the analytics dashboard to gain insights into your income and expenses.

## Author
- AvikNayak22


