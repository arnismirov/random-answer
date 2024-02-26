const button = document.getElementById("button");
const display = document.getElementById("display");

const probableAnswer = ["да", "нет", "пока не звестно", "а оно тебе надо", "сделай не медля", "подумай еще", "да",
    "нет", "лучше не стоит", "можешь попробовать", "да", "нет"
];



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

button.addEventListener("click", () => {
    const index = randomNumber(0, probableAnswer.length - 1);
    alert(probableAnswer[index]);
})