//grabbing all elements from html file

const input = document.getElementById('countryInput');
const addBtn = document.getElementById('add');
const list = document.getElementById('countryList')


//creating add to list function and checking for duplicate entries
function handleAdd(){
    // alert("Add button is working")
    const country = input.value.trim();
    if (country === ""){
        alert("Please add your favorite country to visit.")
        return;
    }

    //checking for duplicates
    const countries = list.getElementsByTagName('li');
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].textContent.toLocaleLowerCase() === country.toLocaleLowerCase()) {
            alert("This country is already on your list!")
            input.value = ""
            return;
        }
        
    }

    //create new list item
    const newName = document.createElement('li');
    newName.textContent = country;
    list.appendChild(newName);
    input.value = "";
}

//creating clear from list function
function handleClear(){
    // alert("Clear button is working")
    list.removeChild(list.lastElementChild);
}
