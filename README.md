# Customer Management Web Application
### Overview
#### This repository contains the source code for a Customer Management web application built using Spring Boot, ReactJS, and MariaDB. The application provides a robust solution for managing customer data efficiently.

### Features
#### Customer CRUD Operations: Create, Read, Update, and Delete customer records.
#### Frontend view of customer including NIC images
#### View customer in table view
#### Responsive UI: A user-friendly and responsive interface designed with ReactJS for optimal user experience.

### Tech Stack
#### Backend: Spring Boot with Java , Maven for robust and scalable server-side development.
#### Frontend: ReactJS , HTML , CSS for a dynamic and interactive user interface.
#### Database: MariaDB for efficient and reliable data storage.

### Getting Started
#### Prerequisites
##### Java Development Kit (JDK 8)
##### Node.js and npm (v18.11.0)
##### MariaDB (Latest V)
##### Intellij idea (Latest V)

# Setup Instructions
## Clone the Repository:
bash
### Copy code - 
git clone https://github.com/SithumGamage98/Customer-Management-System.git

## Backend Setup:

### 1.Open the backend directory.(/backend)
### 2.Configure the database connection in application.properties.(/backend/resources/application.properties)
### 3.Change the port number , database name , database password (Only if you want)
### 4.Run the Spring Boot application

bash
Copy code
./mvnw spring-boot:run
Frontend Setup:

Open the frontend directory.
Install dependencies:
bash
Copy code
npm install
Start the React development server:
bash
Copy code
npm start
Access the Application:

Open your browser and navigate to http://localhost:3000 to use the application.
