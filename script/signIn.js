
function submitBtn () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const checkbox = document.getElementById('checkbox')
    const data = JSON.parse(localStorage.getItem('userData'))
    console.log(password.length)
    if (username === "" && password === "") {
        alert("Please Enter all the field")
    }else {
        if (password.length > 6) {
            for(i in data) {
                if (data[i].user === username && data[i].pass === password) {
                    const x = document.getElementById('signInForm').action
                    document.getElementById('display').innerHTML = x
                }
            }
        }else{
            alert('Password should be more than 6 letters')
        }
    }
}


