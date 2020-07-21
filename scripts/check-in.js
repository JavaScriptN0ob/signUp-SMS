const signUp = {
  usernameField: document.getElementById('username'),
  emailField: document.getElementById('email'),
  passwordFirstField: document.getElementById('password-first'),
  passwordSecondField: document.getElementById('password-second'),
  phoneNumberField: document.getElementById('phone-number'),
  smsCodeField: document.getElementById('sms-code'),
  sendCodeButton: document.querySelector('.sign-up__code'),
  signUpButton: document.querySelector('.sign-up__code'),
  securityCode: null,
  username: null,
  phone: null,
  phoneRegex: /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/,
  TelstraURL: "https://tapi.telstra.com/v2/messages/sms",
  TelstraData: {
    "to": [
    "+61450147001"
    ],
    "body": "new message from Wayne",
    "from": "Wenpei Z",
    "validity": 5,
    "scheduledDelivery": 1,
    "notifyURL": "https://www.example.com/",
    "replyRequest": false,
    "priority": false,
    "receiptOff": true
    },
  // more
}

function generateRandomCode() {
  signUp.securityCode = parseInt(Math.random() * 999999);
}

function sendSMSCode() {
  const { username, sendCodeButton, usernameField } = signUp;
  sendCodeButton.addEventListener('click', () => {
    // signUp.username = usernameField.Value;
    // sendCodeToPhone();
    generateRandomCode();
    if(checkUser()) {
      if(checkPhoneNumber()){
        checkPhoneNumberZero();
        alert(`this code:${signUp.securityCode} had been sent to your phone:${signUp.phone}`);
        sendCodeToPhone();
      }
    }
  })
}
sendSMSCode();

function checkUser() {
  const { username, usernameField } = signUp;
  // console.log(1, username);
  signUp.username = usernameField.value;
  // console.log(2, signUp.username);
  // console.log(3, usernameField.value)
  if(signUp.username.trim() === "") {
    alert('please enter your username!')
  }
  else return true;
}

function checkPhoneNumber() {
  const { phoneNumberField, phoneRegex } = signUp;
  signUp.phone = phoneNumberField.value;
  if(signUp.phone.trim() === "") {
    alert('please enter your phone number!')
  }
  else if(!phoneRegex.test(signUp.phone)) {
    alert('please enter a valid phone number')
  }
  else return true;
  // console.log(signUp.phone);
  // console.log(phoneRegex);
  // console.log(phoneRegex.test(signUp.phone))
}

function checkPhoneNumberZero() {
  if(signUp.phone.charAt(0) !== '0') {
    signUp.phone = `0${signUp.phone}`
    console.log(signUp.phone)
  }
  else{
    console.log(signUp.phone)
  }
}


function sendCodeToPhone() {
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer EwQkjBQgvALUtyTZqXcmkIhuAlBu");

  var raw = JSON.stringify({"to":["+61450147001"],"body":"new message from Wayne 02","from":"Wenpei Z","validity":5,"scheduledDelivery":1,"notifyURL":"https://www.example.com/","replyRequest":false,"priority":false,"receiptOff":true});

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://tapi.telstra.com/v2/messages/sms", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
