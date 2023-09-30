import React, { Component } from 'react';

class Starfield extends Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
    this.animationFrame = null;

    this.state = {
      stars: [],
    };
  }

  componentDidMount() {
    this.setCanvasExtents();

    window.addEventListener("resize", this.setCanvasExtents);

    const makeStars = count => {
      const out = [];
      for (let i = 0; i < count; i++) {
        const s = {
          x: Math.random() * 1600 - 800,
          y: Math.random() * 900 - 450,
          z: Math.random() * 1000
        };
        out.push(s);
      }
      return out;
    };

    this.setState({ stars: makeStars(10000) });

    this.init();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setCanvasExtents);
    cancelAnimationFrame(this.animationFrame);
  }

  setCanvasExtents = () => {
    const canvas = this.canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  clear = () => {
    const canvas = this.canvasRef.current;
    const c = canvas.getContext("2d");
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);
  };

  putPixel = (x, y, brightness) => {
    const canvas = this.canvasRef.current;
    const c = canvas.getContext("2d");
    const intensity = brightness * 255;
    const rgb = "rgb(" + intensity + "," + intensity + "," + intensity + ")";
    c.fillStyle = rgb;
    c.fillRect(x, y, 2, 2);
  };

  moveStars = distance => {
    const updatedStars = [...this.state.stars];
    const count = updatedStars.length;
    for (let i = 0; i < count; i++) {
      const s = updatedStars[i];
      s.z -= distance;
      while (s.z <= 1) {
        s.z += 1000;
      }
    }
    this.setState({ stars: updatedStars });
  };

  init = () => {
    this.prevTime = performance.now();
    this.animationFrame = requestAnimationFrame(this.tick);
  };

  tick = time => {
    const elapsed = time - this.prevTime;
    this.prevTime = time;

    this.moveStars(elapsed * 0.04);

    this.clear();

    const canvas = this.canvasRef.current;
    const c = canvas.getContext("2d");
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    const count = this.state.stars.length;
    for (let i = 0; i < count; i++) {
      const star = this.state.stars[i];

      const x = cx + star.x / (star.z * 0.001);
      const y = cy + star.y / (star.z * 0.001);

      if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) {
        continue;
      }

      const d = star.z / 1000.0;
      const b = 1 - d * d;

      this.putPixel(x, y, b);
    }

    this.animationFrame = requestAnimationFrame(this.tick);
  };

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        style={{ width: "100%", height: "100%", padding: 0, margin: 0 }}
      ></canvas>
    );
  }
}

export default Starfield;
