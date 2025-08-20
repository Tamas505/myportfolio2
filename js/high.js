document.addEventListener("DOMContentLoaded", function () {
  const text = "Fejlődő webfejlesztő vagyok, aki hisz az egyedi történetekben – kód, zene és írás segítségével építek hidat emberek és ötletek között...";
  const el = document.getElementById('motto');
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 28);
    }
  }
  typeWriter();
});

window.addEventListener('scroll', function () {
  const elem = document.querySelector('.why-me-box');
  if (!elem) return;
  const rect = elem.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    elem.classList.add('visible');
  }
});

