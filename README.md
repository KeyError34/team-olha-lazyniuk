# Project Name: Hyrance

## Description
Hyrance is a demo project consisting of a frontend, backend, and MongoDB database, all packaged and deployed using Docker containers. This guide will walk you through setting up and using the Hyrance project for your development or testing purposes.

## Prerequisites
- Docker installed on your system ([Install Docker](https://docs.docker.com/get-docker/))

## Usage

### 1. Clone the Repository

git clone https://github.com/saeedhei/hyrance.git
- cd Hyrance

### 2. Start Docker Containers
docker-compose up


### 3. Accessing the Services
- **Frontend**: Access the frontend application by navigating to [http://localhost:8080](http://localhost:8080) in your web browser.
- **Backend**: The backend API endpoints are accessible at [http://localhost:5000](http://localhost:5000).
- **MongoDB**: MongoDB is running on port 27017, accessible at `localhost`.

### 4. Interacting with the Application
- Use the provided frontend interface to interact with the application.
- The backend API endpoints can be accessed directly or via the frontend application.

### 5. Stopping the Containers
To stop the running containers, use `Ctrl + C` in the terminal where Docker Compose is running.

## Directory Structure

```bash
Hyrance/
├── backend/                  # Backend application files
│   ├── Dockerfile            # Dockerfile for backend
│   └── ...                   
├── frontend/                 # Frontend application files
│   ├── Dockerfile            # Dockerfile for frontend
│   └── ...                   
├── mongodb/                  # MongoDB initialization script
│   └── init-mongo.js         # MongoDB initialization script
├── docker-compose.yml        # Docker Compose configuration file
└── README.md                 # Project documentation
```

## Customize Configuration (Optional)
- You can customize the Docker Compose configuration according to your needs by modifying the `docker-compose.yml` file.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any improvements or bug fixes.

## License
This project is licensed under the [MIT License](LICENSE).

