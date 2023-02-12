document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;

    const passwordField = document.getElementById('password-field');
    const password =passwordField.value;

    if( email ==='maruf@gmail.com' && password === 'maruf'){
        window.location.href='banks.html';
    }else{
        alert('password vule gecos toke bank a dhukte dibho nh');
    }
    
    
})