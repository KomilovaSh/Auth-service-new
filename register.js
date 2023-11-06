const name=document.getElementById('name');
const surname=document.getElementById('surname');
const age=document.getElementById('age');
const username=document.getElementById('username');
const password=document.getElementById('password');
const repassword=document.getElementById('repassword');
const btn=document.getElementById('btn');
const lang=document.querySelectorAll('input.languages');

function validate (){
    if(!name.value){
        name.style.outlineColor='red';
        name.focus();
        return;
    }
    if(!username.value){
        username.style.outlineColor='red';
        username.focus();
        return;
    }

    if(!password.value){
        password.style.outlineColor='red';
        password.focus();
        return;
    }
    if(!repassword.value){
        repassword.style.outlineColor='red';
        repassword.focus();
        return;
    }

   
    if(password.value!=repassword.value){
        alert("Parollar bir xil kiritilmadi");
        password.value='';
        repassword.value='';
    }
}

function clearValue(){
    name.value='';
    surname.value='';
    username.value='';
    age.value='';
    password.value='';
    repassword.value='';
    lang.forEach(el =>{
        el.checked=false;
    })
}
function creativeUserObject(){
    let user ={};
       user.name=name.value;
       user.surname=surname.value;
       user.age=age.value;
       user.username=username.value;
       user.password=password.value;
       user.lang=[];
       lang.forEach(el =>{
        if(el.checked){
          user.lang.push(el.value);
        }
       });
       let data=localStorage.getItem('users')?JSON.parse(localStorage.getItem('data')):[];
       if (data.length){
          data.forEach(el =>{
            if (el.username==user.username){
                alert("Bunday foydalanuvchi yo'q!");
                username.value='';
                username.focus();
                username.style.outlineColor='red';
                return;
            }
                
          })
       }
        data.push(user);
        localStorage.setItem('users', JSON.stringify(data));
        clearValue;
       }


btn.addEventListener('click', function(){
       validate();
       creativeUserObject();
       console.log(user);
});

// let data=[
//     {
//         id:1,
//         name: "Ali",
//         surname: "Vali",
//         age: 15,
//         username: "G'ani",
//         password: 12345,
//         lang: [
//             'uzbek', 'english'
//         ]
//     },
//     {
//         id:1,
//         name: "Alex",
//         surname: "Une",
//         age: 18,
//         username: "John",
//         password: 12345,
//         lang: [
//             'uzbek', 'english'
//         ]
//     },
// ]