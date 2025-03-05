// script.js
document.getElementById('waitlist-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  
  // Here you can add code to send the email to your server or a service like Mailchimp
  
  // Show success message
  document.getElementById('success-message').style.display = 'block';
  
  // Clear the input field
  document.getElementById('email').value = '';
});