let currentSport;
document.addEventListener('DOMContentLoaded',()=>{
    let startPlaying = document.getElementById('startPlaying');
    startPlaying.addEventListener('click',redirectionToToss);
    currentSport = localStorage.getItem("currentSport")
    const dropdown = document.getElementById("gameLimit");
    document.getElementById("matchSetup").innerHTML = currentSport
    if(currentSport=="Football"){
        dropdown.innerHTML = 
       `<option value="2">Match Time:30</option>
        <option value="60">Match Time:60</option>
        <option value="90">Match Time:90</option>
    `;
    }
    else if(currentSport =="Badminton"){
        dropdown.innerHTML = 
       `<option value="11">Match Points:11</option>
        <option value="15">Match Points:15</option>
        <option value="21">Match Points:21</option>
    `;
    }
    else if(currentSport =="Hockey"){
        dropdown.innerHTML = 
       `<option value="3">Match Time:3</option>
        <option value="45">Match Time:45</option>
        <option value="60">Match Time:60</option>
    `;
    }
    else if(currentSport =="Basketball"){
        dropdown.innerHTML = 
       `<option value="4">Match Time:4</option>
        <option value="40">Match Time:40</option>
        <option value="48">Match Time:48</option>
    `;
    }
    else if(currentSport =="Handball"){
        dropdown.innerHTML = 
       `<option value="2">Match Time:20</option>
        <option value="40">Match Time:40</option>
        <option value="60">Match Time:60</option>
    `;
    }
    else if(currentSport =="Volleyball"){
        dropdown.innerHTML = 
       `<option value="15">Match Points:15</option>
        <option value="21">Match Points:21</option>
        <option value="25">Match Points:25</option>
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
