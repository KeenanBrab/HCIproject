// Name and Password from the register-form
var name = document.getElementById('userName');
var pw = document.getElementById('userPw');



// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var studentPass = "password"
    var studentName = "student"

    var teacherPass = "password"
    var teacherName = "teacher"

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    //
    if(userName.value == studentName){
        if(userPw.value == studentPass ){
            window.location.replace("indexStu.html");
        }else{
            alert('ERROR.');
        }
    } else if(userName.value == teacherName){
        if(userPw.value == teacherPass ){
            window.location.replace("index.html");
        }else{
            alert('ERROR.');
        }
    }else{
        alert('ERROR.');
    }
    
}