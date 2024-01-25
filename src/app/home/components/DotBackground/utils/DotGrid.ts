export class DotGrid {
  canvasElement: HTMLCanvasElement;
  canvas: CanvasRenderingContext2D;
  canvasWidth: number;
  canvasHeight: number;
  dpr: number;
  drawable: DOMRect;
  mouseX: number;
  mouseY: number;
  size = 1.5;
  gridSize = 20;
  fillColor = "#DDD";

  constructor(ref: React.RefObject<HTMLCanvasElement>) {
    if (!ref.current) {
      throw new Error("Canvas element not found");
    }
    this.canvasElement = ref.current;
    this.dpr = window.devicePixelRatio || 1;
    this.drawable = this.canvasElement.getBoundingClientRect();
  
    this.canvasWidth = this.drawable.width * this.dpr;
    this.canvasHeight = this.drawable.height * this.dpr;

    this.canvasElement.width = this.canvasWidth;
    this.canvasElement.height = this.canvasHeight;

    this.mouseX = 0;
    this.mouseY = 0;

    const canvas = this.canvasElement.getContext("2d")!;
    if (!canvas) {
      throw new Error("Could not get canvas context");
    }
    this.canvas = canvas;
    this.canvas.scale(this.dpr, this.dpr);
  }

  onMouseUpdate(e: MouseEvent) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;

    window.requestAnimationFrame(this.draw.bind(this));
  }

  onResize() {
    this.drawable = this.canvasElement.getBoundingClientRect();
    this.canvasWidth = this.drawable.width * this.dpr;
    this.canvasHeight = this.drawable.height * this.dpr;
    this.canvasElement.width = this.canvasWidth;
    this.canvasElement.height = this.canvasHeight;
    this.canvas.scale(this.dpr, this.dpr);

    window.requestAnimationFrame(this.draw.bind(this));
  }


  init() {
    window.requestAnimationFrame(this.draw.bind(this));
    window.addEventListener("mousemove", this.onMouseUpdate.bind(this), false);
    window.addEventListener("resize", this.onResize.bind(this), false);
  }

  draw() {
    this.canvas.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.drawDots();
  }

  drawDots() {
    for (let i = 0; i < this.canvasWidth / this.dpr / this.gridSize + 2; i++) {
      for (let j = 0; j < this.canvasHeight / this.dpr / this.gridSize + 2; j++) {
        const x = i * this.gridSize;
        const y = j * this.gridSize;
        const dist = this.distance(x, y, this.mouseX, this.mouseY);
        this.canvas.beginPath();
        const noiseX = ((x - this.mouseX) / dist * this.gridSize) * Math.max(1 - (dist / 200), 0),
              noiseY = ((y - this.mouseY) / dist * this.gridSize) * Math.max(1 - (dist / 200), 0);
        this.canvas.arc(
          x + noiseX,
          y + noiseY,
          this.size,
          0,
          2 * Math.PI,
          true
        );
        this.canvas.fillStyle = this.fillColor;
        this.canvas.fill();
      }
    }
  }

  distance(x: number, y: number, mouseX: number, mouseY: number) {
    if (isNaN(mouseX)) {
      return 1;
    } else {
      const leg1 = Math.abs(mouseX - x);
      const leg2 = Math.abs(mouseY - y);
      const dist = Math.pow(leg1, 2) + Math.pow(leg2, 2);
      return Math.sqrt(dist);
    }
  }
}
