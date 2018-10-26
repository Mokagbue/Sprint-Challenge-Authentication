const { server } = require('./server.js');
console.log('You got this! index.js is a working!');

//tester server message
server.get('/', (req, res) => {
  res.send('Server Up and Running Captain!');
});

const port = process.env.PORT || 3300;
server.listen(port, () => {
  console.log(`\n=== Server playing tic-tac-toe on port ${port}\n`);
});
