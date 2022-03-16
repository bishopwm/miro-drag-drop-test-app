const itemIds = [];

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

    // retrieve `id` for each item on board
    items.forEach((items) => {
      itemIds.push(items.title)
    });

}

getListContents();

// Run sync job

function getItems(){
  console.log("Run sync initiated");
  
  //let knownObject = document.getElementById("beer");
  //console.log(knownObject) 

  console.log(itemIds)

  //let boardItems = await miro.board.get();
  //console.log(items)

  //console.log("images from getListContents" + images)
  //return(`<p>paragraph with ${itemIds[0]}</p>`)

  document.getElementById("items-list").innerHTML = `First Item ID: ${itemIds[0]}`

}

getItems();

// Print Item Ids to the panel on click for "Get Items"
// Next: Get items (images) text equivalent and print it to the panel