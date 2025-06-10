# Next.js Frame

This project is a Next.js starter with Docker Compose for local development.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Development](#development)
  - [Hot Reload](#hot-reload)
  - [Working inside the running container](#working-inside-the-running-container)
  - [Permanent package installation with mounted volumes](#permanent-package-installation-with-mounted-volumes)
- [Production](#production)
- [Project Structure](#project-structure)

## Prerequisites

- Docker
- Docker Compose

## Development

To start the project locally, run the following command:

```bash
docker compose up
```

The application will then be available at http://localhost:3000.

### Hot Reload

The application supports hot reload, so any code changes will be reflected immediately.

### Working inside the running container

If you want to access the running container and install npm packages (for testing or debugging), follow these steps:

1. **Find the container name:**
   ```bash
   docker ps
   ```
   Look for the container running your Next.js app (e.g., `nextjs-frame-app-1`).

2. **Open a shell inside the container:**
   ```bash
   docker exec -it <container-name> sh
   ```
   Replace `<container-name>` with your actual container name or ID.

3. **Install npm packages:**
   Inside the container, you can run:
   ```bash
   npm install <package-name>
   ```

**Note:**
- Changes inside the container are temporary! For permanent changes, always run `npm install <package-name>` on your host machine, then rebuild the Docker image.
- Example for permanent install:
  ```bash
  npm install <package-name>
  docker compose build
  docker compose up
  ```

### Permanent package installation with mounted volumes

If your project folder is mounted into the container (which is the default with Docker Compose), any changes made inside the container (like installing npm packages) will be reflected on your host machine. This means you can add packages inside the running container and the changes will persist in your local `package.json` and `package-lock.json`.

**Example:**
```bash
docker exec -it <container-name> sh
npm install <package-name>
exit
```
After this, you will see the changes also on your host. You can then rebuild your image if needed:
```bash
docker compose build
docker compose up
```

## Production

To create a production build, use:

```bash
docker build -t nextjs-app .
docker run -p 3000:3000 nextjs-app
```

## Project Structure

- `app/` - Next.js App Router files
- `public/` - Static files
- `Dockerfile` - Production Docker configuration
- `Dockerfile.dev` - Development Docker configuration
- `docker-compose.yml` - Docker Compose configuration
