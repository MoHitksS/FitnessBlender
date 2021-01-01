
document.getElementById("btn-1").addEventListener("click",(event)=>{
    event.preventDefault();
    var topic = document.getElementById("topic").selectedIndex;
    var title=document.getElementById("title").value;
    var message=document.getElementById("Message").value;
    localStorage.setItem("topic",document.getElementsByTagName("option")[topic].value);
    localStorage.setItem("title",title);
    localStorage.setItem("message",message);
    referpage()
    
    

});

function referpage(){
    
    window.location.href="Community.html"
}