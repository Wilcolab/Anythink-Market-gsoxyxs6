# Anythink Market — Task API

This project exposes a task-list API. The routes have been migrated from a Python/FastAPI implementation to a Node.js/Express server. Both services are still available and run in parallel via Docker Compose while the migration is in progress; they implement identical route behavior.

## Project Structure

- `js-server/src/index.js`: Express server. Implements all API routes. Listens on port `8001`. Uses `nodemon` via `yarn start` for automatic code reloading during development.
- `js-server/package.json`: Node.js dependencies and scripts.
- `js-server/Dockerfile`: Builds and runs the Node.js server image.

- `python-server/src/main.py`: Original FastAPI implementation. Still running on port `8000` during the transition period.
- `python-server/requirements.txt`: Python dependencies.
- `python-server/Dockerfile`: Builds and runs the Python server image.

- `docker-compose.yml`: Defines and runs both services together.

## Getting Started

Build and start both servers:

```shell
docker compose up --build
```

Or run the Node.js server locally without Docker:

```shell
cd js-server && yarn install && yarn start
```

## API Routes

Both servers implement the same routes. Going forward, the Node.js server (`port 8001`) is the primary target.

### `GET /`

Returns a greeting string.

**Response**
```json
"Hello World"
```

---

### `GET /tasks`

Returns the full task list.

**Response**
```json
{
  "tasks": ["Write a diary entry from the future", "..."]
}
```

---

### `POST /tasks`

Adds a new task to the list.

**Request body**
```json
{ "text": "Your task description" }
```

**Response**
```json
{ "message": "Task added successfully" }
```

## Migration Notes

The routes were originally implemented in Python using FastAPI (`python-server/`). They have been ported to Node.js/Express (`js-server/`) with identical request/response behavior:

| Route | Python (port 8000) | Node.js (port 8001) |
|---|---|---|
| `GET /` | ✅ | ✅ |
| `GET /tasks` | ✅ | ✅ |
| `POST /tasks` | ✅ | ✅ |
