const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.elements['email'];
const messageInput = form.elements['message'];

// Load saved data from local storage
const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedData) {
  formData.email = savedData.email || '';
  formData.message = savedData.message || '';
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    form.reset();
  }
});
