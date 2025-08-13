#include <Servo.h>

Servo servo;
String command = "";
int angle = 90;

void setup() {
  Serial.begin(9600);

  servo.attach(9);
  servo.write(angle);
  // Serial.println("System ready. Commands: l,r");
}

void loop() {
  if (Serial.available()) {
    command = Serial.readStringUntil('\n');
    command.trim();

    // if (angle == 170) {
    //   Serial.println("Servo cannot move in clockwise direction anymore!");
    // } else if (angle == 10) {
    //   Serial.println("Servo cannot move in anti-clockwise direction anymore!");
    // } else {
      // Servo controls
      if (angle<170 && command == "r") {
        angle += 20;
        servo.write(angle);
        // Serial.println("Servo moved by 20 degrees in clockwise direction.");
      } else if (angle>10 && command == "l") {
        angle -= 20;
        servo.write(angle);
        // Serial.println("Servo moved by 20 degrees in anti-clockwise direction.");
      } else if (command == "c") {
        angle = 90;
        servo.write(angle);
        // Serial.println("Servo centered at 90 degrees");
      }
      else {
        Serial.println("Invalid command. Use: l,r,c");
      }
    // }
  Serial.println(angle);
  }
}