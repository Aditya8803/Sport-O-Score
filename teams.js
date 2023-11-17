let currentSport;
document.addEventListener('DOMContentLoaded',()=>{
    let startPlaying = document.getElementById('startPlaying');
    startPlaying.addEventListener('click',redirectionToToss);
    currentSport = localStorage.getItem("currentSport")
    const dropdown = document.getElementById("gameLimit");
    document.getElementById("matchSetup").innerHTML = currentSport
    if(currentSport=="Football"){
        dropdown.innerHTML = 
       `<option value="30">Match Time:30 Min</option>
        <option value="60">Match Time:60 Min</option>
        <option value="90">Match Time:90 Min</option>
    `;
    }
    else if(currentSport =="Badminton"){
        dropdown.innerHTML = 
       `<option value="11">Match Points:11 Points</option>
        <option value="15">Match Points:15 Points</option>
        <option value="21">Match Points:21 Points</option>
    `;
    }
    else if(currentSport =="Hockey"){
        dropdown.innerHTML = 
       `<option value="30">Match Time:30 Min</option>
        <option value="45">Match Time:45 Min</option>
        <option value="60">Match Time:60 Min</option>
    `;
    }
    else if(currentSport =="Basketball"){
        dropdown.innerHTML = 
       `<option value="32">Match Time:32 Min</option>
        <option value="40">Match Time:40 Min</option>
        <option value="48">Match Time:48 Min</option>
    `;
    }
    else if(currentSport =="Handball"){
        dropdown.innerHTML = 
       `<option value="20">Match Time:20 Min</option>
        <option value="40">Match Time:40 Min</option>
        <option value="60">Match Time:60 Min</option>
    `;
    }
    else if(currentSport =="Volleyball"){
        dropdown.innerHTML = 
       `<option value="15">Match Points:15 Points</option>
        <option value="21">Match Points:21 Points</option>
        <option value="25">Match Points:25 Points</option>
    `;
    }
    else{
        
    }
})


const redirectionToToss =() =>{
let teamOne=document.getElementById("teamOne").value;
let teamTwo=document.getElementById("teamTwo").value;
let gameLimit=parseInt(document.getElementById("gameLimit").value);
let icon1 = document.getElementById('teamOneIcon').value;
let icon2 = document.getElementById('teamTwoIcon').value;
if(teamOne && teamTwo && icon1&& icon2 ){
    if(teamOne!=teamTwo && icon1!=icon2){
localStorage.setItem('teamOne',teamOne);
localStorage.setItem('teamTwo',teamTwo);
localStorage.setItem('gameLimit',gameLimit);
localStorage.setItem('icon1',icon1);
localStorage.setItem('icon2',icon2);
window.location.href="toss.html";
}
else{
    alert("You selected same team names or icons");
}
}
else{
    alert("Please enter team names and their respective icons.")
}
}
