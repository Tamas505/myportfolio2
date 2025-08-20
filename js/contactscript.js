document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', function (e) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    let valid = true;
    let errorMessages = [];

    // Név ellenőrzés
    if (name.value.trim() === '') {
      valid = false;
      errorMessages.push('Kérlek, add meg a neved.');
    }

    // E-mail ellenőrzés
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email.value.trim())) {
      valid = false;
      errorMessages.push('Kérlek, adj meg egy érvényes e-mail címet.');
    }

    // Üzenet ellenőrzés
    if (message.value.trim().length < 10) {
      valid = false;
      errorMessages.push('Az üzenet legyen legalább 10 karakter hosszú.');
    }

    if (!valid) {
      e.preventDefault(); // Megakadályozza az elküldést
      alert(errorMessages.join('\n'));
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const messageBox = document.getElementById('form-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Megakadályozza az elküldést

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    let valid = true;
    let errors = [];

    if (name.value.trim() === '') {
      valid = false;
      errors.push('Név szükséges.');
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email.value.trim())) {
      valid = false;
      errors.push('Érvényes e-mail szükséges.');
    }

    if (message.value.trim().length < 10) {
      valid = false;
      errors.push('Az üzenet legyen legalább 10 karakter.');
    }

    if (valid) {
      // Itt jöhetne az AJAX küldés, de most csak visszajelzünk
      messageBox.textContent = 'Sikeres küldés! Hamarosan jelentkezem. 😊';
      messageBox.className = 'form-message success';
      messageBox.style.display = 'block';
      form.reset();
    } else {
      messageBox.textContent = errors.join(' ');
      messageBox.className = 'form-message error';
      messageBox.style.display = 'block';
    }
  });
});