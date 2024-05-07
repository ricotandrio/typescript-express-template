# Typescript Express Template

<!-- readme header  -->
<div align="center">
  <p align="left">
    <a href=""><strong>Postman API Documentation</strong></a>
  </p>
</div>

<!-- table of contents  -->
## Table of Contents

<ol>
  <li>
    <a href="#about-the-project">About The Project</a>
  </li>
  <li>
    <a href="#folder-tree">Folder Tree</a>
  </li>
  <li>
    <a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation">Installation</a></li>
    </ul>
  </li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#roadmap">Roadmap</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#dependencies">Dependencies</a></li>
</ol>

## About The Project

This template offers a streamlined setup for building React applications with TypeScript, Redux state management, Zod for data validation, and Vite for fast development with Hot Module Replacement (HMR). It includes essential ESLint rules for maintaining code quality and consistency. 

## Folder Tree
```
template
├───docs
├───prisma
├───public
├───src
│   ├───app
│   ├───controllers
│   ├───middlewares
│   ├───models
│   │   ├───database
│   │   ├───requests
│   │   └───responses
│   ├───routes
│   └───utils
│       ├───error
│       └───validation
└───test
```

## Getting Started

### Prerequisites
MySQL, Node.js, and Git

### Installation
To begin, clone this repository to your local machine.

```bash
git clone https://github.com/ricotandrio/typescript-express-template.git

cd typescript-express-template
```

Use npm to install the necessary modules.

```bash
npm install
```

Update .gitignore by uncommand dotenv environment variable files ignore.

```env
# dotenv environment variable files
# .env
# .env.development.local
# .env.test.local
# .env.production.local
# .env.local
```

Then, execute the following command:

```bash
npx prisma migrate dev

npx prisma generate

npm run build

npm run start
```

## Usage
In this section, explain the utility of the project and provide screenshots of the app.

## Roadmap
- ✅ Feature one.
- ✅ Feature two.
- ✅ Feature three.
  - ❌ Sub-feature three.

## License 
This project is under the UNILICENSE. See LICENSE.txt for more information.

## Dependencies
Below is a list of packages or libraries used for this project:

