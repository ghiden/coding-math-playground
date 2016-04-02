import React from 'react';

class Lesson extends React.Component {
  componentDidMount() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    context.translate(0, height / 2);
    context.scale(1, -1);

    for (let angle = 0; angle < Math.PI * 2; angle += .01) {
      const x = angle * 200;
      const y = Math.sin(angle) * 200;

      context.fillRect(x, y, 5, 5);
    }
  }
  render() {
    return (<canvas id="canvas"></canvas>);
  }
}

export default Lesson;
