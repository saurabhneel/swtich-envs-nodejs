# swtich-envs-nodejs

This project demonstrates how to switch between different environment configurations in a Node.js Express project using dotenv.

# Project Description
This project illustrates the concept environment-based configurations, which can be switched between development (.env.dev) and staging (.env.stage) environments.

# Prerequisites
Node.js
npm (Node Package Manager)
Installation

# Clone the repository:
Copy code
git clone [https://github.com/yourusername/blocking_non_blocking.git](https://github.com/saurabhneel/swtich-envs-nodejs.git)

# Install the dependencies:
npm install
Environment Configuration
This project uses dotenv to manage environment variables. Depending on the value of NODE_ENV, it loads the corresponding .env file.

# Development environment: .env.dev
# Staging environment: .env.stage
Create these files in the env folder within the root directory with the necessary environment variables.

Example of .env.dev
PORT=3000

Example of .env.stage
PORT=4000

# Usage
To run the project with a specific environment configuration, set the NODE_ENV variable before starting the application.

# Running in Development Environment
$env:NODE_ENV="dev"
npm start

# Running in Staging Environment
$env:NODE_ENV="stage"
npm start

# Testing
# http://localhost:3000/port (for .env.dev)
# http://localhost:3000/port (for .env.stage)

# File Structure
.
├── env
│   ├── .env.dev
│   └── .env.stage
├── src
│   ├── index.js
├── env.js
├── package.json
├── package-lock.json
└── README.md
