const request = require('request');
const fs = require('fs');
request('http://www.example.com/', (error, response, body) => {
  if (error) {
    console.log('error:', error); 
  }
  if (response.statusCode !== 200) {
    console.log('statusCode', error);
  }
  fs.writeFileSync('./index.html', body);
});
