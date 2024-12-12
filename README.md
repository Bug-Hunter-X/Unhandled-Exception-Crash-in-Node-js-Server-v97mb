# Unhandled Exception Crash in Node.js Server

This repository demonstrates a common error in Node.js applications: unhandled exceptions causing server crashes.  The `server.js` file shows the problematic code, while `serverSolution.js` provides a solution using error handling.

## Problem

The original server code lacks proper error handling.  If an unexpected error occurs during request processing, the server will crash without logging useful information or gracefully handling the request.  This leads to downtime and makes debugging difficult.

## Solution

The solution demonstrates the use of `try...catch` blocks to handle potential errors during request processing.  This ensures that the server doesn't crash and allows for logging of errors or returning appropriate error responses to the client.