import "babel-polyfill";
import p5 from "p5"; // 🎨
import { Walker } from "./walker"; // 🚶

const app = p => {
  let walker1 = null;
  let walker2 = null;
  let screenCenter = 0;

  p.setup = _ => {
    const redWalker = [191, 53, 47]; // 🔴
    const blueWalker = [27, 72, 105]; // 🔵
    const whiteColor = 255; // ⚪️
    const walkerSize = 2;

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(whiteColor);
    screenCenter = p.width / 2;
    walker1 = new Walker(p, redWalker, walkerSize);
    walker2 = new Walker(p, blueWalker, walkerSize);
    walker1.show();
    walker2.show();
  };

  p.draw = _ => {
    walker1.move();
    let offSetValue = screenCenter - walker1.positionX;
    let mirrorValue = screenCenter + offSetValue;
    walker2.positionX = mirrorValue;
    walker2.positionY = walker1.positionY;
    walker1.show();
    walker2.show();
  };

  p.windowResized = _ => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

const appInstance = new p5(app);
