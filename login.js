// -------- Created by John O'Neill 2021-02-25 --------
//
// - created a script to see if the email entered is in
//   the local storage, which would have been entered 
//   via the sign-up page.


function checkLogin() {
    // retrieve email and password from login page
    let email_chk = document.querySelector("#login_email").value;
    let password_chk = document.querySelector("#login_psswd").value;

    console.log(email_chk);
    console.log(password_chk);

    // since there is no way (that i know of) to search keys in the
    // local storage, theis will search for keys between user10000
    // and user11000 (there should be too many) to validate the
    // login information
    for (let num = 10000; num < 11000; num++) {
        // if the key exists, it will compare the email addresses
        if (localStorage.getItem(`user${num}`) !== null) {
            let userInfo = JSON.parse(localStorage.getItem(`user${num}`));
            // if email matches, this will check if passwords match
            if (userInfo.email.toLowerCase() == email_chk.toLowerCase()) {
                // if email and passwords match, will store information in 
                // session storage for use in the feeds page.
                // currently has login to bypass password, just needs to be signed up
                // with proper email
                if (password_chk == password_chk) {
                    sessionStorage.setItem("userName", `${userInfo.firstName} ${userInfo.lastName}`);
                    sessionStorage.setItem("joinDate", `${userInfo.joinDate}`);
                    sessionStorage.setItem("userID", `user${num}`);
                    window.location.href = "feed.html";
                } else {
                    // error message if password don't match
                    document.querySelector("#login-message").innerHTML = "Wrong Username and/or Password";
                }
            } else {
                // error message if email don't match
                document.querySelector("#login-message").innerHTML = "Wrong Username and/or Password";
            }
        }
    }
}

document.querySelector("#login_main").addEventListener("click", checkLogin);