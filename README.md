# Node.js Weather Application
This application is a simple Node.js project that uses Express to serve weather data from an external API. It is containerized using Docker for easy setup and deployment.

## Requirements
- Docker
- Docker Compose
- An API key from a weather data provider (OpenWeatherMap)

## Setup

### 1. Clone the Repository
First, clone the repository to your local machine using Git.

```bash
git clone weather-application
cd weather-application
```

### 2. Environment Setup
Copy the `.env.example` file to a new file named `.env`.

```bash
cp .env.example .env
```
Open the `.env` file and set the port and your OpenWeatherMap API key.

### 3. Build and Run with Docker
Use Docker Compose to build and run the application.

```bash
docker-compose build
docker-compose up
```
This will start the application and make it accessible on the port specified in your `env` file (default is 3000).

### 4. Stopping the Application
To stop the application, you can use the following Docker Compose command:

```bash
docker-compose down
```

## Usage
Once the application is running, you can access it via `http://localhost:[APP_PORT]` in your browser.

- To check if the application is running, visit `http://localhost:[APP_PORT]/`
- To fetch weather data, use the /weather route with a city query parameter, like so: `http://localhost:[APP_PORT]/weather?city=Leipzig`
