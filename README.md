# RAG Playground

A mini RAG (Retrieval-Augmented Generation) pipeline built with Node.js, PostgreSQL, pgvector, and OpenAI. Built as prep for the Recall project.

## What it does
- Stores text chunks with vector embeddings in PostgreSQL
- Searches chunks by semantic similarity using pgvector
- Answers questions using the most relevant chunks via GPT-4o-mini
- Uploads CSV files and embeds each row into the vector store

## Stack
- Node.js + Express
- PostgreSQL + pgvector
- OpenAI (text-embedding-3-small + gpt-4o-mini)

## Endpoints
- `POST /api/v1/rag/embed` — store a chunk with its embedding
- `POST /api/v1/rag/search` — ask a question, get an AI answer with sources
- `POST /api/v1/rag/csv-upload` — upload a CSV and store each row as an embedded chunk
- `GET /api/v1/todos` — todo test endpoints

Full API documentation: [`docs/API.md`](docs/API.md)

## Setup
1. Clone the repo
2. Run `npm install`
3. Add your OpenAI key to `.env`
4. Make sure PostgreSQL is running with pgvector extension
5. Run `npm run dev`
