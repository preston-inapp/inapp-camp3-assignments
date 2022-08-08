const fname = document.getElementById("form-name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const password = document.getElementById("pass")

function nameValidation () {
    if(!fname.value) {
        fname.style.border = '2px solid'
        fname.style.borderColor = 'red'
        document.getElementById("name-val").innerHTML = "Enter full name"
        document.getElementById("name-val").style.color = 'red'
    }
}

function emailValidation () {
    if(!email.value) {
        email.style.border = '2px solid'
        email.style.borderColor = 'red'
        document.getElementById("email-val").innerHTML = "Enter valid email"
        document.getElementById("email-val").style.color = 'red'
    }
}

function phoneValidation () {
    if(!phone.value) {
        phone.style.border = '2px solid'
        phone.style.borderColor = 'red'
        document.getElementById("phone-val").innerHTML = "Enter valid phone number"
        document.getElementById("phone-val").style.color = 'red'
    }
}

function passwordValidation () {
    if(!password.value) {
        password.style.border = '2px solid'
        password.style.borderColor = 'red'
        document.getElementById("pass-val").innerHTML = "Enter a strong password"
        document.getElementById("pass-val").style.color = 'red'
    }
}

function validateForm() {
    nameValidation()
    emailValidation()
    phoneValidation()
    passwordValidation()
}