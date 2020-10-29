//create a variable for lists tag
const lists = document.getElementById("lists");

//create a variable/array for all the children in lists
const listsChildren = [...lists.children];

const slots = ["first", "second", "third"];

const users = [
  { id: 1, name: "moe", slot: "first" },
  { id: 2, name: "larry", slot: "second" },
  { id: 3, name: "curly", slot: "third" },
  { id: 4, name: "lucy", slot: "third", selected: true },
];

const firstBox = document.getElementById("first-list");
const secondBox = document.getElementById("second-list");
const thirdBox = document.getElementById("third-list");

function renderUsers() {
  for (let i = 0; i < users.length; i++) {
    const user = document.createElement("li");
    user.innerHTML = users[i].name;
    user.id = users[i].id;
    if (users[i].slot === "first") {
      firstBox.appendChild(user);
    }
    if (users[i].slot === "second") {
      secondBox.appendChild(user);
    }
    if (users[i].slot === "third") {
      thirdBox.appendChild(user);
    }
  }
}

function clearUsers() {
  //if any child of lists is a <li> then remove child
  listsChildren.forEach((child) => {
    [...child.children].forEach((childElem) => {
      if (childElem.nodeName === "LI") {
        child.removeChild(childElem);
      }
    });
  });
}

lists.addEventListener("click", (event) => {
  //if element is a <P>...
  if (event.target.nodeName === "LI") {
    //console.log(event.target.className)
    //if LI has a classname called selected
    if (event.target.className === "selected") {
      //rename it to empty string and make it selected property false
      event.target.className = "";
      event.target.selected = false;
    } else {
      //otherwise, give it the selected class and create a selected property/rename with a true value
      event.target.className = "selected";
      event.target.selected = true;
    }
  }
});

//when clicked inside of lists...
lists.addEventListener("click", (event) => {
  //if a button is clicked..
  if (event.target.nodeName === "BUTTON") {
    //variable for the buttons parent
    const parentNode = event.target.parentElement;
    //variable for parents next sibling
    const nextParent = parentNode.nextElementSibling;
    //variable for parents previous sibling
    const previousParent = parentNode.previousElementSibling;
    //array of all siblings in the buttons box
    const boxChildren = [...event.target.parentElement.children];

    //for each sibling (or children of the box with the button tag)
    boxChildren.forEach((child) => {
      if (child.nodeName === "LI" && child.className === "selected") {
        //rename the slot of each user to the next or previous parents id# name
        if (event.target.className === "move-right") {
          users[child.id - 1].slot = nextParent.id;
          //console.log('this is child', child)
        } else if (event.target.className === "move-left") {
          users[child.id - 1].slot = previousParent.id;
          //child.slot = previousParent.id
          // console.log('this is child', child)
          // console.log(users)
        }
      }
      //now that users all have different slot names, append elements
      renderUsers();
    });
  }
});

renderUsers();

/*My Notes when you first hit the page, data should be  interpreted and injected
into the site. 

1) Take array of Obj and inject into site
2) function that creates those objects in the correct positions. 
3) when button is cliekd, dataset is modified...and 're-render" and re-run the function
4) "If clicked first column right arrow, foreach() or map thru the users object ....updating any object that has slots 
equal to first and move it to the 2nd slot"
5) iterate thru the object 
6) re-run initial function that you started the website with (could clear all columns and re-render)
7) 

*/
//"state mgmt in react"
