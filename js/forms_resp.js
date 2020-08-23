const toggleBtn=document.getElementsByClassName('toggle-button')[0]
const navbarLinks=document.getElementsByClassName('navbar-links')[0]

toggleBtn.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
});


// // contact form js part

//   // Listen for form submit
//   document.getElementById('contactForm_contactForm').addEventListener('submit', submitForm);
  
//   // Submit form
//   function submitForm(e){
//     console.log("submit of the contact form has been clicked")
//     e.preventDefault();
  
//     // Get values
//     var name = getInputVal('name');
//     //var company = getInputVal('company');
//     var email = getInputVal('email');
//     var phone = getInputVal('phone');
//     var message = getInputVal('message');
  
//     // Save message
//     saveMessage(name, email, phone, message);
  
//     // Show alert
//     document.querySelector('.contactForm_alert').style.display = 'block';
  
//     // Hide alert after 3 seconds
//     setTimeout(function(){
//       document.querySelector('.contactForm_alert').style.display = 'none';
//     },3000);
  
//     // Clear form
//     document.getElementById('contactForm_contactForm').reset();
//   }
  
//   // Function to get get form values
//   function getInputVal(id){
//     return document.getElementById(id).value;
//   }
  
//   // Save message to firebase
//   function saveMessage(name, email, phone, message){
//     var contactform_msg=name +" "+ phone +" " + email +" "+ message;
//     console.log(contactform_msg);
//     mailkaro(contactform_msg);
//   }

// const sm="notifications.needcovidplasma@gmail.com";
// const rm="ram04032000@gmail.com";
// const pw="AntiCovid@1";

//   function mailkaro(contactform_msg) {
//     console.log("mailing"); 
//     Email.send({ 
//       Host: "smtp.gmail.com", 
//       Username: sm, 
//       Password: pw, 
//       To: rm, 
//       From: sm, 
//       Subject: "Contact Form message @NeedCovidPlasma.in", 
//       Body: contactform_msg, 
//     }) 
//       .then(function (message) { 
//           console.log("mail sent successfully"); 
//       }); 
//   } 

