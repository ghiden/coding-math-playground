import SimpleEpisode from './SimpleEpisode';

class Episode extends SimpleEpisode {
  componentDidMount() {
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
}

Episode.title = "Introduction"

export default Episode;
