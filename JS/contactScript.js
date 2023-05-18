// Add your JavaScript code here

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "nrr.webgames@gmail.com",
    Password: "010123.w",
    To: 'nrr.webgames@gmail.com',
    From: document.getElementById('email').value,
    Subject: "Contact Form Submission",
    Body: "Name: " + document.getElementById('name').value +
      "<br>Email: " + document.getElementById('email').value +
      "<br>Phone No.: " + document.getElementById('phone').value +
      "<br>Message: " + document.getElementById('message').value
  }).then(function (message) {
    alert("Email sent successfully");
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
  });
}
