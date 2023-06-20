//your code here!
let list = document.getElementById("infi-list");

for(let i = 1; i <= 10;i++){
	var listItem = document.createElement("li");
	 listItem.innerHTML = "Item" + i 
	list.appendChild(listItem);
}

function addMoreItems() {
  let scrollPosition = window.innerHeight + window.pageYOffset;
  let listHeight = list.offsetHeight;

  if (scrollPosition >= listHeight) {
    // Add 2 more list items
    for (let i = 1; i <= 2; i++) {
      let listItem = document.createElement("li");
      listItem.textContent = "Item " + (list.children.length + i);
      list.appendChild(listItem);
    }
  }
}

// Event listener to trigger the addition of more items when scrolling
window.addEventListener("scroll", addMoreItems);