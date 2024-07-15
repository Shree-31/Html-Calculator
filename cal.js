let outputscreen = document.getElementById("output")
function display(num) {
    outputscreen.value += num
}
function Clear() {
    outputscreen.value = "";
}
function Delete() {
    outputscreen.value = outputscreen.value.slice(0, -1)
}

function calculate() {
    try {
        outputscreen.value = eval(outputscreen.value);
    }
    catch (err) {
        alert("Invalid operation")
    }

}