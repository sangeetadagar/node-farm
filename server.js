import http from 'http';
import fs from 'fs';
import url from 'url';
import { replaceTemplate } from './modules/replaceTemplate.js';

console.log('import.meta.url:', new URL('.', import.meta.url));
const __dirname = new URL('.', import.meta.url).pathname;

const data = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8',
);
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8',
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8',
);

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  // Overview page
  if (pathname === '/overview' || pathname === '/') {
    const cardsHtml = dataObj
      .map((data) => replaceTemplate(tempCard, data))
      .join('');
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml));

    // Product page
  } else if (pathname === '/product') {
    const product = dataObj[query.id];
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(replaceTemplate(tempProduct, product));

    // API
  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);

    // Not found
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end(`<h1>Page not found!</h1>`);
  }
});

server.listen(8000, () => {
  console.log('Server is listening on port 8000...'); //log a message when the server is running
});
