let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let myTable = document.getElementById('table'); //brings the table over and creates a new variable
    let row = myTable.insertRow(1); //header row is at position 0, so first inserted row needs to be 1
    row.setAttribute('id', `item-${id}`); //this gives each row it's own id
    row.insertCell(0).innerHTML = document.getElementById('new-title').value; //inserting the user inputted data into the first cell of the row
    row.insertCell(1).innerHTML = document.getElementById('new-author').value //inserting the user inputted data into the second cell of the row
    row.insertCell(2).innerHTML = document.getElementById('new-rating').value; //inserting the user inputted data into the third cell of the row
    
    // let newRating = row.insertCell(2);
    // newRating.appendChild(reviewStars(num));

    row.insertCell(3).innerHTML = document.getElementById('new-finish-date').value; //inserting the user inputted date into the fourth cell of the row
    let remove = row.insertCell(4); //puts the button created by the function below into the fifth cell of the row
    remove.appendChild(createDeleteButton(id++)); //attaching the function to create a delete button to the remove variable (which is inserted into it's appropriate cell)


    document.getElementById('new-title').value = ''; //resets field to empty
    document.getElementById('new-author').value = ''; //resets field to empty
    document.getElementById('new-rating').value = ''; //resets field to empty
    document.getElementById('new-finish-date').value = ''; //resets date field
});

function createDeleteButton(id) { //creating a button in the virtual DOM
    let btnRemove = document.createElement('button'); //pulling the HTML button into JS and giving it a variable
    btnRemove.className = 'btn btn-success'; //giving the variable a class name
    btnRemove.id = id; //and an id, so that each button has it's own
    btnRemove.innerHTML = 'Adios libro'; //what the button says
    btnRemove.addEventListener ('click', () => { //the button's function
        console.log(`Removing row with id: item-${id}`); //removed the row with selected id
        let elementToDelete = document.getElementById(`item-${id}`); //puts that row into a variable
        elementToDelete.parentNode.removeChild(elementToDelete);
    });
    return btnRemove;
};



const card = document.getElementById('card');
card.style.backgroundColor = 'lightBlue';
card.style.maxWidth = '600px';
card.style.border = '3px groove darkGray';
card.style.boxShadow = '2px 2px 2px grey';

const rating = document.getElementById('rating');
rating.style.maxWidth = '300 px';







// function reviewStars(num) {
//     if (num >= 1 && num <= 5) {





        
//     } else {
//         return 'Try again please.'
//     }
// }
// console.log(reviewStars);









