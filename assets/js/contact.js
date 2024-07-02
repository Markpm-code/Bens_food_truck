const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_pla0om9';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Message';
      alert('Message Sent!');
    }, (err) => {
      btn.value = 'Send Message';
      alert(JSON.stringify(err));
    });
});