let heading = document.getElementById("heading");

heading.innerText = "Rose";
// heading.innerText = "Rose";

// console.log(heading.);
let number = 0;
function changeHeading() {
    heading.innerText = "Rose"+number++;
    console.log("Clicked");
    
}

function changeHeading2() {
    heading.innerText = "Rose"+ --number;
    console.log("Clicked");
    
}