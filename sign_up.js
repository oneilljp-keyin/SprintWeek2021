function main(){
    let first_name = document.getElementById('first_n').value;
    let last_name = document.getElementById('last_n').value;
    let birthday = document.getElementById('birth').value;
    let email = document.getElementById('email').value.indexOf("@");
    let password = document.getElementById('password');
    let confirm = document.getElementById('confirm_pass');
    
    let err = document.getElementById('error');

    if (email == -1) {
        alert("Not a valid e-mail!");
        submitOK = "false";
      }
    

    if(password.value != confirm.value){
        err.innerHTML = "Passwords do not match";
        // throw "Passwords do not match"
    }
}
