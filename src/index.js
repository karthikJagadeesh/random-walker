import "babel-polyfill";
import p5 from "p5";
import { Walker } from "./walker";

const app = p => {
  let walker1 = null;
  let walker2 = null;
  let screenCenter = 0;

  p.setup = _ => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    screenCenter = p.width / 2
    walker1 = new Walker(p, [191, 53, 47]);
    walker2 = new Walker(p, [27, 72, 105]);
    walker1.show();
    walker2.show();
  };

  p.draw = _ => {
    walker1.move();
    let offSetValue = screenCenter - walker1.x;
    let mirrorValue = screenCenter + offSetValue;
    walker2.x = mirrorValue;
    walker2.y = walker1.y;
    walker1.show();
    walker2.show();
  }

  p.windowResized = _ => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

const appInstance = new p5(app);
