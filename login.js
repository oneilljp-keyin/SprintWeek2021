function checkLogin() {
    let email_chk = document.querySelector("#login_email").value;
    let password_chk = document.querySelector("#login_psswd").value;

    console.log(email_chk);
    console.log(password_chk);

    for (let num = 10000; num < 11000; num++) {
        if (localStorage.getItem(`user${num}`) !== null) {
            let userInfo = JSON.parse(localStorage.getItem(`user${num}`));
            console.log(userInfo);
            if (userInfo.email.toLowerCase() == email_chk.toLowerCase()) {
                if (userInfo.password == password_chk) {
                    sessionStorage.setItem("userName", `${userInfo.firstName} ${userInfo.lastName}`);
                    sessionStorage.setItem("joinDate", `${userInfo.joinDate}`);
                    sessionStorage.setItem("userID", `user${num}`);
                    window.location.href = "feed.html";
                } else {
                    document.querySelector("#login-message").innerHTML = "Wrong Username and/or Password";
                }
            } else {
                document.querySelector("#login-message").innerHTML = "Wrong Username and/or Password";
            }
        }
    }
}

document.querySelector("#login_main").addEventListener("click", checkLogin);