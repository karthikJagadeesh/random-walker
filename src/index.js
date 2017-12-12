import "babel-polyfill";
import p5 from "p5"; // 🎨
import { Walker } from "./walker"; // 🚶

const app = p => {
  let [redWalker, blueWalker] = [null];
  let screenCenter = 0;

  p.setup = _ => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    const whiteColor = 255; // ⚪️
    p.background(whiteColor);
    screenCenter = p.width / 2;

    const walkerSize = 2;
    const redWalkerColor = [191, 53, 47]; // 🔴
    redWalker = new Walker(p, redWalkerColor, walkerSize);
    redWalker.show();

    const blueWalkerColor = [27, 72, 105]; // 🔵
    blueWalker = new Walker(p, blueWalkerColor, walkerSize);
    blueWalker.show();
  };

  p.draw = _ => {
    redWalker.move();

    let offSetValue = screenCenter - redWalker.positionX;
    let mirrorValue = screenCenter + offSetValue;
    blueWalker.positionX = mirrorValue;
    blueWalker.positionY = redWalker.positionY;

    redWalker.show();
    blueWalker.show();
  };

  p.windowResized = _ => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

const appInstance = new p5(app);
