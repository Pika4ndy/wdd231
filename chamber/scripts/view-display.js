const gridButton = document.getElementById("gridViewButton");
const listButton = document.getElementById("listViewButton");
const memberList = document.getElementById("memberList");

gridButton.addEventListener("click", (e)=> {
    memberList.classList.remove("list");
    memberList.classList.add("grid");
});

listButton.addEventListener("click", (e)=> {
    memberList.classList.remove("grid");
    memberList.classList.add("list");
});