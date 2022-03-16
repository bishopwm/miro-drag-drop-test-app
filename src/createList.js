// Declare global variable array to house item names once they're dragged onto Miro board.
const itemNames = [];

// Create list when 'Create' button is clicked from text input
function createList(){
    let listOne = document.getElementById('listOne').value
    console.log(listOne);

    const frameOne = miro.board.createFrame({
        title: listOne,
        style: {
          fillColor: '#ffffff',
        },
        x: 400, 
        y: 0, 
        width: 1800,
        height: 4000,
      });
}

createList();

// Retrieve the number of items on the board and push the title of each item into itemNames array for global use
async function getListContents(){
    // Get items from the board
    const items = await miro.board.get();

    let images = 0;
    items.forEach((items) => {
      switch (items.type) {
        case 'image':
          images++;
      }
    });
    alert("You have " + images + " items in your list. Time to go shopping. :) ")  

    // retrieve `title` for each item (image) on board
    items.forEach((items) => {
      itemNames.push(items.title)
    });

}

getListContents();


// Retrieve details about items on board

function getItems(){
  console.log("Gathering items");
  console.log(itemNames);

  // For each item in the itemNames array, add to list in HTML/panel when "Get Items" button is clicked.
  for (let i=0; i<itemNames.length; i++){
    console.log(itemNames[i])
    document.getElementById("items-list").innerHTML += `${itemNames[i]}<br>`
  }
}

getItems()

// Notes: 
// - getItems is still dependent on getListContents running first. Otherwise, itemNames array will be empty when you go to getItems.
// - List name will be returned as the last item, as it's the first item added to the board each time. Need to remove it from the equation.
