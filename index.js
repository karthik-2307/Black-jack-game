let firstcard;
let secondcard;
let sum=0;
let cards=[]
var check=false;
var isAlive=false;
let meEl=document.getElementById("message-el")
// let sumEL=document.getElementById("sum-el");
let sumEL=document.querySelector("#sum-el")//Similar to css class and id names for id we would use # and for classes we would use .
let message="";
let cardsEl=document.querySelector("#cards-el");
let player=
{
    playerName:"Per",
    playerChips:145,
    sayhello:function()
    {
        console.log("Hello Karthik")
    }
}
player.sayhello();
let playerEl=document.getElementById("player-el");
playerEl.textContent=player.playerName+" $ :"+player.playerChips;
function startgame()
{
    // cards=[]
    cardsEl.textContent="Cards :"
    console.log(cards)
    firstcard=getRandomcard();
    secondcard=getRandomcard();
    sum=firstcard+secondcard;
    cards=[firstcard,secondcard];
    console.log(cards)
    isAlive=true
    renderagain()
}
function renderagain()
{
    if (sum<21)
    {
       message="Do you wana draw a new card...?";
    }
    else if(sum>21)
    {
        isAlive=false;
        message="You were out of the game...";
    }
    else if(sum==21)
    {
        check=true
        message="Yeah you a got a blackjack...";
    }
    meEl.textContent=message
    sumEL.textContent="sum: "+sum;
    // cardsEl.textContent="Cards: "+cards[0]+" "+cards[1];
    for(var i=0;i<cards.length;i++)
    {
        cardsEl.textContent+=cards[i]+" "
    }
}
function newcard()
{
    if(isAlive===true&&check===false)
    {
    cardsEl.textContent="Cards :"
    console.log("Keep Going");
    let sec=getRandomcard();
    sum+=sec;
    cards.push(sec)
    console.log(cards)
    renderagain();
    }
}
function getRandomcard()
{
    let a= Math.floor(Math.random()*13+1)
    if(a==1)
    {
        return 11;
    }
    else if(11<=a &&a<=13)
    {
        return 10;
    }
    else
    {
        return a;
    }
}
//math.floor gives the integer value and through neglecting the decimals...
