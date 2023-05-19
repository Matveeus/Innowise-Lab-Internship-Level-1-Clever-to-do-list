# Innowise-Lab-Internship-Level-1-Clever-to-do-list

Task manager, which allows you to schedule tasks by days, was the focus of the second lab during my internship at *Innowise*.
This document outlines the requirements for the project, including instructions for running the app, a database snapshot, the application stack, and a brief overview of the folder structure.

## Task 
**Link:** https://drive.google.com/file/d/18I1PxOxZn2lwm__YeOtMNoWeiXygKwwN/view

## How to Run the App
To install the necessary modules and run the application, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies by running the command **npm install** in your terminal.
3. Start the development server with **npm start**.

## Theme
There is the possibility to change the theme of application inside the code.
To do that:
1. Go to **src/index.js** file
2. Change last _import_ form **'./theme'** from "lightTheme" to "darkTheme"
3. Change theme in **ThemeProvider** form "lightTheme" to "darkTheme"

## Database Snapshot
The app uses Firebase (realtime database) as its database. Here is a snapshot of how entities are organized:

{ "users": {

"PRnJwKuPy8XKVNigF1RKIbo3czF3": {

"tasks": {

"1172161e0c8": {

"checked": true,

"date": "2023-05-02",

"description": "Write instructions for running the app, a database snapshot, the application stack, and a brief overview of the folder structure",

"text": "Write readme.md for the task",

"uidd": "1172161e0c8"
}
}
}
}
}

In this example, "PRnJwKuPy8XKVNigF1RKIbo3czF3" is the user ID, and "1172161e0c8" is the ID of the task. The "checked" field indicates whether the task has been completed or not, and the "text" field contains the name of the task. The "description" field contains a description of the task, and the "date" field indicates the date the task was created. The "uidd" field contains the ID of the task, which is the same as the key under which it is stored in the Firebase database.
## Application Stack
The following technologies and libraries were used in the development of this application:

### Dependencies:
1. React
2. Firebase
3. Material-UI
4. React Router
5. Emotion
6. dayjs
7. React Firebase Hooks
8. uid

### Dev dependencies:

1. React Scripts
2. ESLint
3. eslint-config-airbnb
4. husky
5. lint-staged

## Folder Structure

**build/:** Contains an optimized production build.

**public/:** Contains the index.html file.

**src/:** Contains the source code for the application.

**src/components/:** Contains React components used throughout the app.

**src/context/:** Contains file(s) with context used in React components.

**src/hooks/:** Contains file(s) with custom hooks (getTasks hook inside gets all tasks from the database).

**src/pages/:** Contains pages using in the app.

**src/services/:** Contains firebase configuration file.

