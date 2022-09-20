const output = document.querySelector('.output')
const email = document.getElementById("email")
const password = document.getElementById("password")
const myForm = document.getElementById("myForm")

myForm.addEventListener('submit', function(e){
    e.preventDefault()
    if (email.value.length === 0 || password.value.length === 0){
        output.innerHTML = '<div class="alert alert-danger" role="alert">Please fill the required fields</div>'
    }
    else {
        if(JSON.parse(localStorage.getItem('kapex'))) {
            let kapexUsers = JSON.parse(localStorage.getItem('kapex'))
            if (kapexUsers.email === email.value && kapexUsers.password === password.value){
                output.innerHTML = '<div class="alert alert-success" role="alert">Login successful</div>'
                window.location.href = 'dashboard.html'
            }
            else {
                output.innerHTML = '<div class="alert alert-danger" role="alert">Invalid Email/Password</div>'
            }
        }
    }

})