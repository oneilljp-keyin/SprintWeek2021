// -------- created by Bradley Reid 2021-02-23 ------------------------------------------------------------------------
// - function to check if passwords match
//
// -------- modified by John O'Neill 2021-02-24 -----------------------------------------------------------------------
// - added a function to also check if email is valid by check if @ is located in string. Also added lines to check if
//   first name, last name, and birthday are set. After everything is validated, will store everythign in the local
//   storage to be retrieved when user logins.
//
// -------- modified by John O'Neill 2021-02-25 -----------------------------------------------------------------------
// - added a function to check if birthday is valid and in the right format.

// checks if the birthday is valid format, chances are it will be using the date input tag, but just in case, could use
// it to check if person is the right age.
function checkDOB(dob) {
    let date = dob;
    let parts = date.split("-");
    if (parts[0] >= 1900 && parts[0] <= 2021) {
        if (parts[1] >= 1 && parts[1] <= 12) {
            if (parts[2] >= 1 && parts[2] <= 31) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

// retrieves all necessary information from all the fields
function main(){
    let first_name = document.querySelector("#first_name").value;
    let last_name = document.querySelector("#last_name").value;
    let birthday = document.querySelector("#date_of_birth").value;
    let email = document.querySelector("#email_add").value;
    // if this variable returns -1, there is no @ in the string
    let email_check = email.indexOf("@");
    let password = document.querySelector("#pword").value;
    let confirm = document.querySelector("#confirm_pwd").value;

    let emailOK = false; let passOK = false; let firstOK = false;
    let lastOK = false;  let dobOK = false;

    // Check if first name field is filled out
    if (first_name.length < 1) {
        document.querySelector("#first_err").innerHTML = "* Please Enter a First Name"
      } else {
          firstOK = true;
      }

    // Check if last name field is filled out
    if (last_name.length < 1) {
        document.querySelector("#last_err").innerHTML = "* Please Enter a Last Name"
      } else {
          lastOK = true;
      }

    // Checks if there is a @ in the email field
    if (email_check == -1) {
        document.querySelector("#email_err").innerHTML = "* Invalid Email Address"
      } else {
          emailOK = true;
      }

    // checks if the password and confirm are the same
    if (password != confirm){
        document.querySelector("#pass_err").innerHTML = "* Passwords do not match";    
    } else {
        passOK = true;
    }

    // checks if a valid date was entered
    if (!checkDOB(birthday)){
        document.querySelector("#dob_err").innerHTML = "* Invalid Date of Birth Entered";    
    } else {
        dobOK = true;
    }
    console.log(`email ${emailOK} - first ${firstOK} - last ${lastOK} - dob ${dobOK} - pass ${passOK} - `)
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

        localStorage.setItem(`user${nextUserNum}`, JSON.stringify({
                "firstName":first_name, "lastName": last_name, "email": email, 
                "joinDate": today, "password": password, "dob": birthday}));

        sessionStorage.setItem("userName", `${first_name} ${last_name}`);
        sessionStorage.setItem("joinDate", today);

        window.location.href = "feed.html";
    }   
}

// -----------This is an example of how to store & retrieve an object in the local storage ----------------------------
// localStorage.setItem('myObject', JSON.stringify({'prop1': "string", 'prop2': "string"}));
// let temp = JSON.parse(localStorage.get('myObject'));
// temp.prop1;
// --------------------------------------------------------------------------------------------------------------------
// info stored as: user1#### {firstName, lastName, email, joinDate, password, friends, followers}

document.querySelector("#create_account").addEventListener("click", main);