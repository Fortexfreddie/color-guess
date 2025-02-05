const color = ["turquoise", "orange", "red", "yellow", "violet", "blue"];
let boxColor = color[Math.floor(Math.random() * color.length)];


const colors = ["turquoise", "orange", "red", "yellow", "violet", "blue"];
colors.sort(() => Math.random() - 0.5);


const colorBox = document.querySelector('[data-testid="colorBox"]');
// console.log(boxColor)
colorBox.style.backgroundColor = boxColor;


const colorOptions = document.querySelectorAll('[data-testid="colorOption"]');
colorOptions.forEach((colorButton, index) => {
    colorButton.style.backgroundColor = colors[index];

    colorButton.onclick = function () {
        checkColor(colors[index]);
    }
});


let score = 0;
function checkColor(selectedColor) {
    if (selectedColor === boxColor) {
        document.querySelector('[data-testid="gameStatus"] span').textContent = "correct👌";
        document.querySelector('[data-testid="gameStatus"] span').style.color = "green";
        document.querySelector('[data-testid="gameStatus"] span').classList.add("correct");
        score++;
        document.querySelector('[data-testid="score"] span').textContent = `Score: ${score}`;
    } else {
        document.querySelector('[data-testid="gameStatus"] span').textContent = "wrong❌";
        document.querySelector('[data-testid="gameStatus"] span').style.color = "red";
        document.querySelector('[data-testid="gameStatus"] span').classList.add("wrong");
    }

    setTimeout(() => {
        document.querySelector('[data-testid="gameStatus"] span').classList.remove("correct", "wrong");
        boxColor = color[Math.floor(Math.random() * colors.length)]; 
        document.querySelector('[data-testid="colorBox"]').style.backgroundColor = boxColor; 

        colors.sort(() => Math.random() - 0.5);
        colorOptions.forEach((colorButton, index) => {
            colorButton.style.backgroundColor = colors[index];
        });

    }, 1000);
}

document.querySelector('[data-testid="newGameButton"]').onclick = function () {
    score = 0; 
    document.querySelector('[data-testid="score"] span').textContent = score;
    document.querySelector('[data-testid="gameStatus"] span').textContent = "";
};
