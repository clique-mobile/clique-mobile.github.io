document.getElementById('waitlist-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Get the email value
    const email = document.getElementById('email').value;
  
    // Here you can add code to send the email to your backend or a service like Mailchimp
    console.log('Email submitted:', email);
  
    // Show success message
    document.getElementById('success-message').style.display = 'block';
  
    // Clear the input field
    document.getElementById('email').value = '';
  });