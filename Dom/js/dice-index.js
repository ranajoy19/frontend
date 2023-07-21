// document.querySelector('h1').innerHTML = 'hey its me';



// document.getElementById("h").innerHTML ="BULBUL";

// document.querySelector("#h").classList.add("invisible");
// document.querySelector("#h").classList.toggle("invisible");
// document.querySelector("#title")
// document.querySelector("#h").innerHTML="<em>Rani<em>";
//document.querySelector("#h").getAttributeNames;



var images=[
    'images/dice1.png' , 
    'images/dice2.png' , 
    'images/dice3.png' , 
    'images/dice4.png',
    'images/dice5.png',
    'images/dice6.png'

]

 const getRandomImage=()=>{

    const random = Math.floor(Math.random() * images.length);
    const random1 = Math.floor(Math.random() * images.length);

    document.getElementById("img").src =images[random];
    document.getElementById("img1").src =images[random1];

    if (random == random1) {
        document.querySelector(".container h1").innerHTML = "its drawn"

    }
    else if (random > random1) {
        document.querySelector(".container h1").innerHTML = "player 1 wins!"
        document.getElementById("wining-flag").src ="images/flag.png";
        document.querySelector(".flag").classList.toggle("flag-right")
    }else {
        document.querySelector(".container h1").innerHTML = "player 2 wins!"
        document.getElementById("wining-flag").src ="images/flag.png";
        document.querySelector(".flag").classList.toggle("flag-left")


    }

}
getRandomImage();