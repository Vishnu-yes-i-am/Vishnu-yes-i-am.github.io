var deck=['/cards/10C.jpg','/cards/10D.jpg','/cards/10H.jpg','/cards/10S.jpg','/cards/2C.jpg','/cards/2D.jpg','/cards/2H.jpg','/cards/2S.jpg','/cards/3C.jpg','/cards/3D.jpg','/cards/3H.jpg','/cards/3S.jpg','/cards/4C.jpg','/cards/4D.jpg','/cards/4H.jpg','/cards/4S.jpg','/cards/5C.jpg','/cards/5D.jpg','/cards/5H.jpg','/cards/5S.jpg','/cards/6C.jpg','/cards/6D.jpg','/cards/6H.jpg','/cards/6S.jpg','/cards/7C.jpg','/cards/7D.jpg','/cards/7H.jpg','/cards/7S.jpg','/cards/8C.jpg','/cards/8D.jpg','/cards/8H.jpg','/cards/8S.jpg','/cards/9C.jpg','/cards/9D.jpg','/cards/9H.jpg','/cards/9S.jpg','/cards/AC.jpg','/cards/AD.jpg','/cards/AH.jpg','/cards/AS.jpg','/cards/Gray_back.jpg','/cards/Green_back.jpg','/cards/JC.jpg','/cards/JD.jpg','/cards/JH.jpg','/cards/JS.jpg','/cards/KC.jpg','/cards/KD.jpg','/cards/KH.jpg','/cards/KS.jpg','/cards/QC.jpg','/cards/QD.jpg','/cards/QH.jpg','/cards/QS.jpg','/cards/Red_back.jpg','/cards/Yellow_back.jpg','/cards/aces.jpg','/cards/blue_back.jpg','/cards/honor_clubs.jpg','/cards/honor_heart-14.jpg','/cards/ honor_spade.jpg','/cards/purple_back.jpg']
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

