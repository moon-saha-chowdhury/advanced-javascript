let bonus = 20;

function sum (first, second){
    const result = first + second + bonus;
    if(result>9){
        var mood ="happy";
        mood ="cranky";
        mood ="fanky";
        mood = "jolly";
    }
    console.log(mood);
    return result;
}

const output = sum(3,7);
console.log(output);
console.log(bonus);