// localStorage.set('myObject', JSON.stringify({'prop1': "string", 'prop2': "string"}));
// let temp = JSON.parse(localStorage.get('myObject'));
// temp.prop1;

function userInfo() {
    let user  = JSON.parse(localStorage.getItem("User0001"));
    let joinDate = new Date(user.JoinDate);

    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];

    document.querySelector("#username").innerHTML = user.UserName;
    document.querySelector("#userSince").innerHTML = "Member Since: " + monthNames[joinDate.getMonth() - 1] + " " + joinDate.getFullYear();
    document.querySelector("#friends_followers").innerHTML = "Friends: " + user.friends + " - Followers: " + user.followers;

}

window.addEventListener("load", userInfo);