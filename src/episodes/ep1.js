import React from 'react';

class Lesson extends React.Component {
  componentDidMount() {
    console.log('ep1 did mount');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    for (let i = 0; i < 100; i += 1) {
      context.beginPath();
      context.moveTo(Math.random() * width, Math.random() * height);
      context.lineTo(Math.random() * width, Math.random() * height);
      context.stroke();
    }
  }
  render() {
    console.log('render1');
    return (<canvas id="canvas"></canvas>);
  }
}

export default Lesson;
