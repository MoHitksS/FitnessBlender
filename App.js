document.getElementById("btn").addEventListener("click",referpage)
function referpage(){
    window.location.href="community-sub.html"
}
document.getElementById("btn-1").addEventListener("click",getdata);

function getdata(){
    
    console.log(cicked)
    var x = document.getElementById("topic").selectedIndex;
    console.log(x)
    alert(document.getElementsByTagName("option")[x].value);
}