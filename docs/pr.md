# Pull Request: env edit, db connection edit, tsconfig edit, app.ts and www.ts edit 

## Description  
This PR includes changes to configuration files, MongoDB connection logic, TypeScript settings, and server setup.  

## Changes  

### 1. Configuration Files  
Updated files for different environments:  
- core/config/development.ts  
- core/config/production.ts  
- core/config/test.ts  

Why?  
This allows for separate configurations for development, production, and testing environments, ensuring flexibility during deployment.  

### 2. MongoDB Connection  
Modified the connection logic in:  
- infrastructure/database/connection.ts  

What changed?  
- Environment-specific configurations are now considered when connecting to the database.  

### 3. TypeScript Configurations  
Added commands to tsconfig.json:  
`json
"declaration": true,
"allowJs": true,
"checkJs": false

Purpose:

"declaration": true — Generates .d.ts files for better TypeScript support.

### removed
"allowJs": true — Allows JavaScript files to be used in the project.
### removed
"checkJs": false — Disables type checking in JavaScript files if they are included.


4. Server

Added ruru to app.ts to display a test page in the browser.

Why?

Simplifies API testing by visually displaying server responses.


5. Server Startup Logic

Modified file:

www.ts


What changed?

Improved server startup logic for better stability.


6. Installed tsconfig-paths

Added the following command:

npm install tsconfig-paths --save-dev

Why?

Ensures that nodemon correctly resolves path aliases defined in tsconfig.json.


How to Test?

1. Ensure dependencies are installed (npm install).


2. Start the server (npm run dev).


3. Verify MongoDB connection in different environments (development, production, test).


4. Open the test development page in the browser (localhost:3333).


