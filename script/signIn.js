// function check(form) {
    // const data = JSON.parse(localStorage.getItem('userData'))
    
//         if (form.userid.value == "" || form.pswrd.value == "") {
//             alert("Please Enter all the Details")
//         }else {
//             if (form.pswrd.value.length > 6) {
//                 // for(i in data) {
//                     if(form.userid.value == "myuserid" && form.pswrd.value == "password"){
//                         window.open('afterLoginLanding.html','_self')
//                     }
//                     else{
//                         alert("Error Password or Username")
//                     }
//                 // }
//             }else{
//                 alert('Password should be more than 6 letters')
//             }
//         }   
// }   

function check(form)
    {
        if(form.userid.value == "myuserid" && form.pswrd.value == "password")
        {
            window.open('afterLoginLanding.html','_self')
        }
        else
        {
            alert("Error Password or Username")
        }
    }