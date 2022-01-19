let title = document.getElementById("title");

console.log(title);

title.classList.add("styleTitle");


let list = document.getElementById("list");

console.log(list);

list.classList.add("styleList");



function changeHeadline() {
    title.classList.add("newTitle");
}

function resetHeadline() {
    title.classList.remove("newTitle");
    title.classList.add("styleTitle");
}