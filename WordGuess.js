const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const options = {
  method: 'GET',
  url: 'https://random-word-api.vercel.app/api?words=1',
};

async function fetchData() {
  try {
    const response = await axios.request(options);
    var wordLen = response.data[0].length;
    console.log(`Kelimeniz ${wordLen} harflidir.`);
    //console.log(response.data);
    var n = 0;
    const guesses = [];
    while (n < wordLen) {
      const took = await takeGuess(n + 1);
      if (response.data[0][n] === took) {
        console.log("Dogru tahmin.");
        guesses.push(took);
        n++;
      } else {
        console.log("Yanlis tahmin.");
      }

      if (guesses.length === wordLen) {
        console.log(`Butun kelimeleri bildiniz. Kelime "${response.data[0]}" idi.`);

        const again = await playAgain();

        if (again === 'e') {
          fetchData()
        } else {
          console.log('Oyun bitti.');
          rl.close(); // Programı kapat
        }
      }
    }

  } catch (error) {
    console.error(error);
  }
}

function takeGuess(n) {
  return new Promise(resolve => {
    rl.question(`${n}. harfi tahmin edin :`, word => {
      resolve(word);
    });
  });
}

function playAgain() {
  return new Promise(resolve => {
    rl.question('Tekrar oynamak ister misin? (e/h): ', answer => {
      const lowercaseAnswer = answer.toLowerCase();
      resolve(lowercaseAnswer);
    });
  });
}

fetchData();
