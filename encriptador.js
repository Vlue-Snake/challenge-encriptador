let text_input = document.getElementById("texto");
let btn_encriptar = document.getElementById("btn_encriptar");
let btn_desencriptar = document.getElementById("btn_desencriptar");
let worked_text = document.getElementById("worked_text");
let hide_container = document.getElementById("hide_container")
let encr_container = document.getElementById("encr_container");
let resultado = document.getElementById("resultado");
let copy_container = document.getElementById("copy_container")
let btn_copy = document.getElementById("btn_copiar");

const vocals = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
}

text_input.addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-Zñ\s]/g, '');
    this.value = this.value.toLowerCase()
    if(this.value === ""){
        worked_text.innerText = "";
        hide_container.style.display = "flex";
        encr_container.style.display = "none"
        copy_container.style.display = "none"
    }
});

function Encrypt(){
    let text_value = text_input.value;
    let text_array = text_value.split("");
    text_array.forEach((element, index) => {
        if(vocals[element]){
            text_array[index] = vocals[element];
        }
    });

    let encrypt_string = text_array.join("");
    console.log(encrypt_string)
    worked_text.innerText = encrypt_string;
    if(encrypt_string){
        toComplete();
    }
}

function Decrypt(){
    let content_value = text_input.value;
    let content_array = content_value.split(" ");

    for(let j = 0; j < content_array.length; j++){
        content_array[j] = content_array[j].replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u")
    }
    content_string = content_array.join(" ")
    worked_text.innerText = content_string;
    if(content_string){
        toComplete()
    }
}

function toComplete(){
    hide_container.style.display = "none"
    encr_container.style.display = "block"
    resultado.style.justifyContent = "space-evenly"
    copy_container.style.display = "flex"
}

function copyText(){
    let copytext = worked_text.textContent;
    navigator.clipboard.writeText(copytext);
}

btn_encriptar.onclick = Encrypt;
btn_desencriptar.onclick = Decrypt;
btn_copy.onclick = copyText;
