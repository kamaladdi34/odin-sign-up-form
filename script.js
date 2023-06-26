const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
confirmPasswordInput.addEventListener('input',validatePasswords);
passwordInput.addEventListener('input',validatePasswords);
function validatePasswords(){
    if(confirmPasswordInput.value == passwordInput.value){
        console.log('matching');
        confirmPasswordInput.setCustomValidity("");
    } else{
        console.log('not matching');        
        confirmPasswordInput.setCustomValidity("Passwords don't match");
    }
}