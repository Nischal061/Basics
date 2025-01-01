let username=document.getElementById('user').value;
let password=document.getElementById('pass').value;

function login(){
    if (username.value=='Admin' && password.value==='Admin@123'){
        alert('Login Successfull')
    }
    else{alert('Incorrect Username or password');
    }
}