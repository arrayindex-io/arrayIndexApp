const http = require('http');
const url = require('url');

function getSingleDigitSum(num) {
  let sum = 0;
  while (num > 0 || sum > 9) {
    if (num === 0) {
      num = sum;
      sum = 0;
    }
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);
  const houseNumber = pathname.split('/')[3];

  if (typeof houseNumber === 'undefined' || houseNumber === null) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Invalid house number');
    return;
  }

  let sum = 0;

  for (let i = 0; i < houseNumber.length; i++) {
    const digit = houseNumber[i];
    if (!isNaN(digit)) {
      const digitValue = parseInt(digit);
      sum += digitValue;
    }
  }

  const singleDigitSum = getSingleDigitSum(sum);

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(singleDigitSum.toString());
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
