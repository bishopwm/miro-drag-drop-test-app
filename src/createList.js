// Declare global variable array to house item names once they're dragged onto Miro board.
//const itemNames = [];

// Create list when 'Create' button is clicked from text input
// function createList(){
//     let listOne = document.getElementById('listOne').value
//     console.log(listOne);

//     miro.board.createFrame({
//         title: listOne,
//         style: {
//           fillColor: '#ffffff',
//         },
//         x: 400, 
//         y: 0, 
//         width: 1800,
//         height: 4000,
//       });
// }

// createList();

// Retrieve the number of items on the board and push the title of each item into itemNames array for global use
// async function getListContents(){
//     // Get items from the board
//     const items = await miro.board.get();

//     let images = 0;
//     items.forEach((items) => {
//       switch (items.type) {
//         case 'image':
//           images++;
//       }
//     });
//     //alert("You have " + images + " items in your list. Time to go shopping. :) ")  
//     document.getElementById("item-count").innerHTML = images

//     // retrieve `title` for each item (image) on board
//     items.forEach((items) => {
//       itemNames.push(items.title)
//     });

// }

// getListContents();


// Retrieve details about items on board

// function getItems(){
//   console.log("Gathering items");
//   getListContents()
//   console.log(itemNames);

//   // For each item in the itemNames array, add to list in HTML/panel when "Get Items" button is clicked.
//   for (let i=0; i<itemNames.length; i++){
//     console.log(itemNames[i])
//     document.getElementById("items-list").innerHTML += `${itemNames[i]}<br>`
//   }
// }

// getItems()

// Notes: 
//
// - getItems is still dependent on getListContents running first. Otherwise, itemNames array will be empty when you go to getItems.
// - List name will be returned as the last item, as it's the first item added to the board each time. Need to remove it from the equation.
// - Need to resolve "Uncaught TypeError: Cannot read poperties of null (reading 'value')" error
// - Need to add support for multiple lists/frames
// - Ultimately, need to read items from frame, not board (will solve for point re: list name included in item list too)



// App Cards Playground

async function createAppCard(){

  let cardTitle = document.getElementById('card-title').value;
  let cardDescription = document.getElementById('card-description').value;
  let cardTag1 = document.getElementById('tag-name-1').value;
  let cardTag1Tooltip = document.getElementById('tag-tooltip-1').value;
  let cardTag2 = document.getElementById('tag-name-2').value;
  let cardTag2Tooltip = document.getElementById('tag-tooltip-2').value;
  
  let cardIcon = document.getElementById('card-icon').value;
  //console.log("app card! with name" + cardTitle)

  const appCard = await miro.board.createAppCard({
    title: cardTitle,
    description: cardDescription,
    style: {
      cardTheme: '#2d9bf0',
    },
    fields: [
      {
        value: cardTag1,
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/646/646094.png',
        iconShape: 'square',
        fillColor: '#FBE983',
        textColor: '#F83A22',
        tooltip: cardTag1Tooltip,
      },
      {
        value: cardTag2,
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/580/580740.png',
        iconShape: 'round',
        fillColor: '#F8D878',
        textColor: '#503000',
        tooltip: cardTag2Tooltip,
      }
    ],
    x: 2000,
    y: 2000,
    width: 320,
    rotation: 0.0,
  });

  // Output the created item to the developer console
  console.log(appCard);
}

createAppCard();