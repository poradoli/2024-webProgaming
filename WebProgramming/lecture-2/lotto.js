function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arr = [];

while (arr.length < 6) {
    const num = randomNum(1, 45);
    if (!arr.includes(num)) {
        arr.push(num);
    }
}

console.log(arr); // 1~45 사이의 숫자 중 6개의 고유 숫자 출력

let balls= [];
let selectedBalls = [];
for(let i=0; i<45; i++){
    balls[i]=i+1;
}

for(let i=0; i<6; i++){
    let selectedIndextion = randomNum(0,balls.length())
    
}

// gpt가 생성한 함수

function generateLottoNumbers(){
    const number=new Set();

}

