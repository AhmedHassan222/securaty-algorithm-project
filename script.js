
// variable >>>>>>
const AlgorithmsButtons = document.querySelectorAll('input[name="algorithm"]');
const TypeButtons = document.querySelectorAll('input[name="type"]');
let key = document.querySelector(".special");
let input1 = document.querySelector("#input1");
let AlgorithmSelected;
let TypeSelected;
let typeA = document.querySelector('#typeA');
let typeB = document.querySelector("#typeB")
let warning = document.querySelector("#warning")


// what algorithm you are click  in 
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
for (let i = 0; i < AlgorithmsButtons.length; i++) {
    AlgorithmsButtons[i].addEventListener('click', function (e) {
        if (AlgorithmsButtons[i].value == "Affine") {
            document.querySelector("#appearWhenSelectAffine").classList.replace('d-none', 'd-block');
            document.querySelector('#key').classList.replace('d-block', 'd-none')
        } else {
            document.querySelector("#appearWhenSelectAffine").classList.replace('d-block', 'd-none');
            document.querySelector('#key').classList.replace('d-none', 'd-block')
        }
        AlgorithmSelected = AlgorithmsButtons[i].value;
    })
}

// what type you are click in
//>>>>>>>>>>>>>>>>>>>>>>>>>>>
for (let i = 0; i < TypeButtons.length; i++) {
    TypeButtons[i].addEventListener('click', function (e) {
        TypeSelected = TypeButtons[i].value;
    })
}

// function convert (encription , decription )
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


document.querySelector("#convert").addEventListener('click', function () {
    if (AlgorithmSelected != undefined && TypeSelected != undefined && key.value != '' && input1.value != '' && AlgorithmSelected != "Affine") {
        warning.classList.replace('d-block', 'd-none')
        // do all algorithm without affine
        if (AlgorithmSelected == "Ceaser") {
            if (TypeSelected == "Encripte") {
                // do encripte with ceaser
            } else {
                // do decripte with ceaser
            }
        } else {
            if (TypeSelected == "Encripte") {
                // do Encripte with viginer
            } else {
                // do decripte with viginer
            }
        }
    } else if (AlgorithmSelected != undefined && TypeSelected != undefined && input1.value != '' && AlgorithmSelected == "Affine" && typeA.value != "" && typeB.value != '') {
        warning.classList.replace('d-block', 'd-none')
        if (TypeSelected == "Encripte") {
            // do Encripte with affine
        } else {
            // do decripte with affine
        }
    } else {
        warning.classList.replace('d-none', 'd-block')
    }
})

//
// /// Ceaser Algorithm
// //>>>>>>>>>>>>>>>>>>>>>>

// //1.Encrypt >>>>>>
// function encrypt(text, key) {
//     let result = '';
//     for (let i = 0; i < text.length; i++) {
//         let charCode = text.charCodeAt(i);
//         if (charCode >= 65 && charCode <= 90) {
//             result += String.fromCharCode((charCode - 65 + key) % 26 + 65);
//         } else if (charCode >= 97 && charCode <= 122) {
//             result += String.fromCharCode((charCode - 97 + key) % 26 + 97);
//         } else {
//             result += text.charAt(i);
//         }
//     }
//     return result;
// }

// //2.Decrypt >>>>>>>>>>
// function decrypt(text, key) {
//     let result = '';
//     for (let i = 0; i < text.length; i++) {
//         let charCode = text.charCodeAt(i);
//         if (charCode >= 65 && charCode <= 90) {
//             result += String.fromCharCode((charCode - 65 - key + 26) % 26 + 65);
//         } else if (charCode >= 97 && charCode <= 122) {
//             result += String.fromCharCode((charCode - 97 - key + 26) % 26 + 97);
//         } else {
//             result += text.charAt(i);
//         }
//     }
//     return result;
// }

// // take text input and the key from user
// let text = prompt('Enter the text you want to encrypt/decrypt:');
// let key = parseInt(prompt('Enter the key number:'));
// let mode = prompt('Do you want to encrypt or decrypt?');

// if (mode.toLowerCase() === 'encrypt') {
//     let encryptedText = encrypt(text, key);
//     console.log('Encrypted Text:', encryptedText);
// } else if (mode.toLowerCase() === 'decrypt') {
//     let decryptedText = decrypt(text, key);
//     console.log('Decrypted Text:', decryptedText);
// } else {
//     console.log('Invalid mode selected. Please choose "encrypt" or "decrypt".');
// }



// let set = {
//     'a': 0,
//     'b': 1,
//     'c': 2,
//     'd': 3,
//     'e': 4,
//     'f': 5,
//     'g': 6,
//     'h': 7,
//     'i': 8,
//     'j': 9,
//     'k': 10,
//     'l': 11,
//     'm': 12,
//     'n': 13,
//     'o': 14,
//     'p': 15,
//     'q': 16,
//     'r': 17,
//     's': 18,
//     't': 19,
//     'u': 20,
//     'v': 21,
//     'w': 22,
//     'x': 23,
//     'y': 24,
//     'z': 25,
// }


// let n = 26;
// let result = "";

// let x = Object.keys(set)
// console.log(x)
// function encription(text, key) {
//     for (let i = 0; i < text.length; i++) {

//         for (let j = 0; j < x.length; j++) {
//             if ((set[text[i]] + key) % n == set[x[j]]) {
//                 result += x[j]

//             }
//         }
//     }
//     console.log(result)
// }


