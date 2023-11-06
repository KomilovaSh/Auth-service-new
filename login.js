const username=document.getElementById('username');
const password=document.getElementById('password');
const btn=document.getElementById('btn');
function validate (){
    
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

}
btn.addEventListener('click', function(){
   validate();
   let data =localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[];
   if(data.length){

   }else{
    alert("Ro'yhatdan o'tmagansiz");
   }
})