# ASP.NET Core App with React Kanban Board

This is an ASP.NET Core application that includes a Kanban board implemented in React. The app also provides a Swagger board for API endpoint documentation and utilizes a SQL database using Entity Framework 6.

## Features

- Kanban Board: The application includes a Kanban board implemented in React. Users can create, edit, and track tasks using a user-friendly drag-and-drop interface.
- Swagger Documentation: The app offers a Swagger board for API endpoint documentation. It provides an interactive interface to explore and test the available routes and parameters.
- SQL Database with Entity Framework 6: The application uses Entity Framework 6 to interact with a SQL database for data storage and retrieval.

## Prerequisites

Before running this application, ensure that you have the following prerequisites installed:

- [.NET Core SDK](https://dotnet.microsoft.com/download) (version 3.1 or higher)
- [Node.js](https://nodejs.org/en/) (version 12 or higher)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

## Getting Started

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the project's root directory.
3. Restore the required NuGet packages by running the following command:

   ```bash
   dotnet restore
   ```

4. Restore the required NPM packages by running the following command:

   ```bash
   npm install
   ```

5. Set up the database:
   - Update the connection string in the `appsettings.json` file to point to your SQL Server instance.
   - Apply the database migrations by running the following command:

     ```bash
     dotnet ef database update
     ```

6. Build the application by running the following command:

   ```bash
   dotnet build
   ```

7. Start the application by running the following command:

   ```bash
   dotnet run
   ```

8. Open your web browser and navigate to `https://localhost:5001` to access the application.

## API Documentation (Swagger)

The API endpoints of the application are documented using Swagger. To access the Swagger documentation, follow these steps:

1. Start the application by running the following command:

   ```bash
   dotnet run
   ```

2. Open your web browser and navigate to `https://localhost:5001/swagger` to access the Swagger documentation.

## Technologies Used

- ASP.NET Core: A cross-platform, high-performance framework for building web applications.
- React: A JavaScript library for building user interfaces.
- Entity Framework 6: An object-relational mapper (ORM) for .NET that simplifies database interactions.
- SQL Server: A relational database management system (RDBMS) provided by Microsoft.
- Swagger: A tool for documenting and testing RESTful APIs.

## License

This project is licensed under the Creative Commons Zero v1.0 Universal License.
