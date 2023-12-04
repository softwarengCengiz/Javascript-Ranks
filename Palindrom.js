//Palindrom, tersten okunduğunda da aynı olan bir kelime veya cümledir.

var isPalindrom = false;
var copyText = "";
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Bir seyler yazin :', (text) => {

    for(var i = text.length-1; i>=0; i--){ 
        copyText+=text[i];
    }

    if(text.length == 0){
        console.log("Hicbir giris yapilmadi.");
    }

    else{

        if(text.toLowerCase() == copyText.toLowerCase()){
            isPalindrom = true;
        }

        if(isPalindrom){
            console.log("Girdiginiz metin palindromdur.");
        }
        else{
            console.log("Metin palindrom degildir.");
        }
    }

  rl.close();
});