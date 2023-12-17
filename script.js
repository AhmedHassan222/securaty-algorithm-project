
const AlgorithmsButtons = document.querySelectorAll('input[name="algorithm"]');
const TypeButtons = document.querySelectorAll('input[name="type"]');
let key = document.querySelector(".special");

for (let i = 0; i < AlgorithmsButtons.length; i++) {
    AlgorithmsButtons[i].addEventListener('click', function (e) {
        if(AlgorithmsButtons[i].value == "Affine"){
            document.querySelector("#appearWhenSelectAffine").classList.replace('d-none','d-flex');
            document.querySelector('#key').classList.replace('d-block','d-none')
        }else{
            document.querySelector("#appearWhenSelectAffine").classList.replace('d-flex','d-none');
            document.querySelector('#key').classList.replace('d-none','d-block')
        }
    })
}
for (let i = 0; i < TypeButtons.length; i++) {
    TypeButtons[i].addEventListener('click', function (e) {
        console.log(e.target.value)
    })
}
