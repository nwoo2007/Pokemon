// All Those Pokemon!

// Load Data From Files
let pokemonData; 
fetch("pokemon.txt")
    .then((rawData) => rawData.text())
    .then((strData) => (pokemonData = strData.split(/\r?\n/)));
// 

// Output Element Variables
let pokemonOutputEl = document.getElementById("span1");
let teamOutputEl = document.getElementById("span2");
let letterOutputEl = document.getElementById("div1");
let countOutputEl = document.getElementById("div2");


// Button Event Listener
document.getElementById("btn1").addEventListener("click", randPokemonBtn);
document.getElementById("btn2").addEventListener("click", randTeamBtn);
document.getElementById("btn3").addEventListener("click", letterBtn);
document.getElementById("btn4").addEventListener("click", countBtn);

// invImg.innerHTML += '<img src="img/pixel-tire.png" width="25px">';

// Random pokemon
function randPokemonBtn() { 
    var randPokemon = pokemonData[randomInt(0, pokemonData.length)];
    // console.log(randPokemon);
    var pokeName = removePng(randPokemon);
    pokemonOutputEl.innerHTML = `<img src="images/${randPokemon}"> <p>${pokeName}</p>`;
}

// Random team of 3 
function randTeamBtn() { 
    teamOutputEl.innerHTML = `<br> `;
    for (let i = 0; i < 3; i++) {
        var randPokemon = pokemonData[randomInt(0, pokemonData.length)];
        var pokeName = removePng(randPokemon);
        teamOutputEl.innerHTML += `<img src="images/${randPokemon}"> <p>${pokeName}</p>`;
    }
}

// All pokemon starting with letter ""
function letterBtn() { 
    letterOutputEl.innerHTML = "";
    let letter = document.getElementById("input1").value;
    // console.log(letter)

    for (let i = 0; i < pokemonData.length; i++) {
        let pokemon = pokemonData[i]; 
        if (pokemon.charAt(0) == letter) {
            console.log(pokemon);
            var pokeName = removePng(pokemon);
            letterOutputEl.innerHTML += `<img src="images/${pokemon}"> <p>${pokeName}</p>`;
        }
    }
}

// All pokemon of this # of characters 
function countBtn() { 
    countOutputEl.innerHTML = "";
    let count = document.getElementById("input2").value;

    for (let i = 0; i < pokemonData.length; i++) {
        let pokemon = pokemonData[i]; 
        var pokeName = removePng(pokemon);
        // console.log(pokeCount)
        if (pokeName.length == count) {
            // console.log(pokemon)
            countOutputEl.innerHTML += `<img src="images/${pokemon}"> <p>${pokeName}</p>`;
        }
    }
}

// Remove png from output name 
function removePng(pokeIn) { 
    let pokeOut = "";
    for (let i = 0; i < pokeIn.length; i++) { 
        if (pokeIn.charAt(i) == ".") { 
            return pokeOut;
        } 
        pokeOut += pokeIn.charAt(i);
    }
}