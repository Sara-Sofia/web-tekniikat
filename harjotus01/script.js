
//Basic 1:
let node = document.querySelector("#content");
console.log(node.tagName);
//Basic 2:
let node2=document.querySelector(".basic");
console.log(node2.tagName);
//Basic 3:
let node3=document.querySelector("li.basic");
console.log(node3.textContent);
//Basic 4:
let node4=document.querySelector("li:last-child");
console.log(node4.textContent);
//end of the Basic tasks

//Collections 1:
let writing=document.querySelectorAll("body *");
for (const elem of writing) {
    console.log(elem.nodeName);
}
//collections 2:
let pelems=document.querySelectorAll("article p");
for (const elem of pelems) {
    console.log(elem.textContent);
    
}
let list=document.querySelectorAll("li");
for (const listItem of list) {
    listItem.textContent="John Doe";
}
let harj4Elems=document.querySelectorAll("#content *");
for (const elem of harj4Elems) {
    if(elem.textContent.length > 10){
        console.log(elem.nodeName);
    }

}