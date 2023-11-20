const http = require('http');
const cron = require('node-cron');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

  const task = cron.schedule('* * * * * *', () => {
    console.log('++ TASK RUNNING ++');
  });

  setTimeout(() => {
    task.stop();
  }, 2000);

  setTimeout(() => {
    task.start();
  }, 5000);

  setTimeout(() => {
    task.stop();
  }, 10000);
});