let generateColorBtn = document.querySelector("#generateColorBtn");
let colorCode = document.querySelector("#colorCode");
let copyBtn = document.querySelector("#copyBtn");

let finalColorCode;
function generateRandColor() {
    let num = Math.floor(Math.random() * 1000000);

    if (num > 100000) {
        // console.log(num);
        finalColorCode = "#" + num;
        document.querySelector("body").style.backgroundColor = finalColorCode;
        colorCode.innerText = finalColorCode;
        copyBtn.innerText = "Copy";
    }
    else {
        generateRandColor;
    }
}

function copyColorCode() {
    navigator.clipboard.writeText(colorCode.innerText);
    copyBtn.innerText = "Copied!";
}

generateRandColor();

generateColorBtn.addEventListener("click", generateRandColor);
copyBtn.addEventListener("click", copyColorCode);