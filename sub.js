

document.getElementById("btn-1").addEventListener("click",(event)=>{
    event.preventDefault();
    var topic = document.getElementById("topic").selectedIndex;
    var subtopic=document.getElementById("subtopic").selectedIndex;
    var title=document.getElementById("title").value;
    var message=document.getElementById("Message").value;
    // console.log(message);
    localStorage.setItem("topic",document.getElementsByTagName("option")[topic].value);
    localStorage.setItem("title",title);
    localStorage.setItem("message",message);
    var h1=document.getElementById("subtopic");
    console.log(h1)
    

});