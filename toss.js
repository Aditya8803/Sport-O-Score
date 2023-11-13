let heads = 0;
let tails = 0;
let ind = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let i = '$';
let teamOneBat=0;
let teamTwoBat=0;
let teamOne = localStorage.getItem('teamOne');
let teamTwo = localStorage.getItem('teamTwo');
let icons=['./images/image0.jpg','./images/image1.jpg','./images/image2.jpg','./images/image3.jpg','./images/image4.jpg','./images/image5.jpg'];
let currentSport;
document.addEventListener('DOMContentLoaded',()=>{
    // let next = document.getElementById('next');
    // next.addEventListener('click',redirectionToScore);
    
    let icon1 = parseInt(localStorage.getItem('icon1'));
    let icon2 = parseInt(localStorage.getItem('icon2'));
    document.getElementById('leftHalf').src = icons[icon1]
    document.getElementById('rightHalf').src = icons[icon2]
    currentSport = localStorage.getItem("currentSport");
    if(currentSport != "Cricket"){
        document.getElementById('bat').innerHTML = "Left Half";
        document.getElementById('field').innerHTML = "Right Half";
    }
})
const redirectionToScore= () => {
localStorage.setItem('teamOneBat',teamOneBat);
localStorage.setItem('teamTwoBat',teamTwoBat);
if(currentSport=="Cricket"){
window.location.href="cricket.html";
}else{
    window.location.href="app.html";
}
}
flipBtn.addEventListener("click", () => {
    i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
    ind = 0;
});
function updateStats(){
    if(i){
        alert( teamOne + " won the toss!!!\n\nChoose your willing option...");
        ind = ind + 1;
    }
    else{
        alert( teamTwo + " won the toss!!!\n\nChoose your willing option...");
    }
}
const bat = () => {
    if(i=='$'){
        alert("Please Toss the Coin First...");
    }
    else{
        if(ind===1){
            if(currentSport=="Cricket"){
            alert(teamOne + " Choosed to Bat First!!!");
        }else{
            alert(teamOne + " Choosed the Left Half!!!");
        }
            ind = 0;
            i='$';
            teamOneBat=1;
            redirectionToScore();
        }
        else{
            if(currentSport=="Cricket"){
            alert(teamTwo + " Choosed to Bat First!!!");
        }else{
            alert(teamTwo + " Choosed Left Half!!!");
        }
            i='$';
            teamTwoBat=1;
            redirectionToScore();
        }    
    }
}
document.getElementById('bat').onclick = bat;
const field = () => {
    if(i=='$'){
        alert("Please Toss the Coin First...");
    }
    else{
        if(ind===1){
            if(currentSport=="Cricket"){
            alert(teamOne + " Choosed to Field First!!!");
        }else{
            alert(teamOne + " Choosed the Right Half!!!");
        }
            ind = 0;
            i='$';
            teamTwoBat=1;
            redirectionToScore();
        }
        else{
            if(currentSport=="Cricket"){
            alert(teamTwo + " Choosed to Field First!!!");
        }else{
            alert(teamTwo + " Choosed the Right Half!!!");
        }
            i='$';
            teamOneBat=1;
            redirectionToScore();
        }
    }
}
document.getElementById('field').onclick = field;
function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}