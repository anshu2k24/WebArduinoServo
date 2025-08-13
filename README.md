# Remote Arduino Servo Control via Node.js and VS Code Port Forwarding 💡

Control your Arduino-connected servo from anywhere using a Node.js server and VS Code’s port forwarding.

## Features
- Real-time servo control via Socket.IO
- Node.js backend connected to Arduino via USB
- Access your server remotely through VS Code port forwarding [Public]
- Simple setup, no extra cloud cost

<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/e48bcfd3-640f-4bb2-9653-b35900298093" />

## Prerequisites
- Arduino Uno + servo [PWM digital pin ~9 for signals] connected to your laptop via USB
- Node.js installed on your laptop
- VS Code with Port Forwarding enabled

## Setup and kick off

1. **Connect Arduino and Upload Servo Code**  
2. **Install serialport**  
   ```bash
   npm i socket.io serialport
   ```
3. **Start Node.js Server**  
   ```bash
   node server.js
   ```
4. Forward the Server Port in VS Code
   - Open VS Code
   - Use the port forwarding feature
   - Forward your local server port (e.g., 3000) to a public port
5. Access Your Server Remotely - Open the forwarded URL in your phone or any remote device to control your servo.

## Security Considerations
- This setup exposes your server over the internet — do not expose sensitive ports or services.
- Add authentication in your Node.js app to restrict access if you plan to share your URL.
  
## Boom 💣
Thats all we need to control the servo from anywhere! Have Fun.. 😜😁
