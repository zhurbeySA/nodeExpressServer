Backend application on Node.js and express.

## Run project
1. Install project dependencies:
  npm install

2. Project use nodemone, to run project in development mode install nodemone first with command:
  npm install nodemone -g

3. To run project with nodemone run command:
  npm run dev // It will run project with babel and nodemon

4. To build project for production you need to run command 'npm run build', and to build and run project in production run command 'npm run serve'



## Project structure:

src\
│   app.js       &nbsp;&nbsp;&nbsp;&nbsp;  # App entry point\
└───api          &nbsp;&nbsp;&nbsp;&nbsp;  # Express route controllers for all the endpoints of the app\
└───config       &nbsp;&nbsp;&nbsp;&nbsp;  # Environment variables and configuration related stuff\
└───jobs         &nbsp;&nbsp;&nbsp;&nbsp;  # Jobs definitions for agenda.js\
└───loaders      &nbsp;&nbsp;&nbsp;&nbsp;  # Split the startup process into modules\
└───models       &nbsp;&nbsp;&nbsp;&nbsp;  # Database models\
└───services     &nbsp;&nbsp;&nbsp;&nbsp;  # All the business logic is here\
└───subscribers  &nbsp;&nbsp;&nbsp;&nbsp;  # Event handlers for async task\
└───types        &nbsp;&nbsp;&nbsp;&nbsp;  # Type declaration files (d.ts) for Typescript
