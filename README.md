# Next.js Frame

This project is a Next.js starter with Docker Compose for local development.

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
