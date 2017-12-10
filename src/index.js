import "babel-polyfill";
import p5 from "p5";
import { Walker } from "./walker";

const app = p => {
  let walker = null;

  p.setup = _ => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    walker = new Walker(p);
    walker.show();
  };

  p.draw = _ => {
    walker.move();
    walker.show();
    // p.background(255);
  }

  p.windowResized = _ => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

const appInstance = new p5(app);
