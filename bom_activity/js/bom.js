document.getElementById("lastmodified").innerHTML = document.lastModified;

function addItem() {
    var currentChap = document.getElementByClass("list");
    var listItem = document.getElementById("favchap");
    listItem.innerHTML = currentChap;
    var li = document.createElement("li");
    li.setAttribute('id', favchap.value);
    li.appendChild(document.createTextNode(listItem.value));
    currentChap.appendChild(li);
}
                                                                                            
function removeItem() {
var currentChap = document.getElementByClass("list");
var listItem = document.getElementById("favchap");
var item = document.getElementById(item.value);
currentChap.removeChild(item);
}

