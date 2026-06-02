# RAG Playground

A mini RAG (Retrieval-Augmented Generation) pipeline built with Node.js, PostgreSQL, pgvector, and OpenAI. Built as prep for the Recall project.

## What it does
- Stores text chunks with vector embeddings in PostgreSQL
- Searches chunks by semantic similarity using pgvector
- Answers questions using the most relevant chunks via GPT-4o-mini

## Stack
- Node.js + Express
- PostgreSQL + pgvector
- OpenAI (text-embedding-3-small + gpt-4o-mini)

## Endpoints
- `POST /embed` — store a chunk with its embedding
- `POST /search` — ask a question, get an AI answer with sources

## Setup
1. Clone the repo
2. Run `npm install`
3. Add your OpenAI key to `.env`
4. Make sure PostgreSQL is running with pgvector extension
5. Run `node server.js`
