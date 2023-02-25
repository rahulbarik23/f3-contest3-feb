
const users = JSON.parse(localStorage.getItem('users')) || []

if(localStorage.getItem('currentUser'))
{
    window.location.href = "dashboard.html"
}

let signupform = document.getElementById("Tsignup")

signupform.addEventListener("submit", function(e)
{
    e.preventDefault();

    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("password").value;
    let confpwd = document.getElementById("confpassword").value;

    let alert = document.getElementById("alert")

    if(name === "")
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Name cannot be EMPTY!"
    }
    else if(email.indexOf('@') == -1)
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Email should contain an '@'"
    }
    else if(pwd === "" && confpwd === "")
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Password Fields cannot be EMPTY!"
    }
    else if(pwd !== confpwd)
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Password do not match. Try again!"
    }
    else
    {
        const user = {name, email, pwd};
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users))

        alert.classList.remove("hide");
        alert.innerHTML = "Form submitted SUCCESSFULLY! Login to CONTINUE!"
        alert.style.color = "green"

        console.log(user);
        console.log(users);
        
        signupform.reset();
    }
});

