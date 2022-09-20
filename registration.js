// Select the ids
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const myForm = document.getElementById("myForm")
const output = document.querySelector(".output")

myForm.addEventListener("submit", function (e) {
    e.preventDefault()
    if(username.value.length === 0){
        output.innerHTML = '<div class="alert alert-danger" role="alert">Please enter a username</div>'
        output.style.color = "red"
        output.style.fontSize = "1.9rem"
        output.style.fontFamily = "roboto"
    }
    else if(email.value.length === 0){
        output.innerHTML = '<div class="alert alert-danger" role="alert">Please enter your email</div>'
        output.style.color = "red"
        output.style.fontSize = "1.9rem"
        output.style.fontFamily = "roboto"
    }
    else if(password.value.length === 0){
        output.innerHTML = '<div class="alert alert-danger" role="alert">Please enter a password</div>'
        output.style.color = "red"
        output.style.fontSize = "1.9rem"
        output.style.fontFamily = "roboto"
    }
    else if(password.value.length > 6 ){
        output.innerHTML = '<div class="alert alert-danger" role="alert">Password cannot exceed six characters</div>'
        output.style.color = "red"
        output.style.fontSize = "1.9rem"
        output.style.fontFamily = "roboto"
    }
    else{
        output.innerHTML = '<div class="alert alert-success" role="alert">Registered successfully</div>'
        output.style.color = "green"
        output.style.fontSize = "1.9rem"
        output.style.fontFamily = "roboto" 
        window.location.href = 'login.html'
    }
    let newUser = {
        username: username.value,
        email: email.value,
        password: password.value
    }
    localStorage.setItem("kapex", JSON.stringify(newUser))
})
