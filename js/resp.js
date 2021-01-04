const toggleBtn=document.getElementsByClassName('toggle-button')[0]
const navbarLinks=document.getElementsByClassName('navbar-links')[0]

toggleBtn.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
});



// contact form js part

  // Listen for form submit
  document.getElementById('contactForm_contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    console.log("submit of the contact form has been clicked")
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    //var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, phone, message);
  
    // Show alert
    document.querySelector('.contactForm_alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.contactForm_alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm_contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, phone, message){
    var contactform_msg="<p>Name :"+name +"</p><br><p>Phone: "+ phone +"</p><br><p>Email :" + email +"</p><br><p>Messae :"+ message+"</p>";
    console.log(contactform_msg);
    mailkaro(contactform_msg);
  }

const sm="notifications.needcovidplasma@gmail.com";
const rm="notifications.needcovidplasma@gmail.com";
const pw="AntiCovid@1";
 
  function mailkaro(contactform_msg) {
    console.log("mailing"); 
    Email.send({ 
      Host: "smtp.gmail.com", 
      Username: sm, 
      Password: pw, 
      To: rm, 
      From: sm, 
      Subject: "Contact Form message @NeedCovidPlasma.in", 
      Body: contactform_msg, 
    }) 
      .then(function (message) { 
          console.log("mail sent successfully"); 
      }); 
  } 

 // load of the service part 

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
  


function loadData(){
  console.log("main body loaded");

  var database=firebase.database();
  var ref=database.ref('NeedCovidPlasmaData');

  ref.on('value',gotData,errData);
  

}

function gotData(data){

  var donor_data=data.val();
  var data_keys=Object.keys(donor_data);
  // console.log(donor_keys);

  var p=0,v=0,d=0;

  for(var i=0;i<data_keys.length;i++){
    var now_key=data_keys[i];

    if(donor_data[now_key].type=="D"){
      d++;
    }
    if(donor_data[now_key].type=="V"){
      v++;
    }
    if(donor_data[now_key].type=="P"){
      p++;
    }

  }

  document.getElementById("no_of_donors").innerHTML=d;
  document.getElementById("no_of_requests").innerHTML=p;
  document.getElementById("no_of_volunteers").innerHTML=v;

  var date=new Date();
  var n=date.getHours();
  n=n%4;
  var str_don="few minutes ago";
  var str_req="few minutes ago";
  var str_vol="few minutes ago";

  switch(n){
    case 0:
      str_don="few minutes ago";
      str_req="few minutes ago";
      str_vol="few minutes ago";
    break;

    case 1:
      str_don="few hours ago";
      str_req="few minutes ago";
      str_vol="few minutes ago";
    break;

    case 2:
      str_don="few minutes ago";
      str_req="few hours ago";
      str_vol="few minutes ago";
    break;

    case 3:
      str_don="few hours ago";
      str_req="few hours ago";
      str_vol="few minutes ago";
    break;

    default:
      break;

  }

  document.getElementById("last_time_of_donor").innerHTML=str_don;
  document.getElementById("last_time_of_request").innerHTML=str_req;
  document.getElementById("last_time_of_volunteer").innerHTML=str_vol;


  

}


function errData(err){
  console.log("Error");
  console.log(err);
}