# AWS Deployment Learning Plan

This one-week plan is designed to build the core DevOps knowledge needed to deploy a Dockerized application on AWS, including PostgreSQL, file storage, hosting, and CI/CD automation.

## Phase 1: Master Docker

**Timeline:** Days 1-2

Before working with AWS, you should understand how containers work. Docker allows your application to run consistently across environments, from your local machine to production.

### What to Watch

1. **Docker in 100 Seconds** by Fireship
   Use this as a quick introduction to the mental model behind containers.

2. **Docker Tutorial for Beginners** by TechWorld with Nana
   Focus on the sections covering Dockerfiles for Node.js applications and `docker-compose`, since these are directly relevant to your API and PostgreSQL local setup.

### What to Read

Review the official Docker Node.js best practices documentation, especially the section on **multi-stage builds**. This will help you create smaller production containers by excluding unnecessary development dependencies and TypeScript build artifacts.

## Phase 2: Learn AWS Data Infrastructure

**Timeline:** Days 3-4

Next, focus on storing relational data, vector embeddings, and user-uploaded files securely in the cloud.

### What to Watch

1. **Amazon RDS Tutorial** by Be A Better Dev
   Focus on creating a Free Tier PostgreSQL database, configuring the master username and password, and setting up security groups correctly so the database is not exposed publicly.

2. **AWS S3 Basics** by Fireship or Be A Better Dev
   Learn what buckets are, how object storage works, and how IAM policies protect private user files such as PDFs.

## Phase 3: Deploy Compute and Hosting

**Timeline:** Days 5-6

This phase focuses on taking your Docker container and deploying it to the internet without managing servers directly.

### What to Watch

1. **AWS ECR Tutorial**
   Watch a short tutorial that explains how to use AWS Elastic Container Registry and push Docker images using the AWS CLI.

2. **AWS App Runner Tutorial for Amazon Cloud Developers** by Code One Digest
   Focus on how App Runner connects to an ECR image, deploys the service, and manages environment variables such as `DATABASE_URL`.

## Phase 4: Automate CI/CD

**Timeline:** Day 7

The final step is learning how to trigger deployments automatically whenever you push code to GitHub.

### What to Watch

1. **GitHub Actions Tutorial - Basic Concepts and CI/CD Pipeline with Docker** by TechWorld with Nana
   This is especially relevant because it teaches CI/CD using Docker, which aligns well with your deployment architecture.

2. **Complete GitHub Actions Course - From Beginner to Pro** by DevOps Directive
   You do not need to watch the full course. Focus on the sections about building your first workflow and managing secrets, especially for AWS credentials.

## Daily Study Strategy

Treat this plan like a hands-on lab rather than a passive playlist.

- **Morning, 1 hour:** Watch the targeted video at 1.5x speed to understand the concept.
- **Afternoon, 2 hours:** Apply what you learned directly to your deployment roadmap and project setup.

By the end of this plan, you should have the foundational DevOps knowledge needed to deploy your application on AWS with Docker, managed PostgreSQL, secure file storage, and automated deployments.