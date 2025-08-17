function addElementToDOM(id, content) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = content;
  }
}

function removeElementFromDOM(id) {
  const el = document.getElementById(id);
  if (el) {
    el.remove();
  }
}

function simulateClick(id, content) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = content;
  }
}

function handleFormSubmit(formId, outputId) {
  const form = document.getElementById(formId);
  const input = document.getElementById('user-input');
  const output = document.getElementById(outputId);
  const error = document.getElementById('error-message');

  const value = input.value.trim();
  if (!value) {
    error.textContent = 'Input cannot be empty';
    error.classList.remove('hidden');
    return;
  }

  output.textContent = value;
  error.textContent = '';
  error.classList.add('hidden');
}

module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};
