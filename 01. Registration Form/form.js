function validation() {
    var flag = 0;
    var user = document.getElementById('user').value;
    var name = document.getElementById('name').value;
    var country = document.getElementById('country').value;
    var zip = document.getElementById('zip').value;
    var mail = document.getElementById('mail').value;
    // userid
    if (user === "") {
        document.getElementById('userids').innerHTML = "** Please fill the user ID";
        flag = 1;
        return false;
    }
    else if (user.length < 6) {
      document.getElementById('userids').innerHTML = "** User ID should be greater than 6 characters";
      flag = 1;
      return false;
    }
    else{
      document.getElementById('userids').innerHTML = "";
    }


    if (name === "") {
      document.getElementById('nameSpan').innerHTML = "** Please fill the name field";
      flag = 1;
      return false;
    }
    else{
      document.getElementById('nameSpan').innerHTML = "";
    }


    if(country === "none"){
      document.getElementById('countrySpan').innerHTML = "** Please Select a Country";
      flag = 1;
      return false;
    }
    else{
      document.getElementById('countrySpan').innerHTML = "";
    }

    if(zip === ""){
      document.getElementById('zipCodeSpan').innerHTML = "** Invalid";
      flag = 1;
      return false;
    }
    else if(zip.length <6 || zip.length>6){
      document.getElementById('zipCodeSpan').innerHTML = "** Zip Code cannot be greater or less than 6 digits";
      flag = 1;
      return false;
    }
    else{
      document.getElementById('zipCodeSpan').innerHTML = "";
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mail === ""){
      document.getElementById('mailSpan').innerHTML = "** Enter a mail Id";
      flag = 1;
      return false
    }
    else if(mail.match(mailformat)){
      document.getElementById('mailSpan').innerHTML = "";
    }
    else{
      document.getElementById('mailSpan').innerHTML = "Enter a Valid mail id";
      return false;
    }

    // var onlyLetters = /[A-Za-z]/g;
    // console.log(onlyLetters)
    // if(name.match(onlyLetters)){
    //   document.getElementById('nameSpan').innerHTML = "Not a Alphabet"
    // } 
    if (flag===1){
      return false;
    }
    else{
      return true;
    }
}
/*
    //password
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var check_user_id = document.getElementById("check_user_id");

// When the user clicks on the password field, show the message box
// myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
// }

// // When the user clicks outside of the password field, hide the message box
// myInput.onblur = function() {
//   document.getElementById("message").style.display = "none";
// }

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  if(myInput.value.length === 0){
    check_user_id.classList.remove("valid")
    check_user_id.classList.add("invalid")
  }

  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
  if(myInput.value === user.value){
    check_user_id.classList.remove("valid");
    check_user_id.classList.add("invalid");
  }
  else{
    check_user_id.classList.remove("invalid");
    check_user_id.classList.add("valid");
  }
}
*/