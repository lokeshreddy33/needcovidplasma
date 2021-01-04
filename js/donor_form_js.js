var firebaseConfig = {
  apiKey: "AIzaSyC4E5MjaQmSe9wxWfBUBtha7aR7DUYbQ1c",
  authDomain: "needcovidplasma-data.firebaseapp.com",
  databaseURL: "https://needcovidplasma-data.firebaseio.com",
  projectId: "needcovidplasma-data",
  storageBucket: "needcovidplasma-data.appspot.com",
  messagingSenderId: "866919410680",
  appId: "1:866919410680:web:9e64b94372fa2dc1a1840d",
  measurementId: "G-GBLSQ8B5CW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
// var firebaseConfig = {
//   apiKey: "AIzaSyAljT9NeVJoBqe9cNnVJGW86b49Fhe7ejI",
//   authDomain: "data-c2f9c.firebaseapp.com",
//   databaseURL: "https://data-c2f9c.firebaseio.com",
//   projectId: "data-c2f9c",
//   storageBucket: "data-c2f9c.appspot.com",
//   messagingSenderId: "706767781996",
//   appId: "1:706767781996:web:f66f84fd4775592c135849",
//   measurementId: "G-ES9NZ74P0W"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('NeedCovidPlasmaData');
  
  // Listen for form submit
  document.getElementById('contactForm_contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var type="D";
    var name = getInputVal('name');
    var age = getInputVal('age');
    var sex = getInputVal('sex');
    var bloodGroup = getInputVal('bloodGroup');
    var state = getInputVal('stateSelect');
    var district = getInputVal('districtSelect');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var address = getInputVal('address');
  
    // Save message
    saveMessage(type,name,age,sex,bloodGroup,state,district,email, phone,address);
  
    // Show alert
    document.querySelector('.contactForm_alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.contactForm_alert').style.display = 'none';
    },3000);
  
    //Redirecting you to the main page
    // location.replace("https://www.w3schools.com")
    // Clear form
    document.getElementById('contactForm_contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(type,name,age,sex,bloodGroup,state,district,email, phone,address){

    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      type:type,
      name: name,
      age:age,
      sex:sex,
      bloodGroup:bloodGroup,
      state:state,
      district:district,
      email:email,
      phone:phone,
      address:address
    });

    donor_mail_sending(name,age,sex,bloodGroup,state,district,email, phone,address);
  }

  const sm="notifications.needcovidplasma@gmail.com";
  const Donor_mail_message="</b>,you have been succesfully registered as a donor in NeedCovidPlasma.in<br><br>Thank you for being part of our mission.<br><br>If you have any queries,you can reply back to this mail.<br><br>Stay home ! stay safe !<br><br>needcovidplasma.in</p>";
  const pw="AntiCovid@1";
  
    function donor_mail_sending(name,age,sex,bloodGroup,state,district,email, phone,address){
      console.log("mailing"); 
      Email.send({ 
        Host: "smtp.gmail.com", 
        Username: sm, 
        Password: pw, 
        To: email, 
        From: sm, 
        Subject: "Donor Registration Succesfull @NeedCovidPlasma.in", 
        Body:"<p> Mr/Mrs <b>"+ name+Donor_mail_message, 
      }) 
        .then(function (message) { 
            console.log("mail sent successfully"); 
        }); 
    }   