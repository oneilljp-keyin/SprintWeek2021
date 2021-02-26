// Created on February 22, 2021 by John O'Neill
//
// This page will be a feed of comments and/or photos posted by a member

// -----------This is an example of how to store & retrieve an object in the local storage -------------------------
// localStorage.setItem('myObject', JSON.stringify({'prop1': "string", 'prop2': "string"}));
// let temp = JSON.parse(localStorage.get('myObject'));
// temp.prop1;
// -----------------------------------------------------------------------------------------------------------------

// This function will retrieve info from local storage to get name, join date, friends and followers.

function getTimeStamp() {
    let today = new Date(Date.now());
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let hh = String(today.getHours()).padStart(2, '0');
    let min = String(today.getMinutes()).padStart(2, '0');

    return yyyy+"-"+mm+"-"+dd+" "+hh+":"+min;
}

function userInfo() {

    // info stored as: User1#### {firstName, surName, email, joinDate, password, friends, followers}
    let user  = sessionStorage.getItem("userName");
    let joinDate = sessionStorage.getItem("joinDate");

    const monthNames = ["January", "February", "March",     "April",   "May",      "June",
                        "July",    "August",   "September", "October", "November", "December"];

    document.querySelector("#username").innerHTML  = user;

}

// will add posts to local storage, posts will then be reloaded to main page
function addPost() {
    let nextPostNum;
    console.log("This is a test");
    if (localStorage.getItem("nextPostNum") !== null) {
        nextPostNum = localStorage.getItem("nextPostNum");
    } else {
        nextPostNum = 10000;
        localStorage.setItem("nextPostNum", nextPostNum++);
    }

    let user  = sessionStorage.getItem("userName");
    let today = getTimeStamp();

    let post = document.getElementById("post-field").value;
    console.log(`This is another test: ${post}`);

    nextPostNum++;
    localStorage.setItem("nextPostNum", nextPostNum);
    localStorage.setItem(`post${nextPostNum}`, JSON.stringify({"author": user, "timestamp": today, "post": post}));

    document.querySelector("#post-field").value = "";

    displayPosts();
}

// will add comments to local storage, comments will then be reloaded to main page
function addComment(n) {
    let postNum = n;
    console.log(`Will This Work?? (${postNum})` );

    let nextCommentNum;
    console.log("This is another test");
    if (localStorage.getItem("nextCommentNum") !== null) {
        nextCommentNum = localStorage.getItem("nextCommentNum");
    } else {
        nextCommentNum = 10000;
        localStorage.setItem("nextPostNum", nextCommentNum++);
    }

    let user  = sessionStorage.getItem("userName");
    let today = getTimeStamp();

    let comment = document.getElementById(`comment-field${postNum}`).value;

    nextCommentNum++;
    localStorage.setItem("nextCommentNum", nextCommentNum);

    localStorage.setItem(`comment${postNum}${nextCommentNum}`, JSON.stringify({"author": user, "timestamp": today, "comment": comment}));
    document.getElementById(`comment-field${postNum}`).value = "";

    displayPosts();

}

// function will load posts to the page on first load and anytime a post or comment is added.
function displayPosts() {

    document.getElementById("feed-posts").innerHTML = "";

    for (let num = 11000; num > 10000; num--) {
        if (localStorage.getItem(`post${num}`) !== null) {
            // posts are store as post1####: author, timestamp, post
            let post = JSON.parse(localStorage.getItem(`post${num}`));

            let newPost = document.createElement("div");
            newPost.id = `post${num}`;
            newPost.className = "post";
            newPost.innerHTML += `<div class="user-info"><img src="images/avatar.png" height="25" />&nbsp;${post.author} (${post.timestamp})</div>`;
            newPost.innerHTML += `<div class="post-info">"${post.post}"</div>`;
            newPost.innerHTML += `<div class="sub-comments"><input id="comment-field${num}" class="comment-field" type="text" value="" placeholder="What Ya Got To Say About That??" /><input id="submit-comment${num}" class="comment-button" type="submit" value="Comment" /></div>`;
            newPost.innerHTML += `<div id="comments${num}"></div>`;
        
            document.getElementById("feed-posts").appendChild(newPost);
        
            document.querySelector(`#submit-comment${num}`).addEventListener("click", function() {
                addComment(num);
            });

            for (let nextNum = 10000; nextNum < 11000; nextNum++) {
                if (localStorage.getItem(`comment${num}${nextNum}`) !== null) {
                    let comment = JSON.parse(localStorage.getItem(`comment${num}${nextNum}`));

                    let newComment = document.createElement("div");
                    newComment.id = `comment${num}${nextNum}`;
                    newComment.className = "comment-box";
                    newComment.innerHTML = `<img src="images/avatar.png" height="15" />`;
                    newComment.innerHTML += `&nbsp;${comment.author} (${comment.timestamp})`;
                    newComment.innerHTML += `<br />"${comment.comment}"`;
                
                    document.getElementById(`comments${num}`).appendChild(newComment);
                
                }
            }
        }    
    }
}

// when logout is pressed, function will erase the session storage information, will probably add a function
// to check if this data is available to validate login
function eraseSession() {
    sessionStorage.clear();
    window.location.href = "index.html";
}

window.addEventListener("load", userInfo);
window.addEventListener("load", displayPosts);

document.querySelector("#submit-post").addEventListener("click", addPost);
document.querySelector("#logout_all").addEventListener("click", eraseSession);