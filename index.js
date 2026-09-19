import fs from 'fs';
// const data = fs.readFileSync('./txt/input.txt', 'utf8'); //reads file synchronously and utf8 encoding is used to read the file as a string otherwise it will return a buffer
// console.log(data);

// const output = `This is what we know about the avocado: ${data}.\nCreated on ${Date.now()}`; //template literal to create a string with the data read from the file and the current date
// fs.writeFileSync('./txt/output.txt', output); //writes the output string to a new file synchronously

// fs.readFile('./txt/output.txt', 'utf8', (err, data) => {
//   if (err) return console.log('Error reading file:', err);
//   console.log(data);
// });

// console.log('Reading file...');

fs.readFile('./txt/start.txt', 'utf8', (err, data) => {
  fs.readFile(`./txt/${data}.txt`, 'utf8', (err, data2) => {
    console.log(data2);

    fs.readFile('./txt/append.txt', 'utf8', (err, data3) => {
      console.log(data3);

      fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, (err) => {});
    });
  });
});
