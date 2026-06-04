# API Documentation

Base URL:

```txt
http://localhost:8000
```

All JSON endpoints expect:

```txt
Content-Type: application/json
```

## Health

### `GET /`

Returns a basic welcome response.

## RAG

### `POST /api/v1/rag/embed`

Stores one text chunk with an OpenAI embedding.

Request body:

```json
{
  "content": "Supplier confirmed new delivery schedule",
  "source": "slack",
  "author": "john"
}
```

Success response:

```json
{
  "status": "Success",
  "message": "Succefully added chunk to database",
  "data": {
    "id": 1
  }
}
```

### `POST /api/v1/rag/search`

Embeds a question, searches for relevant chunks with pgvector, and asks OpenAI to answer using those chunks.

Request body:

```json
{
  "question": "What did the supplier say?"
}
```

Success response:

```json
{
  "status": "Success",
  "message": "Successfully Answered Question",
  "data": {
    "answer": "The supplier confirmed a new delivery schedule.",
    "relevantChuncks": []
  }
}
```

### `POST /api/v1/rag/csv-upload`

Uploads a CSV file and stores each row as an embedded chunk.

Request format:

```txt
multipart/form-data
```

Required file field:

```txt
file
```

CSV columns:

```csv
content,source,author
Supplier confirmed new delivery schedule,slack,john
Team meeting notes from Monday standup,notion,lisa
```

HTTPie example:

```bash
http -f POST :8000/api/v1/rag/csv-upload file@/path/to/chunks.csv
```

Success response:

```json
{
  "status": "Success",
  "message": "2 chunks embedded and stored from chunks.csv"
}
```

Common errors:

```json
{
  "status": "error",
  "message": "CSV upload must include a file field named file"
}
```

```json
{
  "status": "error",
  "message": "Unexpected field"
}
```

Use the field name `file`. Do not manually set the `Content-Type` header for multipart uploads; let your client set the boundary.

## Todos

These endpoints are test CRUD routes.

### `GET /api/v1/todos`

Returns all todos.

### `GET /api/v1/todos/:id`

Returns one todo by id.

### `POST /api/v1/todos`

Creates a todo.

Request body:

```json
{
  "task": "Learn pgvector"
}
```

### `PATCH /api/v1/todos/:id`

Updates a todo.

### `DELETE /api/v1/todos/:id`

Deletes a todo.

## Error Format

Errors return this shape:

```json
{
  "status": "error",
  "message": "Error message"
}
```
