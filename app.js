const user = document.querySelector('#user')
const password = document.querySelector('#passwor')
const check = document.querySelector('#check')
const btnSave = document.querySelector('#btnSave')

user.value = localStorage.getItem('userdata')

btnSave.onclick = () => {

    if( user.value.length > 3){
        if(check.checked){
            localStorage.setItem('userdata', user.value)
        }

    document.location.href="pagina.html"
    }

    
    
}