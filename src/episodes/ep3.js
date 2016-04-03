import SimpleEpisode from './SimpleEpisode';

class Episode extends SimpleEpisode {
  componentDidMount() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const centerY = height * .5;
    const centerX = width * .5;
    const baseRadius = 100;
    //const offset = height * .4;
    const offset = 50;
    const speed = .05;

    let angle = 0;

    const animate = () => {
      let radius = baseRadius + Math.sin(angle) * offset;
      //let y = centerY + Math.sin(angle) * offset;
      //let x = centerX + Math.cos(angle) * offset;

      context.clearRect(0, 0, width, height);
      context.beginPath();
      //context.arc(centerX, y, 50, 0, Math.PI * 2, false);
      //context.arc(x, y, 50, 0, Math.PI * 2, false);
      context.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
      context.fill();

      angle += speed;

      requestAnimationFrame(animate);
    }

    animate();
  }
}

Episode.title = 'More Trigonometry';

export default Episode;
