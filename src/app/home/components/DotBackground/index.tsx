"use client"

import { useEffect } from "react";
import styles from './styles.module.css';

class dotGrid {
  constructor(container = "sketch") {
    this.canvasElement = document.getElementById(container);

    // Get the device pixel ratio, falling back to 1.
    this.dpr = window.devicePixelRatio || 1;

    this.drawable = this.canvasElement.getBoundingClientRect();
    this.drawable.width = window.innerWidth;
    this.drawable.height = window.innerHeight;

    this.canvasWidth = this.drawable.width * this.dpr;
    this.canvasHeight = this.drawable.height * this.dpr;

    this.canvasElement.width = this.canvasWidth;
    this.canvasElement.height = this.canvasHeight;

    this.mouseX = 0;
    this.mouseY = 0;

    // Setup Canvas
    this.canvas = this.canvasElement.getContext("2d");
    this.canvas.scale(this.dpr, this.dpr);
  }

  onMouseUpdate(e) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;

    window.requestAnimationFrame(this.draw.bind(this));
  }

  init() {
    window.requestAnimationFrame(this.draw.bind(this));
    // Listen for Mouse updates
    document.body.addEventListener(
      "mousemove",
      this.onMouseUpdate.bind(this),
      false
    );
  }

  // Draws the background and calls the function for drawing the dots
  draw() {
    this.canvas.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.drawDots();
  }

  /*
  ((j - this.mouseY) / dist * 4)
  */

  // i and j function as x and y when drawing the dot grid.
  drawDots() {
    let size = 1.5;
    let gridSize = 20;
    for (let i = 0; i < this.canvasWidth / this.dpr / gridSize + 2; i++) {
      for (let j = 0; j < this.canvasHeight / this.dpr / gridSize + 2; j++) {
        let x = i * gridSize;
        let y = j * gridSize;
        let dist = this.pythag(x, y, this.mouseX, this.mouseY);
        this.canvas.beginPath();
        if (j === 20 && i === 20) {
          console.log({xNoise: (x - this.mouseX) / dist * gridSize, yNoise: (y - this.mouseY) / dist * gridSize})
        }
        const noiseX = (x - this.mouseX) / dist * gridSize;
        const noiseY = (y - this.mouseY) / dist * gridSize;
        // const noiseX = ((x - this.mouseX) / Math.abs(x - this.mouseX)) * Math.max(20 - Math.abs(x - this.mouseX), 0) / dist * gridSize;
        // const noiseX = (Math.max(20 - (x - this.mouseX), 0)/ dist * gridSize);
        // const noiseY = 0;
        this.canvas.arc(
          x + noiseX,
          y + noiseY,
          size,
          0,
          2*Math.PI,
          true
        );
        this.canvas.fillStyle = (j === 20 && i === 20) ? "lime" : "red";
        this.canvas.fill();
      }
    }
  }

  // Grabs mouse position, checks if the mouse is off the screen (NaN) and calculates the distance from the mouse pointer and each dot using the pythagorean theorem.
  pythag(x, y, mouseX, mouseY) {

    if (mouseX == NaN) {
      return 1;
    } else {
      let leg1 = Math.abs(mouseX - x);
      let leg2 = Math.abs(mouseY - y);
      let pyth = Math.pow(leg1, 2) + Math.pow(leg2, 2);
      return Math.sqrt(pyth);
    }
  }
}

export const DotBackground: React.FC = () => {

  useEffect(() => {
    const grid = new dotGrid("sketch");
    grid.init();
  }, []);

  return (
    <canvas id="sketch" className={styles.dotBackground} />
  );
} 
