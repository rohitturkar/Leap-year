var txtInput = document.querySelector("#txt-input")
var btnExecute = document.querySelector("#btn-execute")
var btnClear=document.querySelector("#btn-clear")
var outputDiv = document.querySelector("#output")

//converting the value into the number


btnExecute.addEventListener("click", () => {
    let inputValue = txtInput.value;
    let year = parseInt(inputValue, 10);
    if (isNaN(year)) {
        outputDiv.innerText ="please enter the valid year(Number)";
    }
    else if ((year % 400 == 0) || (year % 100 != 0 && year % 4 == 0)) {
        outputDiv.innerText = year + " is leap year";
    }
    else if (year <= 0) {
        outputDiv.innerText = "Please Enter the valid year";
    }
    else {
        outputDiv.innerText = year + " is not a leap year";
    }


})

btnClear.addEventListener("click",()=>{
    location.reload()
})
