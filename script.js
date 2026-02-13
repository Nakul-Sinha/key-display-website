document.addEventListener('DOMContentLoaded', () => {
  const keyInput = document.getElementById('key-input');
  const displayButton = document.getElementById('display-button');
  const keyDisplay = document.getElementById('key-display');

  displayButton.addEventListener('click', () => {
    const key = keyInput.value.trim();

    if (key.length === 1 && key.match(/[a-z]/)) {
      keyDisplay.textContent = key.toUpperCase();
      keyDisplay.classList.add('fade-in');

      setTimeout(() => {
        keyDisplay.classList.remove('fade-in');
      }, 500);
    } else {
      keyDisplay.textContent = 'Invalid Input';
      keyDisplay.classList.remove('fade-in');
    }

    keyInput.value = ''; // Clear the input field after displaying
  });

  keyInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      displayButton.click();
    }
  });
});