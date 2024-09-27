const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

yesBtn.addEventListener('click', () => {
    window.location.href = 'felicidades.html';
});

noBtn.addEventListener('mouseover', () => {
    const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
