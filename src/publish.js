import fs from 'fs';
import FormData from 'form-data';
import { request } from 'http';

const slot = 'testing';

var file = fs.createReadStream('./build/optimized.wasm');

const formData = new FormData();
formData.append('file', file);

formData.submit(`https://billing-engine.herokuapp.com/slots/${slot}/scripts`, (err, response) => {
  let data = '';

  console.log(response.statusCode, response.statusMessage);

  response.on('data', (chunk) => {
    data += chunk;
  })

  response.on('end', () => {
    if (response.statusCode === 201) {
      const script = JSON.parse(data)

      console.log(`Script ID: ${script.id}`);
    }
  })
});