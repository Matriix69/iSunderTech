// blur event to input to keep focus
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

//prevent submit
form.addEventListener('submit', (e) => {
  e.preventDefault()
})
//send mail funtion
function sendMail(){
  //get values
  const name = document.getElementById('from_name')
  const email = document.getElementById('email')
  const meg = document.getElementById('message')
  const errorElement = document.getElementById('error')
  const form = document.getElementById('form')
  const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //assign values to send mail parameters
  let tempParams = {
    name: name.value,
    email: email.value,
    message: meg.value
  };

  //add error class to div
  errorElement.classList.remove('success')
  errorElement.classList.add('error')
  //validate inputs
  if (name.value === '' || name.value == null) {
    errorElement.innerText = "Please your Name is required"
  }
  
  else if (meg.value.length <= 30) {
    errorElement.innerText = "Your message is too short, please be eleborate"
    
  }
  else if (!email.value.match(mailformat)) {
    errorElement.innerText = "Please enter a correct email address"
  }
  //send email if all pass
  else{
    errorElement.classList.remove('error')
    errorElement.classList.add('success')
    errorElement.innerText = "sending..."
    //sending emaill here
    emailjs.send('service_1jp41y8', 'template_8ak59gq', tempParams, 'user_V2DmvKy3LEGHQM5XBk5K4')
    .then(function(res){
      errorElement.innerText = "Message sent successfully"
      form.reset();
      console.log('SUCCESS!', res.status, res.text);
    }, function(err) {
      errorElement.innerText = "Oops, your message failed to send, please try again"
      }
    )
  }
}



