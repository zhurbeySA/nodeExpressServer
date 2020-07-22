Backend application on Node.js and express.

## Run project
1. Install project dependencies:
  ```npm install```

2. Project use nodemone, to run project in development mode install nodemone first with command:
  ```npm install nodemone -g```

3. To run project with nodemone run command:
  ```npm run dev```// It will run project with babel and nodemon

4. To build project for production you need to run command ```npm run build```, and to build and run project in production run command ```npm run serve```

**Routes in src/routes contain routes for static files. Those are usually others static projects and included only on the remote server. Locally these routes will just return an error**

All data for connecting to databases is entered from environment vairables stored in file .env in root of project. Obviously, this file isn't included in repository

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
└───types        &nbsp;&nbsp;&nbsp;&nbsp;  # Type declaration files (d.ts) for Typescript\
└───routes       &nbsp;&nbsp;&nbsp;&nbsp;  # Routes for pages

## API routes

```zhurbeysa.xyz/api/statistics/check``` // Check that connection to database is ok\
```zhurbeysa.xyz/api/statistics/[day/month/year]/[KPI_Name]?dateFrom='YYYY-MM-DD'&dateTo'YYYY-MM-DD'``` // Get KPI in scale of days/months/years.

If there's no such KPI or query parametres are incorrect you'll get response with status 500, bad request.\
This routes doesn't work now


## Statis pages routes

```zhurbeysa.xyz/onpointProject``` // onpoint junior front-end developer project\
```zhurbeysa.xyz/Fifteen``` // course work for programming technologies subject

