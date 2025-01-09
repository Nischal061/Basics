let username=document.getElementById('user');
let password=document.getElementById('pass');
let dashboard = document.getElementById('dash');


function login(){
    if (username.value=='Admin' && password.value==='Admin@123'){
        alert('Login Successfull')
        window.location.replace(index.html)
        
    }
    else{alert('Incorrect Username or password');
    }
}