const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
confirmPasswordInput.addEventListener('input',(e) => {
    if(e.target.value == passwordInput.value){
        console.log('matching');
        confirmPasswordInput.setCustomValidity("");
    } else{
        console.log('not matching');        
        confirmPasswordInput.setCustomValidity("Input cannot be empty.");
    }
});