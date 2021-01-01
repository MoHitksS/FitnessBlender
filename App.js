document.getElementById("btn").addEventListener("click",referpage)
function referpage(){
    window.location.href="discussion.html"
}
function updateData(){
    var com_div=document.getElementById("community-contents");
    var div=document.createElement("div");
    div.setAttribute("class","flex-row-content");
    

    com_div.append(div);
}

