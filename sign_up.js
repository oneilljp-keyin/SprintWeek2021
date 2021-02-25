function main(){
    let first_name = document.getElementById("first_n").value;
    console.log(first_name);

    let last_name = document.getElementById("last_n").value;
    let birthday = document.getElementById("birth").value;
    let timecheck = Date.parse(birthday);
    let email = document.getElementById("email").value.indexOf("@");
    let password = document.getElementById("password");
    let confirm = document.getElementById("confirm_pass");
    
    let emailOK = false;
    let passOK = false;
    let firstOK = false;
    let lastOK = false;
    let dobOK = false;

    console.log(last_name);
    console.log(birthday);
    console.log(email);
    console.log(password);

    let first_err = document.getElementById("first_err");
    let last_err = document.getElementById("last_err");
    let dob_err = document.getElementById("dob_err");

    // Check if first name field is filled out
    if (first_name.length < 1) {
        document.getElementById("first_err").innerHTML = "* Please Enter a First Name"
      } else {
          firstOK = true;
      }

    // Check if last name field is filled out
    if (last_name.length < 1) {
        document.getElementById("last_err").innerHTML = "* Please Enter a Last Name"
      } else {
          firstOK = true;
      }

    // Checks if there is a @ in the email field
    if (email == -1) {
        document.getElementById("email_err").innerHTML = "* Invalid Email Address"
      } else {
          emailOK = true;
      }

    // checks if the password and confirm are the same
    if (password.value != confirm.value){
        document.getElementById("pass_err").innerHTML = "* Passwords do not match";    
    } else {
        passOK = true;
    }

    // checks if a valid date was entered
    if (isNaN(timecheck)){
        document.getElementById("dob_err").innerHTML = "* Invalid Date of Birth Entered";    
    } else {
        passOK = true;
    }

    if (emailOK && passOK && lastOK && firstOK && dobOK) {
        let today = new Date(Date.now());

        let nextUserNum;
        console.log("This is a test");
        if (localStorage.getItem("nextUserNum") !== null) {
            nextUserNum = localStorage.getItem("nextPostNum");
        } else {
            nextUserNum = 10000;
            localStorage.setItem("nextUserNum", nextUserNum++);
        }

        localStorage.setItem(`User${nextUserNum}`, JSON.stringify({
                "firstName":first_name, "lastName": last_name, "email": email, 
                "joinDate": today, "password": password}));

        sessionStorage.setItem("userName", `${first_name} ${last_name}`);
        sessionStorage.setItem("joinDate", today);
    }   
}

// -----------This is an example of how to store & retrieve an object in the local storage -------------------------
// localStorage.setItem('myObject', JSON.stringify({'prop1': "string", 'prop2': "string"}));
// let temp = JSON.parse(localStorage.get('myObject'));
// temp.prop1;
// -----------------------------------------------------------------------------------------------------------------

// info stored as: User1#### {firstName, surName, email, joinDate, password, friends, followers}
