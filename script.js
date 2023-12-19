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
let output = document.querySelector("#output")

// what algorithm you are click  in 
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
for (let i = 0; i < AlgorithmsButtons.length; i++) {
    AlgorithmsButtons[i].addEventListener('click', function () {
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
    TypeButtons[i].addEventListener('click', function () {
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
                output.innerHTML = encryptCeaser(input1.value, Number(key.value));
            } else {
                // do decripte with ceaser
                output.innerHTML = decryptCeaser(input1.value, Number(key.value));
            }
        } else {
            if (TypeSelected == "Encripte") {
                // do Encripte with viginer
                output.innerHTML = encryptViginere(input1.value, key.value);
            } else {
                // do decripte with viginer
                output.innerHTML = decryptViginere(input1.value, key.value);
            }
        }
    } else if (AlgorithmSelected != undefined && TypeSelected != undefined && input1.value != '' && AlgorithmSelected == "Affine" && typeA.value != "" && typeB.value != '') {
        warning.classList.replace('d-block', 'd-none')
        if (TypeSelected == "Encripte") {
            // do Encripte with affine
            output.innerHTML = encryptAffine(input1.value, Number(typeA.value), Number(typeB.value));
            console.log('encr affine')
        } else {
            // do decripte with affine
            output.innerHTML = decryptAffine(input1.value, Number(typeA.value), Number(typeB.value));
        }
    } else {
        warning.classList.replace('d-none', 'd-block')
    }
})

// function reset>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
document.querySelector('#reset').addEventListener("click", function () {
    reset()
})
function reset() {
    output.innerHTML = ''
    input1.value = ''
    key.value = ''
    warning.classList.replace('d-block', 'd-none')
    typeA.value = '';
    typeB.value = '';
    for (let i = 0; i < AlgorithmsButtons.length; i++) {
        AlgorithmsButtons[i].checked = false;
    }
    for (let i = 0; i < TypeButtons.length; i++) {
        TypeButtons[i].checked = false;
    }
}
/// Algorithms here
//1. CEASER ALGORITHM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function encryptCeaser(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - 65 + key) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 + key) % 26 + 97);
        } else {
            result += text.charAt(i);
        }
    }
    return result;
}
function decryptCeaser(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - 65 - key + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 - key + 26) % 26 + 97);
        } else {
            result += text.charAt(i);
        }
    }
    return result;
}
//2.VIGINERE ALGORITHM>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function encryptViginere(plainText, key) {
    let cipherText = "";
    let keyIndex = 0;
    for (let i = 0; i < plainText.length; i++) {
        let charCode = plainText.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            cipherText += String.fromCharCode(((charCode - 65) + (key[keyIndex].toUpperCase().charCodeAt(0) - 65)) % 26 + 65);
            keyIndex = (keyIndex + 1) % key.length;
        } else if (charCode >= 97 && charCode <= 122) {
            cipherText += String.fromCharCode(((charCode - 97) + (key[keyIndex].toLowerCase().charCodeAt(0) - 97)) % 26 + 97);
            keyIndex = (keyIndex + 1) % key.length;
        } else {
            cipherText += plainText[i];
        }
    }
    return cipherText;
}
function decryptViginere(cipherText, key) {
    let plainText = "";
    let keyIndex = 0;
    for (let i = 0; i < cipherText.length; i++) {
        let charCode = cipherText.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            plainText += String.fromCharCode(((charCode - 65) - (key[keyIndex].toUpperCase().charCodeAt(0) - 65) + 26) % 26 + 65);
            keyIndex = (keyIndex + 1) % key.length;
        } else if (charCode >= 97 && charCode <= 122) {
            plainText += String.fromCharCode(((charCode - 97) - (key[keyIndex].toLowerCase().charCodeAt(0) - 97) + 26) % 26 + 97);
            keyIndex = (keyIndex + 1) % key.length;
        }
        else {
            plainText += cipherText[i];
        }
    }
    return plainText;
}
// 3. AFFINE ALGORITHM >>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Function to calculate gcd (Greatest Common Divisor)
function gcd(a, b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);

}
console.log(26,7);
// Function to encrypt text
function encryptAffine(text, a, b) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            encryptedText += String.fromCharCode((a * (charCode - 65) + b) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            encryptedText += String.fromCharCode((a * (charCode - 97) + b) % 26 + 97);
        } else {
            encryptedText += text.charAt(i);
        }
    }
    return encryptedText;
}
// Function to calculate modular multiplicative inverse
function ModInverse(a, m) {
    let m0 = m;
    let y = 0, x = 1;
    if (m == 1) return 0;
    while (a > 1) {
        let q = Math.floor(a / m);
        let t = m;
        m = a % m, a = t;
        t = y;
        y = x - q * y;
        x = t;
    }
    if (x < 0) {
        x += m0;
    }
    return x;
}
// Function to decrypt text
function decryptAffine(encryptedText, a, b) {
    let decryptedText = '';
    let modInverse = ModInverse(a, 26);
    for (let i = 0; i < encryptedText.length; i++) {
        let charCode = encryptedText.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            decryptedText += String.fromCharCode((modInverse * (charCode - 65 - b + 26)) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            decryptedText += String.fromCharCode((modInverse * (charCode - 97 - b + 26)) % 26 + 97);
        } else {
            decryptedText += encryptedText.charAt(i);
        }
    }
    return decryptedText;
}






