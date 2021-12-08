fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=15000")
.then(response => response.json())
.then(data => {
    pokemonObjectList = data
    //console.log(pokemonObjectList)
    createPokeList(pokemonObjectList)
})
let startGame = 2;
let firstPokemonChosen = "?";
function createPokeList(list) {
   
    newList = list.results;
    pokemonList = [];
    let player1FullImage = "";
    let player2FullImage = "";
    
    for (const i of newList) {
        let item = i
        let pokemonName = item["name"]
        pokemonList.push(pokemonName)
    }
    pokemonList = (pokemonList.sort())
    pokemonList.forEach(
        item => {
            let playerlList = document.getElementById("player1");
            let player2List = document.getElementById("player2");
            let currentOption1 = document.createElement("option");
            let currentOption2 = document.createElement("option");
            currentOption1.textContent = item
            currentOption2.textContent = item
            playerlList.add(currentOption1)
            player2List.add(currentOption2)
    });
};


function setUpPlayer1(){
    player1 = document.getElementById("player1").value
    if(firstPokemonChosen == "?"){
        firstPokemonChosen = player1
    }
    else{
        if(firstPokemonChosen === player1){
            window.alert('Sorry, That one has been taken. Please choose a differant pokemon');
            return
        }
    }
    for (const i of newList) {
        let item = i
        let pokemonName = item["name"]
        if (item["name"] == player1){
            itemURL = item["url"]
        }
        pokemonList.push(pokemonName)
    }
    fetch(itemURL)
    .then(response => response.json())
    .then(data => {
        player1ObjectList = data
        player1FullImage = setUpPlayers(player1ObjectList,"p1Img")
        document.getElementById("player1").disabled = true;
        startGame -= 1;
        startTheGame();
        //console.log(player2FullImage)
})
}
document.getElementById("player1").addEventListener("change", player1FullImage=setUpPlayer1)
function setUpPlayer2(){
    player2 = document.getElementById("player2").value

    if(firstPokemonChosen == "?"){
        firstPokemonChosen = player2
    }
    else{
        if(firstPokemonChosen === player2){
            window.alert('Sorry, That one has been taken. Please choose a differant pokemon');
            return
        }
    }

    for (const i of newList) {
        let item = i
        //console.log(item["name"])
        let pokemonName = item["name"]
        if (item["name"] == player2){
            itemURL = item["url"]
        }
        pokemonList.push(pokemonName)
    }
    fetch(itemURL)
    .then(response => response.json())
    .then(data => {
        player2ObjectList = data
        player2FullImage = setUpPlayers(player2ObjectList,"p2Img")
        //console.log(itemURL)
        document.getElementById("player2").disabled = true;
        startGame -= 1;
        startTheGame();

    
})
}
document.getElementById("player2").addEventListener("change", player2FullImage=setUpPlayer2)
function setUpPlayers(data,player){
    let Output2 = document.getElementById(player);
    results = data;
    const html =    `<img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    let psrc = `${results.sprites.front_default}`
    Output2.innerHTML = html;
    return psrc
}


// Function to reset game
function resetGame() {
  location.reload();
  document.getElementById('box1').value = '';
  document.getElementById("box2").value = '';
  document.getElementById("box3").value = '';
  document.getElementById("box4").value = '';
  document.getElementById("box5").value = '';
  document.getElementById("box6").value = '';
  document.getElementById("box7").value = '';
  document.getElementById("box8").value = '';
  document.getElementById("box9").value = '';

}

flag = 1;

function checkBox1() {
  if (flag == 1) {
      document.getElementById("box1").src = player1FullImage;
      document.getElementById("box1").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("box1").src = player2FullImage;
      document.getElementById("box1").disabled = true;
      flag = 1;
  }
}

function checkBox2() {
  if (flag == 1) {
      document.getElementById("box2").src = player1FullImage;
      document.getElementById("box2").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("box2").src = player2FullImage;
      document.getElementById("box2").disabled = true;
      flag = 1;
  }
}

function checkBox3() {
  if (flag == 1) {
      document.getElementById("box3").src = player1FullImage;
      document.getElementById("box3").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("box3").src = player2FullImage;
      document.getElementById("box3").disabled = true;
      flag = 1;
  }
}

function checkBox4() {
  if (flag == 1) {
      document.getElementById("box4").src = player1FullImage;
      document.getElementById("box4").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("box4").src = player2FullImage;
      document.getElementById("box4").disabled = true;
      flag = 1;
  }
}

function checkBox5() {
  if (flag == 1) {
      document.getElementById("box5").src = player1FullImage;
      document.getElementById("box5").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("box5").src = player2FullImage;
      document.getElementById("box5").disabled = true;
      flag = 1;
  }
}

function checkBox6() {
  if (flag == 1) {
      document.getElementById("box6").src = player1FullImage;
      document.getElementById("box6").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("box6").src = player2FullImage;
      document.getElementById("box6").disabled = true;
      flag = 1;
  }
}

function checkBox7() {
  if (flag == 1) {
      document.getElementById("box7").src = player1FullImage;
      document.getElementById("box7").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("box7").src = player2FullImage;
      document.getElementById("box7").disabled = true;
      flag = 1;
  }
}

function checkBox8() {
  if (flag == 1) {
      document.getElementById("box8").src = player1FullImage;
      document.getElementById("box8").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("box8").src = player2FullImage;
      console.log(player2FullImage)
      document.getElementById("box8").disabled = true;
      flag = 1;
  }
}

function checkBox9() {
  if (flag == 1) {
      document.getElementById("box9").src = player1FullImage;
      document.getElementById("box9").disabled = true;
      flag = 0;
  }
  else {
      document.getElementById("box9").src = player2FullImage;
      document.getElementById("box9").disabled = true;
      flag = 1;
  }
}

function findWinner(){
    winnerCount=0
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
        b1 = document.getElementById("box1").src;
        b2 = document.getElementById("box2").src;
        b3 = document.getElementById("box3").src;
        b4 = document.getElementById("box4").src;
        b5 = document.getElementById("box5").src;
        b6 = document.getElementById("box6").src;
        b7 = document.getElementById("box7").src;
        b8 = document.getElementById("box8").src;
        b9 = document.getElementById("box9").src;
    if(b1 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b2 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b3 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"){
        winnerCount += (b1 === b2 & b2 === b3)
    }
    if(b4 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b5 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b6 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"){
        winnerCount += (b4 === b5 & b5 === b6)
    }
    if(b7 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b8 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b9 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"){
        winnerCount += (b7 === b8 & b8 === b9)
    }

    if(b1 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b4 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b7 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"){
        winnerCount += (b1 === b4 & b4 === b7)
    }

    if(b2 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b5 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b8 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"){
        winnerCount += (b2 === b5 & b5 === b8)
    }

    if(b3 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b6 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b9 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"){
        winnerCount += (b3 === b6 & b6 === b9)
    }

    if(b1 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b5 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b9 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"){
        winnerCount += (b1 === b5 & b5 === b9)
    }

    if(b3 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b5 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b7 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"){
        winnerCount += (b3 === b5 & b5 === b7)
    }

    if(winnerCount == 0 & b1 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b2 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b3 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
    & b4 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b5 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b6 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
    & b7 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b8 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" & b9 != "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"){
        document.getElementById("message").innerHTML = "Good Match! You ended in a tie.";
        endGame()
    }

    else{

        if (winnerCount > 0){
            if (flag == 0){
                document.getElementById("message").innerHTML = "Player 1 Wins!";
                endGame();
            }
            else{
                document.getElementById("message").innerHTML = "Player 2 Wins!";
                endGame();
            }
        }
        else{
            if (flag == 1){
                document.getElementById("message").innerHTML = "Player 1's Turn!"
            }
            else{
                document.getElementById("message").innerHTML = "Player 2's Turn!"
            } 
        } 
    } 
}

function endGame(){
    document.getElementById('box1').disabled = true;
    document.getElementById("box2").disabled = true;
    document.getElementById("box3").disabled = true;
    document.getElementById("box4").disabled = true;
    document.getElementById("box5").disabled = true;
    document.getElementById("box6").disabled = true;
    document.getElementById("box7").disabled = true;
    document.getElementById("box8").disabled = true;
    document.getElementById("box9").disabled = true;
}

function startTheGame(){
    if(startGame == 0){
        document.getElementById('box1').hidden = false;
        document.getElementById("box2").hidden = false;
        document.getElementById("box3").hidden = false;
        document.getElementById("box4").hidden = false;
        document.getElementById("box5").hidden = false;
        document.getElementById("box6").hidden = false;
        document.getElementById("box7").hidden = false;
        document.getElementById("box8").hidden = false;
        document.getElementById("box9").hidden = false;
        document.getElementById("resetButton").hidden = false;
    }
}