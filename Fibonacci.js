function calculateFibonacci(num){

    if(num == 1){
        return 0;
    }
    else if(num == 2){
        return [0,1];
    }
    else{
        var series = [0,1];
        for(var i = 2; i < num; i++){
            var next = series[i-1] + series[i-2];
            series.push(next);
        }
        return series;
    }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('x. basamaga kadar fibonacci hesapla :', (num) => {
    var x = calculateFibonacci(num);
    console.log(`Cevap = ${x}`);
    rl.close();
});
