const btn_login = document.getElementById("btn-main");

btn_login.addEventListener("click",(e)=>{
    e.preventDefault();

    const user = document.getElementById("user");

    const response = confirm(`Tem certeza de que quer fazer login com o usuario ${user.value}?`);
    
    if(response){
        alert(`Olá, ${user.value}!:)`);
    }else if(!response){
        alert("Tchau")
    }
});