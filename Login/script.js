let username=document.getElementById('user').value;
let password=document.getElementById('pass').value;

function login(){
    if (username.value=='Admin' && password.value==='Admin@123'){
        console.log('Login Successfull')
    }
    else{console.log('Incorrect Username or password');
    }
}