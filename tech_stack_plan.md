# 3-Day Pre-Project Prep Plan
> Node.js + SQL + PostgreSQL + pgvector + Mini RAG — before Recall starts

---

## Rules
- No YouTube tutorials — just build and Google errors as they come
- Use Claude for debugging only, not writing code from scratch
- Postman open at all times — test every endpoint immediately
- Don't move to the next step until the current one works

---

## Day 1 — Node.js + Express + SQL + PostgreSQL

### Morning — SQL first (1 hour)
Learn just these commands. Practice in psql or TablePlus before writing any Node code.

```sql
CREATE TABLE todos (id SERIAL PRIMARY KEY, task TEXT, done BOOLEAN);
INSERT INTO todos (task, done) VALUES ('Buy milk', false);
SELECT * FROM todos;
SELECT * FROM todos WHERE done = false;
UPDATE todos SET done = true WHERE id = 1;
DELETE FROM todos WHERE id = 1;
```

### Afternoon — Build the API
- Set up Express server
- Build GET, POST, PUT, DELETE routes
- Connect with `pg` library
- Each route runs a real SQL query against the todos table

**Goal:** Working API that reads and writes to PostgreSQL using raw SQL.

---

## Day 2 — Advanced SQL + pgvector

### Morning — SQL for Recall (1 hour)
These are the exact queries you'll write in the real project.

```sql
SELECT * FROM chunks WHERE source = 'slack';
SELECT * FROM chunks ORDER BY created_at DESC LIMIT 10;
SELECT * FROM chunks WHERE content ILIKE '%supplier%';
SELECT COUNT(*) FROM chunks GROUP BY source;
```

Also understand basic JOINs between two tables.

### Afternoon — pgvector
- Install pgvector extension
- Create a table with a `vector(1536)` column
- Get OpenAI API key, generate embeddings for 10 test sentences
- Store them in PostgreSQL
- Write a cosine similarity search query
- Test: search "angry customer" → should find "client complained about delivery"

**Goal:** SQL feels natural. Vectors stored and searchable by meaning.

---

## Day 3 — Mini RAG

### Morning — Core Recall queries (30 min)
Understand every word of these two queries — they power all of Recall.

```sql
-- Store a chunk
INSERT INTO chunks (content, source, author, embedding)
VALUES ($1, $2, $3, $4);

-- Find most similar chunks
SELECT content, source, author,
  1 - (embedding <=> $1) AS similarity
FROM chunks
ORDER BY similarity DESC
LIMIT 6;
```

### Afternoon — Build mini RAG
- CSV upload endpoint — parse rows with `csv-parse`
- Chunk rows, generate embeddings, store with metadata
- Question endpoint — embed the question, retrieve top 6 similar chunks
- Send chunks + question to Claude API
- Return answer with sources

**Goal:** Upload a CSV, ask a question, get an AI answer back with sources. Full pipeline working end to end.

---

## Resources — use these only
- PostgreSQL official docs — syntax questions
- pgvector GitHub README — vector queries
- Anthropic docs — Claude API
- Nothing else

---

*Start Day 1 tomorrow morning. By Day 3 evening you'll understand every line of Recall before writing a single line of it.*

