document.addEventListener('scroll', function () {
  const cards = document.querySelectorAll('.personage-card');
  const scrollPosition = window.scrollY;
  const numCardsToTransform = 4;
  const totalCards = cards.length;
  const windowHeight = window.innerHeight;
  const initialTilt = 80;

  const documentHeight = document.documentElement.scrollHeight;

  const atBottom = windowHeight + scrollPosition >= documentHeight - 10;

  for (let i = totalCards - numCardsToTransform; i < totalCards; i++) {
    let tiltAngle;

    if (window.innerWidth <= 1280) {
      tiltAngle = 0;
    } else {
      tiltAngle = initialTilt - (scrollPosition / (documentHeight - windowHeight)) * initialTilt;

      if (atBottom) {
        tiltAngle = 0;
      }
    }

    cards[i].style.transform = `rotate3d(1, 0, 0, ${tiltAngle}deg)`;
  }
});
