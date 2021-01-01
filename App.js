document.getElementById("btn").addEventListener("click",referpage)
function referpage(){
    window.location.href="discussion.html"
}
function updateData(){
    var com_div=document.getElementById("community-contents");
    var div=document.createElement("div");
    
    var data=`<div class="flex-row-content">
    <div>
        <a class="anc" href="">${localStorage.getItem("title")}</a>
        <P>By Fitness Blender</P>
    </div>
    <div>
        <p>FB Team / Announcements</p>
    </div>
    <div>
        <p>1</p>
    </div>
    <div>
        <p>57</p>
    </div>
</div>`;

        div.innerHTML=data;
    com_div.append(div);
}
updateData();

