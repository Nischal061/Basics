let u = 'Admin' ;
let p = 1;
 

let username =function(){
    document.getElementById('user')
}
let password = function(){
    document.getElementById('pass')
}

document.getElementById('btn').onclick=function(){
    if (u==username && p==password){
        console.log('Success')
    }
    else console.log('Error') ;   
}

// if (name==username || pass==password){
//     console.log('Success')
// }
// else console.log('Error') ;