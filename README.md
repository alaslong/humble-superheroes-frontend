# Humble Superheroes Frontend

This is a frontend React app as part of the Humble Superheroes assignment for my application to eJam for the role of Fullstack Node.js Engineer.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [If I Had More Time](#if-i-had-more-time)

## Features
- Fetch superheroes from the backend API.
- Add new superheroes with name, superpower, and humility score.
- Display superheroes in a table format.
- Uses React Query for data fetching and caching.
- Styled with Tailwind CSS.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/humble-superheroes-frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd humble-superheroes-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```




## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repo/humble-superheroes-frontend.git
   cd humble-superheroes-backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the [backend server](https://github.com/alaslong/humble-superheroes-backend)**

3. **Start the frontend development server:**

   ```bash
   npm run dev
   ```


## Usage

Open your browser and go to `http://localhost:5173` (default Vite port). This will allow you to interact with the running backend server by listing existing superheroes and add new ones.

## Technologies Used

- **React.js**: Frontend Javascript framework.
- **TypeScript**: Typed superset of JavaScript.
- **React Query**: Fetching, caching, and mutating data.
- **Axios**: HTTP requests.
- **Tailwind**: CSS styling.

## If I Had More Time

Things I'd like to do:

- **Improve styling**: I'd like to design a nicer looking frontend. The current styling is rudimentary as my goal for the frontend was to have an MVP that interacts with the backend APIs.
- **Hooks**: Ideally, I would move the React Query hooks into a separate directory so they are uncoupled from their current components.
- **Edit/Delete functionality**: This would require the functionality to be built in the backend first.