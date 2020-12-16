window.onload = function() {
  const inputs = document.querySelectorAll('input');

  inputs.forEach(el => {
    el.addEventListener('blur', e => {
      if(e.target.value) {
        e.target.classList.add('dirty');
      } else {
        e.target.classList.remove('dirty');
      }
    });
  });
};

function sendMail(params){
  var tempParams = {
    from_name: document.getElementById('from_name').value,
    to_name: document.getElementById('email').value,
    message: document.getElementById('message').value
  };
  emailjs.send('service_uijhw6c', 'template_8w4m6gp', tempParams)
  .then(function(res){
    console.log("success", res.status);
  })
}