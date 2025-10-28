# Auth Gateway
================

## Table of Contents
-----------------

* [Overview](#overview)
* [Getting Started](#getting-started)
* [Configuration](#configuration)
* [Endpoints](#endpoints)
* [Troubleshooting](#troubleshooting)

## Overview
------------

This project provides a simple authentication gateway for protecting APIs and web applications.

## Getting Started
----------------

### Prerequisites

* Node.js (>= 14.17.0)
* npm (>= 6.14.13)
* PostgreSQL (>= 13.1)

### Installation

```bash
npm install
npm start
```

### Configuration

Create a new file at `config/config.json` with your PostgreSQL connection details:

```json
{
  "db": {
    "host": "localhost",
    "port": 5432,
    "user": "username",
    "password": "password",
    "database": "database"
  }
}
```

### Endpoints

* `POST /login`: Exchange a username and password for a JWT token
* `POST /logout`: Invalidate a JWT token
* `GET /protected`: Returns a 401 if not authenticated, otherwise returns a success response

## Troubleshooting
-------------

* Check the logs for any errors
* Ensure PostgreSQL is running and the database is accessible