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
    // let userSlot = users.slot
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
