const AlgorithmsButtons = document.querySelectorAll('input[name="algorithm"]');
const TypeButtons = document.querySelectorAll('input[name="type"]');
let selectedAlgorithm;
let selectedType;
let key;
document.querySelector('#convert').addEventListener('click', function () {

    for (const typeButton of TypeButtons) {
        if (typeButton.checked) {
            selectedType = typeButton.value;
            break;
        }
    }
    key = document.querySelector('.special').value;
    if (selectedAlgorithm != undefined && selectedType != undefined && key != '') {
        //Write code here
        //>>>>>>>>>>>>>>>
        //...............
    }
})



for (const algorithmButton of AlgorithmsButtons) {
    if (algorithmButton.checked) {
        selectedAlgorithm = algorithmButton.value;
        console.log(selectedAlgorithm)
        break;
    }
}