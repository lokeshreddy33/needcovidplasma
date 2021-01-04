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

  let mail_list_arr=["notifications.needcovidplasma@gmail.com"];
  
  function admin_login(){
    console.log("welcome admin");

    var pw = getInputVal('password')
    console.log(pw);

    if(pw=="Admin@1"){
      document.querySelector('.login_form').style.display = 'none';
      document.querySelector('.main_form').style.display = 'block';
    }else{
      console.log("Incorect password");
      document.querySelector('#wrongpw').style.display = 'block';
    }
    
  }


  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    // var type="A";
    // var name = getInputVal('name');
    // var age = getInputVal('age');
    // var sex = getInputVal('sex');
    // var bloodGroup = getInputVal('bloodGroup');
    // var state = getInputVal('stateSelect');
    // var district = getInputVal('districtSelect');
    // var email = getInputVal('email');
    // var phone = getInputVal('phone');
    // var mailtext = getInputVal('mailtext');
  
    // Save message
    // saveMessage(type,name,mailtext);
  
    // Show alert
    // document.querySelector('.contactForm_alert').style.display = 'block';
    // document.querySelector('#your_result').style.display = 'none';
    // document.getElementById("result_btn").innerHTML="processing...";

    // Hide alert after 3 seconds
    // setTimeout(function(){
    //   document.querySelector('.contactForm_alert').style.display = 'block';
    //   document.getElementById("result_btn").innerHTML="Results here";
    // },1000);

    console.log(mailtext);
    results() ;

  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(type,name,mailtext){

    // var newMessageRef = messagesRef.push();
    // newMessageRef.set({
    //   type:type,
    //   name: name,
    //   age:age,
    //   sex:sex,
    //   bloodGroup:bloodGroup,
    //   state:state,
    //   district:district,
    //   email:email,
    //   phone:phone,
    //   address:address
    // });

    results();
    // patient_mail_sending(name,age,sex,bloodGroup,state,district,email, phone,address);
  }


//  function evaluating the results   
// function send_mails_to_volunteers(){
  // results();
  // console.log("submiting 1");
// }

  function results() {

  console.log("result function called");
  var database=firebase.database();
  var ref=database.ref('NeedCovidPlasmaData');

  ref.on('value',gotData,errData);  

  }

  

  function gotData(data){
    // console.log(data.val());
    var donor_data=data.val();
    var donor_keys=Object.keys(donor_data);
    // console.log(donor_keys);
    // console.log("name");

    var string_of_the_donor_match="";
    // var now_patient_bloodgroup=getInputVal('bloodGroup');
    var now_people_type=getInputVal('type');
  
    if(now_people_type=="T"){
      // var now_volunteer_email=donor_data[nowKey].email;
      // if(now_volunteer_email.toUpperCase()!=now_volunteer_email.toLowerCase()){
      //   mail_list_arr.push(now_volunteer_email);
      // }
      mail_list_arr.push("notifications.needcovidplasma@gmail.com");
      console.log("type: T");
    }
    else{

      for(var i=0;i<donor_keys.length;i++){
        var nowKey=donor_keys[i];
        // var now_donor_bloodgroup=donor_data[nowKey].bloodGroup;
        // var now_donor_state=donor_data[nowKey].state;
  
        if(now_people_type=="D"){
  
          var now_volunteer_email=donor_data[nowKey].email;
          if(now_volunteer_email.toUpperCase()!=now_volunteer_email.toLowerCase()){
            mail_list_arr.push(now_volunteer_email);
          }
  
        }
  
  
        if(now_people_type=="V"){
          var now_volunteer_email=donor_data[nowKey].email;
          if(now_volunteer_email.toUpperCase()!=now_volunteer_email.toLowerCase()){
            mail_list_arr.push(now_volunteer_email);
          }
        }
        // send_mails_to_volunteers_sub();
        // console.log(now_name);
       
      }  
      
    }

    send_mails_to_volunteers_sub();

    // var upper_string_of_the_donor_match=string_of_the_donor_match.toUpperCase();
    // var lower_string_of_the_donor_match=string_of_the_donor_match.toLowerCase();
    // if(upper_string_of_the_donor_match==lower_string_of_the_donor_match){
    //     string_of_the_donor_match="<b>Sorry,we couldn't find any matching donor as per your request</b>";
    // }

    // document.getElementById("matched_donors_data_id").innerHTML=string_of_the_donor_match;

    // console.log(donor_keys.length); 
}

function errData(err){
    console.log("Error");
    console.log(err);
}

//  fuction for sending alert in mails 

function send_mails_to_volunteers_sub(){
  console.log("sending alerts");
  document.getElementById("mailing_confirmation_id").innerHTML="processing...";
  console.log(volunteer_mail_str);

// var name = getInputVal('name');
// var age = getInputVal('age');
// var sex = getInputVal('sex');
// var bloodGroup = getInputVal('bloodGroup');
// var state = getInputVal('stateSelect');
// var district = getInputVal('districtSelect');
// var email = getInputVal('email');
// var phone = getInputVal('phone');
// var address = getInputVal('address');

  // console.log(name+age+sex+bloodGroup+state+district+email+phone+address);


  var volunteer_mail_str="";
  for(volunteer_mail_str of mail_list_arr){
    volunter_alerts_mails_sending(volunteer_mail_str);

  }
  
}
   

const sm="notifications.needcovidplasma@gmail.com";
const volunteer_alert_mail_message="Need of plasma from recovered corona people has been requested for the following person";
const end_volunteer_message="<br>Please circulate the above details in your known groups or social media pages thereby increasing the chance finding a donor<br>Please don't reply back to this mail<br><br>needcovidplasma.in";
const pw="AntiCovid@1";
  
function volunter_alerts_mails_sending(volunteer_mail_str){
  console.log("mailing"); 
  var mail_subject=getInputVal('subject');
  var mail_body=getInputVal('mailtext');
  Email.send({ 
    Host: "smtp.gmail.com", 
    Username: sm, 
    Password: pw, 
    To: volunteer_mail_str, 
    From: sm, 
    Subject: mail_subject, 
    // Body:'<p>'+volunteer_alert_mail_message+'</p>'+'<b>Details<br>'+"<h>Name :- "+ name +"</h><br><h>" +"Age :- "+age+"</h><br><h>"+"Blood Group :-"+bloodGroup+"</h><br><h>"+"Sex :-"+sex+"</h><br><h>"+"Location :-"+address+"</h><br><h>"+"District :-"+district+"</h><br><h>"+"State :-"+state+"</h><br><h>"+"Contact :-"+phone+"</h><br><h>"+"Email :- "+email+"</h></b><br>"+end_volunteer_message,
    Body:mail_body,
    // Body: volunteer_alert_mail_message+"\t"+" Name :- "+name +"\t       " +"Age :- "+age+"\t       "+"Blood Group :-"+bloodGroup+"\t       "+"Sex :-"+sex+"\t       "+"Location :-"+address+"\t       "+"District :-"+district+"\t       "+"State :-"+state+"\t       "+"Contact number:-"+phone+"\t       "+"Email :- "+email+"\t       ",
    
  }) 
    .then(function (message) { 
        console.log("mail sent successfully"); 
    }); 

     
    // results();
    setTimeout(done,2000);
}   

function done(){
  document.getElementById("mailing_confirmation_id").innerHTML="Mail's sent succesfully";
}