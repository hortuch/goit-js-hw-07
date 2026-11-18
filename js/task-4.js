const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData); 

  
  const hasEmptyField = Object.values(data).some(
    (value) => value.trim() === ''
  );

  if (hasEmptyField) {
    alert('All form fields must be filled in');
    return; 
  }

  
  Object.keys(data).forEach((key) => {
    data[key] = data[key].trim();
  });

  
  console.log(data);
  form.reset();
});
