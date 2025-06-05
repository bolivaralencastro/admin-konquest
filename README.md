# Konquest Admin Panel

This project serves static files through a small Node server. You only need Node.js installed to run it.

## Installing Node

Make sure you have Node.js installed. You can verify this by running:

```bash
node -v
```

If the command is not found, install Node from [nodejs.org](https://nodejs.org) or use a tool like `nvm`.

## Starting the server

From the repository root run:

```bash
npm start
```

The server runs by default on port `3000` and serves the content of the `public/` directory.

## Folder structure

```
.
├── css/
├── grupos/
├── js/
├── index.html
├── server.js
├── package.json
```

Any additional static assets should be placed inside these folders.
