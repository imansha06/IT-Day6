function changeHeading() {

    let txtInput = document.getElementById("inputText");
   

    let userInput = txtInput.value; 

    console.log(userInput);
    
    let heading = document.getElementById("heading");

    heading.innerText=userInput;

}