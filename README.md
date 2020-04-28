# Medline-frontend

## Start app
- install dependencies: **npm install**
- development: **npm run start:dev**
- production: **npm run start**

## GraphQL queries
You can see full documentation in backend graphql playground
1. clone https://github.com/ComeTiss/medline-backend
2. Install dependencies: **npm install**
3. Follow the **Initial Setup** instructions in medline-backend **README**.
4. Visit: http://localhost:4000/graphql
5. Set http headers with jwt token (view bottom of playground).
 - Run medline-backend and medline-frontend with **npm run start:dev**
 - Log in with the test user account (email: user_test@gmail.com, password: password).
 - In DevTools, open the **Application** tab and locate the "http://localhost:3000" cookie (in the Storage panel) and select it.
 - Copy the value of **access_token**.
 - At http://localhost:4000/graphql, create http headers of **"authorization": "Bearer <access_token value>"**
 
 --> View "docs" & "schemas" for API documentation
6. In development, a verified user will be automatically created for you when you start the server.
