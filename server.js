const { SerialPort, ReadlineParser } = require("serialport");
const http = require("http");
const fs = require("fs");


//reading the file
const filePath = "main.html";
const fileContent = fs.readFileSync(filePath);


const port = new SerialPort({
     path: "COM5",
     baudRate: 9600,
     parity: "none",
     stopBits: 1,
     dataBits: 8,
    });

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));


// setTimeout(() => {
//   port.write('r');
// }, 3000);


const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" }),
  res.end(fileContent);
});

const {Server} = require("socket.io");
const io = new Server(server);

parser.on('data', (line) => {
  const angle = parseInt(line, 10);
  if (!isNaN(angle)) {
    io.emit('Current angle', { angle });
  }
});

io.on("connection", (socket) => {
  socket.on('anti-servo', () => {
    port.write('r');
    console.log("Servo turned in anti-clockwise direction by 20 degrees");
  });
    socket.on('clock-servo', () => {
        port.write('l');
        console.log("Servo turned in clockwise direction by 20 degrees");
    });
    socket.on('reset-servo', () => {
        port.write('c');
        console.log("Servo reset to center position");
    });
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});