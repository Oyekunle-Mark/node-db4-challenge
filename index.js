const server = require('./server');

const PORT = 5000;

server.listen(PORT, () => console.log(`Server up and about at port ${PORT}`));
