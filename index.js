let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let myTable = document.getElementById('table'); //brings the table over and creates a new variable
    let row = myTable.insertRow(1); //header row is at position 0, so first inserted row needs to be 1
    row.setAttribute('id', `item-${id}`); //this gives each row it's own id
    row.insertCell(0).innerHTML = document.getElementById('new-title').value; //inserting the user inputted data into the first cell of the row
    row.insertCell(1).innerHTML = document.getElementById('new-author').value //inserting the user inputted data into the second cell of the row
    row.insertCell(2).innerHTML = document.getElementById('book-notes').value //inserting the user inputted data into the third cell of the row
    row.insertCell(3).innerHTML = document.getElementById('new-finish-date').value; //inserting the user inputted date into the fourth cell of the row
    let remove = row.insertCell(4); //puts the button created by the function below into the fifth cell of the row
    remove.appendChild(createDeleteButton(id++)); //attaching the function to create a delete button to the remove variable (which is inserted into it's appropriate cell)
    let edit = row.insertCell(5);
    edit.appendChild(createEditButton(id++));



    document.getElementById('new-title').value = ''; //resets field to empty
    document.getElementById('new-author').value = ''; //resets field to empty
    document.getElementById('book-notes').value = ''; //resets field to empty
    document.getElementById('new-finish-date').value = ''; //resets date field
});

function createDeleteButton(id) { //creating a button in the virtual DOM
    let btnRemove = document.createElement('button'); //pulling the HTML button into JS and giving it a variable
    btnRemove.className = 'btn btn-light'; //using bootstrap to style the button
    btnRemove.id = id; //and an id, so that each button has it's own
    btnRemove.innerHTML = 'Adios libro'; //what the button says
    btnRemove.addEventListener ('click', () => { //the button's function
        console.log(`Removing row with id: item-${id}`); //removed the row with selected id
        let elementToDelete = document.getElementById(`item-${id}`); //puts that row into a variable
        elementToDelete.parentNode.removeChild(elementToDelete);
    });
    return btnRemove;
};

// edit button on click 
// create new card
// auto populate current values for fields
// user changes what they want then clicks Submit
// submit adds the changed values back into the table


function createEditButton(id) {
    let btnEdit = document.createElement('button'); //creates edit button
    btnEdit.className = 'btn btn-light'; //uses bootstrap to style it
    btnEdit.id = id; //gives it an id 
    btnEdit.innerHTML = 'Edit'; //what the button itself says

    btnEdit.addEventListener('click', () => { //adding an event listener that, on a click, will perform the below function
        console.log(`Editing row with id: item-${id}`);
        let elementToEdit = document.getElementById(`item-${id}`); //puts the row we want to edit into a variable

        //take the information from the row and put it into the form
        let editForm = document.getElementById('card-body');
        editForm.appendChild(elementToEdit);


     });
     return btnEdit;

    };







const card = document.getElementById('card');
card.style.backgroundColor = 'lightBlue';
card.style.maxWidth = '600px';
card.style.border = '3px groove darkGray';
card.style.boxShadow = '2px 2px 2px grey';

const header = document.getElementById('header');
header.style.boxShadow = '3px 3px 2px grey';
header.style.color = 'dark blue';
header.style.textShadow = '1px 1px 1px grey';

const body = document.getElementById('body');
body.style.backgroundColor = '#F1F1E8';
body.style.fontFamily = 'serif';







