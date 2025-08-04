# Taqsit - Installment Tracking Platform
<p align="center">
  <img src="./images/logo.png" alt="Centered Image" width="300">
</p>
**Taqsit** is a backend application built with NestJS that allows merchants or individuals to manage and track installment-based payments for their clients.  
It provides a secure and scalable API for creating clients, assigning installment plans, monitoring payments, and generating payment schedules.

## Features

- User authentication with JWT (access and refresh tokens)
- Role-based access control (merchant)
- Customer management
- Product registration for installment
- Installment plan creation with auto-generated schedules
- Payment tracking (paid, pending, overdue)
- Swagger documentation
- Docker support
- Clean and modular architecture using NestJS best practices

## Tech Stack

| Area              | Technology        |
|-------------------|-------------------|
| Backend Framework | NestJS            |
| Database          | PostgreSQL        |
| ORM               | Prisma or TypeORM |
| Authentication    | JWT               |
| Containerization  | Docker, Docker Compose |
| Documentation     | Swagger            |
| Testing           | Jest               |

## Modules Overview

- **Auth Module** – Handles user registration, login, and token management
- **Users Module** – Merchant account management
- **Customers Module** – CRUD for clients linked to a merchant
- **Products Module** – Products sold with installment plans
- **InstallmentPlans Module** – Schedule generation (monthly, duration, start date, etc.)
- **Payments Module** – Payment status tracking and updates
- **Statistics Module** (optional) – Reports for total dues, paid, and overdue amounts
- **Notifications Module** (future scope) – Email or SMS reminders

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Docker & Docker Compose
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/taqsit-backend.git
cd taqsit-backend
