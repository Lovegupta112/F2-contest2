let userArr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];
let userId = 4;

// we will add this html code using function 
{/* <div class="cards">
<span>1.</span>
<span>Name: John</span>
<span>Profession: Developer</span>
<span>Age:18</span>
</div> */}

function cards(elm) {
    return `<div class="cards">
<span>${elm.id}</span>
<span>Name: ${elm.name}</span>
<span>Profession: ${elm.profession}</span>
<span>Age:${elm.age}</span>
</div>`;
}

let filterDiv = document.getElementsByClassName('filter-ui');
window.addEventListener('load', () => {
    for (let elm of userArr) {
        filterDiv[0].innerHTML += cards(elm);

    }
    // console.log(filterDiv);
})


// filter method----------------->
function filter() {

    let professionIndex = document.getElementById('profession').selectedIndex;

    if (professionIndex == 0) {
        alert('Please Select the Profession')
    }
    else {
        let option = document.getElementsByTagName('option');
        let optionValue = option[professionIndex].value;
        // console.log(optionValue);
        filterDiv[0].innerHTML = "";
        for (let elm of userArr) {
            if (elm.profession === optionValue) {
                filterDiv[0].innerHTML += cards(elm);
            }
        }
    }
    // console.log(profession);

}

// add user method-------------------->

function addUser() {
    let input = document.getElementsByTagName('input');
    // console.log(input);

    // we will also check that  we dont have to push object of empty  input values in array --
    // like newUser={id:4 , name="",age:"",profession=""}; 

    if (input[0].value.length && input[1].value.length && input[2].value.length) {

        let newUser = { id: userId++, name: "", age: "", profession: "" };
        newUser.name = input[0].value;
        newUser.profession = input[1].value;
        newUser.age = input[2].value;

        userArr.push(newUser);
        filterDiv[0].innerHTML = "";
        for (let elm of userArr) {
            filterDiv[0].innerHTML += cards(elm);
        }

    }

    input[0].value = "";
    input[1].value = "";
    input[2].value = "";
}