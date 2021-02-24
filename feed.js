// Created on February 22, 2021 by John O'Neill
//
// This page will be a feed of comments and/or photos posted by a member

// -----------This is an example of how to store & retrieve an object in the local storage -------------------------
// localStorage.setItem('myObject', JSON.stringify({'prop1': "string", 'prop2': "string"}));
// let temp = JSON.parse(localStorage.get('myObject'));
// temp.prop1;
// -----------------------------------------------------------------------------------------------------------------

// This function will retrieve info from local storage to get name, join date, friends and followers.

function userInfo() {

    // info stored as: User1#### {UserName, JoinDate, password, friends, followers}
    let user  = JSON.parse(localStorage.getItem("User10000"));
    let joinDate = new Date(user.joinDate);

    const monthNames = ["January", "February", "March",     "April",   "May",      "June",
                        "July",    "August",   "September", "October", "November", "December"];

    document.querySelector("#username").innerHTML  = user.userName;
    document.querySelector("#userSince").innerHTML = "Member Since: " + monthNames[joinDate.getMonth()] + " " + joinDate.getFullYear();
    document.querySelector("#friends_followers").innerHTML = "Friends: " + user.friends + " - Followers: " + user.followers;
}

function addPost() {
    let nextPostNum;
    console.log("This is a test");
    if (localStorage.getItem("nextPostNum") !== null) {
        let nextPostNum = localStorage.getItem("nextPostNum");
    } else {
        nextPostNum = 10000;
        localStorage.setItem("nextPostNum", nextPostNum);
    }

    let post = document.getElementById("post").value;
    console.log("This is another test");

}

window.addEventListener("load", userInfo);

document.querySelector("#submit-post").addEventListener("click", addPost);