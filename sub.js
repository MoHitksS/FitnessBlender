document.getElementById("btn-1").addEventListener("click",function get(event){
    event.preventDefault();
   
    var x = document.getElementById("topic").selectedIndex;
    var y=document.getElementById("subtopic").selectedIndex;
    console.log(x);
    console.log(y);
    console.log(document.getElementsByTagName("option")[x].value);


});

// function getdata(event){

//     event.preventDefault();
//     console.log(cicked)
//     var x = document.getElementById("topic").selectedIndex;
//     console.log(x)
//     alert(document.getElementsByTagName("option")[x].value);
// }