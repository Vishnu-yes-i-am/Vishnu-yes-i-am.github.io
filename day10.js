const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, 'Cards');
fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(function (file) {
        console.log(file); 
    });
});
var deck=['/cards/AH.jpg','/cards/5D.jpg','/cards/10C.jpg','/cards/7H.jpg','/cards/JD.jpg','/cards/QH.jpg','/cards/AH.jpg','/cards/5D.jpg','/cards/10C.jpg','/cards/7H.jpg','/cards/JD.jpg','/cards/QH.jpg']
var flippedcards=[];
var chances=5
var hearts="";
var flipped=false;
var hidden=0;
var active=true;
var backcards=document.querySelectorAll('.container');
backcards.forEach(card => {
    var temp=Math.floor((Math.random() * deck.length));
    card.querySelector(".card").setAttribute("style","background:url("+deck[temp]+"); background-size: 160px 220px;");
    card.setAttribute("id",deck[temp]);
    deck.splice(temp,1);
});
backcards.forEach(card => {card.addEventListener('click',() =>{
    if(flippedcards.length>0){
        var a=flippedcards[0];
    }
    if(active==true){
        if(a!=card){
    card.querySelector(".back").classList.toggle('flip');
    card.querySelector(".card").classList.toggle('flip');
    if(flipped==true){
        active=false;
        setTimeout(function(){
        flipped=false;
        if(a.id ===card.id){
            a.setAttribute("style","visibility:hidden;");
            card.setAttribute("style","visibility:hidden;");
            card.classList.add("dummy");
            hidden+=2;
            flippedcards.splice(0,1);
        }
        else{
            if(flippedcards.length>0){
            a.classList.remove("dummy");
            a.querySelector(".card.flip").classList.toggle('flip');
            a.querySelector(".back.flip").classList.toggle('flip');
        }
            chances-=1;
            hearts="";
            if(chances===0){
                alert("Stupid ,you lose the GAME");
                setTimeout(function(){window.location.reload();},250);
            }
            for (let i = 0; i < chances; i++) {
                hearts+="&#129505;";
            }
            document.querySelector('.chances').innerHTML=hearts;
            card.classList.remove("dummy");
            card.querySelector(".card.flip").classList.toggle('flip');
            card.querySelector(".back.flip").classList.toggle('flip');
            flippedcards.splice(0,1);
        }
        if(hidden===12){
            alert("You Won.Thankyou for your time.");
        }
        active=true;

    },800);
    }
    
    else{
        flipped=true;
        flippedcards.push(card);
        card.classList.add("dummy");
    }
}}
});
});

