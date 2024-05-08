const card = document.getElementById('card');
card.style.backgroundColor = 'lightBlue';
card.style.maxWidth = '600px';
card.style.border = '3px groove darkGray';
card.style.boxShadow = '2px 2px 2px grey';



let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let finishedDate = new Date();  //creates a new date, defaults to current day
    let myTable = document.getElementById('table'); //brings the table over and creates a new variable
    let row = myTable.insertRow(1); //header row is at position 0, so first inserted row needs to be 1
    row.setAttribute('id', `item-${id}`); //I'M NOT SURE WHAT THIS DOES//
    row.insertCell(0).innerHTML = document.getElementById('new-title').value; //inserting in the first column (0) the innerHTML value from 'new-title'
    row.insertCell(1).innerHTML = document.getElementById('new-author').value //inserting in the second column (1) the innerHTML value from 'new-author'
    row.insertCell(2).innerHTML = /*Read? */
    row.insertCell(3).innerHTML = document.getElementById('new-rating').value; //inserting in the fourth column (3) the innerHTML value from 'new-rating'
    row.insertCell(4).innerHTML = document.getElementById('new-finish-date').value;

    document.getElementById('new-title').value = ''; //resets field to empty
    document.getElementById('new-author').value = ''; //resets field to empty
    document.getElementById('new-rating').value = ''; //resets field to empty
    document.getElementById('new-finish-date').value = ''; //resets date field

    let actions = row.insertRow(5);
    actions.appendChild(createDeleteButton(id++)); //creating a delete button with a function (below)
    document.getElementById('new-task').value = ''; //setting 'new-task' input back to clear for user experience
})

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Remove';
    btn.onclick = () => {
        console.log(`Remvoing row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
}










// function createDeleteButton(id) {       //delete button function -- creating a new element (delete button)
//     let btn = document.createElement('button');  //creating a new button
//     btn.className = 'btn btn-primary'; //button's class name
//     btn.id = id;  //button's id
//     btn.innerHTML = 'Delete'; //what the button says
//     btn.onclick = () => {  //on the click the button with delete the row 
//         console.log(`Deleting row with id: item-${id}`);
//         let elementToDelete = document.getElementById(`item-${id}`);
//         elementToDelete.parentNode.removeChild(elementToDelete);
//     };
//     return btn;








