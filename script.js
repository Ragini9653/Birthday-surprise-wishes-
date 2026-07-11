> Akash:
function playMusic() {
  const music = document.getElementById("music");
  music.play();
}

const messages = [
  "❤️ Happy Birthday My Dear ❤️",
  "🎂 Wishing You Endless Happiness 🎂",
  "🌹 You Make Every Moment Special 🌹",
  "💖 Stay Happy Always 💖"
];

let index = 0;

setInterval(() => {
  document.querySelector(".msg").innerHTML = messages[index];
  index++;
  if (index >= messages.length) {
    index = 0;
  }
}, 3000);
