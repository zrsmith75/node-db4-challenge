const server = require("./server.js");
const PORT = process.env.PORT || 5005;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
