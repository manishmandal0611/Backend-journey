//

let http = require("http");
let server = http.createServer((req, res) => {
  if (req.url === "/users") {               // eska use hum multiple user ke liye karte hai
    res.end("hello i am users");            // yeh sahi approach nhi hai kyuki baar baar hum if ka use nhi kar sakte hai
  }                                        // hamare pass es cheez ko solve karne ke liye expressjs framework hai

  if (req.url === "/home") {
    res.end("hello i am Home");
  }

  if (req.url === "/carts") {
    res.end("hello i am Carts");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
