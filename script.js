window.cloudflare_turnstile_widget.create({
  sitekey: 'your_sitekey',
  container: document.getElementById('JStsl2'),
  callback: function(response) {
    // Send the response to the endpoint
    fetch('https://your_endpoint.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        challenge: response.challenge,
        response: response.response,
        honeypot: response.honeypot_token
      })
    })
      .then(response => {
        // Handle the response from the endpoint
        if (response.ok) {
          // Show the success message
          document.getElementById('BQxuW7').style.display = 'block';
        } else {
          // Show the error message
          document.getElementById('UJXr0').style.display = 'block';
        }
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  }
});
