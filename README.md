<h1 align="center">TrackingDubs Backend API</h1>

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
</p>

## Description

**`TrackingDubs Backend API`** provides an in-depth view of betting history, allowing bettors to gain insights into their past bets, strategies, and profitability. Built with Nest.js, Prisma, and PostgreSQL, it offers features such as secure authentication and CRUD operations for managing user and bet data.

## Key Features

- **User Authentication**: JWT-based user registration and login.
- **Bet Management**: CRUD operations for tracking bet data.
- **Performance Insights**: Analyze trends and betting strategies.
- **API Documentation**: Easily explore the API using Swagger.

## Technologies Used

- **Nest.js**: A Node.js framework for scalable applications.
- **Prisma**: ORM for database interactions.
- **Postgres**: Robust relational database.
- **JWT**: Secure user authentication and authorization.

## Getting Started

### 1. Clone the repository
### 2. Install dependencies
```bash
npm install
```
### 3. Update the .env file
See the `.env.template` file for more information

### 4. Start the DB container
Docker desktop must be open
```bash
docker compose up -d
```
### 5. Create DB tables
```bash
npx prisma migrate dev --name "Initial Schema"
```
### 6. Fill DB tables
Two users will be created. The first one as admin `p1@correo.com` and the second one as user `p2@correo.com`, same password for both `123456`.
```bash
npm run seed
```

### 7. Run the development server:

```bash
npm run dev
```

## Documentation

### Swagger

The API documentation is generated using Swagger, providing a user-friendly interface to explore and test API endpoints. It covers all the available routes, parameters, and response formats, making integration straightforward. Access the Swagger documentation locally at <a href="http://localhost:3000/api" >http://localhost:3000/api</a>.

### Postman

Comprehensive Postman documentation is available for the **TrackingDubs API**. This collection includes all endpoints with sample requests and responses for easy testing and validation. Ensure you have Postman installed to use this collection effectively.

## Contribution

Contributions are welcome! Fork the repository, suggest improvements, and submit pull requests to enhance the functionality or add new features.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Support

For issues or questions, please open an issue on GitHub.
