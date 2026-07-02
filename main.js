const weddingDate = new Date('2026-09-12T09:00:00+07:00');

function tick() {
  let diff = Math.max(0, weddingDate - new Date());
  let d = Math.floor(diff / 864e5);
  let h = Math.floor(diff % 864e5 / 36e5);
  let m = Math.floor(diff % 36e5 / 6e4);
  let s = Math.floor(diff % 6e4 / 1e3);
  ['d', 'h', 'm', 's'].forEach((id, i) =>
    document.getElementById(id).textContent = [d, h, m, s][i].toString().padStart(2, '0')
  );
}
setInterval(tick, 1000);
tick();

const wrap = document.getElementById('petals');
for (let i = 0; i < 55; i++) {
  let p = document.createElement('i');
  p.className = 'petal';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.animationDuration = 7 + Math.random() * 12 + 's';
  p.style.animationDelay = Math.random() * -18 + 's';
  p.style.setProperty('--drift', (Math.random() * 260 - 130) + 'px');
  p.style.transform = `scale(${.55 + Math.random() * 1.25})`;
  wrap.appendChild(p);
}

const audio = document.getElementById('bgm');
const btn = document.getElementById('musicBtn');
const hint = document.getElementById('musicHint');

function onPlaying() {
  btn.textContent = '❚❚';
  btn.classList.add('playing');
  hint.classList.add('hide');
}

function startMusic() {
  audio.play().then(onPlaying).catch(() => {});
}
startMusic();

function tryStart() {
  if (audio.paused) audio.play().then(onPlaying).catch(() => {});
}
window.addEventListener('scroll', tryStart, { once: true, passive: true });
document.addEventListener('click', tryStart, { once: true });
document.addEventListener('touchstart', tryStart, { once: true });

btn.onclick = () => {
  if (audio.paused) {
    audio.play().then(onPlaying).catch(() => alert('Tap again to play music.'));
  } else {
    audio.pause();
    btn.textContent = '♪';
    btn.classList.remove('playing');
  }
};

const lightbox = document.getElementById('lightbox');
const big = lightbox.querySelector('img');
document.querySelectorAll('.grid img, .thanksGallery img').forEach(img =>
  img.addEventListener('click', () => {
    big.src = img.src;
    lightbox.classList.add('show');
  })
);
lightbox.addEventListener('click', () => lightbox.classList.remove('show'));
