# Node Farm

A small Node.js application that serves an HTML product overview, individual
product pages, and the product data as JSON. It uses Node's built-in `http`,
`fs`, and `url` modules without a web framework.

## Requirements

- Node.js 18 or newer
- npm

## Install and run

Install the development dependency:

```bash
npm install
```

Start the server:

```bash
npm start
```

The server listens on `http://localhost:8000`.

For automatic restarts while developing, run:

```bash
npm run dev
```

## Routes

| URL             | Description                                     |
| --------------- | ----------------------------------------------- |
| `/`             | Product overview page                           |
| `/overview`     | Product overview page                           |
| `/product?id=0` | Product detail page for the product with ID `0` |
| `/api`          | Product data as JSON                            |
| Any other path  | 404 page                                        |

Example requests:

```text
http://localhost:8000/overview
http://localhost:8000/product?id=2
http://localhost:8000/api
```

## Project structure

```text
data/data.json                  Product data
modules/replaceTemplate.js      Replaces template placeholders with product data
templates/                      HTML templates
txt/                            File-system practice files
index.js                        Asynchronous file-system exercises
server.js                       HTTP server entry point
```

## What this project demonstrates

- Creating an HTTP server with Node's built-in `http` module
- Reading files synchronously and asynchronously with `fs`
- Parsing request paths and query strings with `url.parse()`
- Returning HTML, JSON, and 404 responses
- Reusing HTML templates with ES module imports and exports
- Using `import.meta.url` to build paths relative to the server file

The project uses ES modules, as configured by `"type": "module"` in
`package.json`. Therefore, it uses `import`/`export` instead of CommonJS
`require()` and `__dirname`.
