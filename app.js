function createElement(tag, className,id, textContent, styles) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = textContent;
    element.id = id;
    Object.assign(element.style, styles);
    return element;
}

// Function to create an input element with specified type, value, and id
function createInput(type, value, id,styles) {
    const input = document.createElement('input');
    input.type = type;
    input.value = value;
    input.id = id;
    Object.assign(input.style, styles);
    return input;
}

// Create Badminton page
function pageCreation() {
    const body = document.body;
    Object.assign(body.style, {color: 'whitesmoke',margin: 'auto',backgroundColor: "#000"});
    // Header
    const header = createElement('div', 'header','', '',{color: 'whitesmoke',margin: 'auto',backgroundColor: "#000"});
    header.appendChild(createElement('h1', '','',currentSport,{  margin:'0px',backgroundColor:'#333',color:'#fff',textAlign: "center",padding:"15px"}));
    if(currentSport=="Badminton"||currentSport=="Volleyball"){
    header.appendChild(createElement('h3', '','matchLimit', 'Match Point: ', {  margin:'0px',backgroundColor:'#333',color:'#fff',textAlign: "center",padding:"15px"}));
    }else{
        header.appendChild(createElement('h2', '','matchLimit', 'Match Time: ', {  margin:'0px',backgroundColor:'#333',color:'#fff',textAlign: "center",padding:"15px"}));
        header.appendChild(createElement('h3', '','quarterIndicator','',{  margin:'0px',backgroundColor:'#333',color:'#fff',textAlign: "center",padding:"0px",display:"none"}));
    }
    body.appendChild(header);

    // Inner
    const inner = createElement('div', 'inner', '','',{display: "flex",justifyContent: "space-between",border:"solid 1px white",height: "250px"});

    // Left side
    const left = createElement('div', 'left', 'left','','');
    left.appendChild(createElement('img', 'leftImage', 'leftImage','',{ height: '25vmin', width: '37vw', maxWidth: '420px', maxHeight: '320px',margin:"10px"}));
    left.appendChild(createElement('h2', 'teamOne', 'teamOne',teamOne,{textAlign: "center",margin:"10px"}));
    left.appendChild(createElement('h1', 'teamOneScore','teamOneScore', teamOneScore,{textAlign: "center",margin:"10px"}));
    inner.appendChild(left);

    // Right side
    const right = createElement('div', 'right', '','','');
    right.appendChild(createElement('img', 'rightImage', 'rightImage','', { height: '25vmin', width: '35vw', maxWidth: '420px', maxHeight: '320px',margin:"10px" }));
    right.appendChild(createElement('h2', 'teamTwo', 'teamTwo',teamTwo,{textAlign: "center",margin:"10px"}));
    right.appendChild(createElement('h1', 'teamTWoScore','teamTwoScore' ,teamTwoScore,{ margin: "10px",textAlign: "center"}));
    inner.appendChild(right);

    body.appendChild(inner);

    // Timer
    // const timer = createElement('div', 'timer', '');
    // timer.appendChild(createElement('h1', 'timerText','timerText' ,'Time Left:',{textAlign:"center"}));
    // timer.appendChild(createElement('h2', 'timeLeft', 'timeLeft','',{}));
    // body.appendChild(timer);

    // Buttons
    let matchTimer;
    if(currentSport!="Badminton" && currentSport!="Volleyball"){
    matchTimer = createElement('div','matchTimer','matchTimer','',{})
    matchTimer.appendChild(createElement('h1','textTimer','textTimer','Time Left',{textAlign:"center"}))
    matchTimer.appendChild(createElement('h2','timerLeft','timeLeft',matchLimit+":00",{textAlign:"center"}))
    body.appendChild(matchTimer) 
}
    const buttons = createElement('div', 'buttons', '','',{display:"flex"});

    // Start button
    const startButton = createInput('submit', 'Start', 'start');
    Object.assign(startButton.style, {
        backgroundColor: '#00B000',
        padding: '11px',
        fontSize: 'large',
        width: '130%',
        margin:"3px",
        fontWeight:"500",
        border:"solid 2px whitesmoke"
        
    });
    buttons.appendChild(createElement('div', 'start', '','','').appendChild(startButton));

    // End Match button
    const endMatchButton = createInput('submit', 'End Match', 'endMatch');
    Object.assign(endMatchButton.style, {
        backgroundColor: '#ff4000',
        padding: '10px',
        fontSize: 'large',
        width: '120%',
        margin:"3px",
        fontWeight:"500",
        border:"solid 2px whitesmoke"
    });
    buttons.appendChild(createElement('div', 'end', '').appendChild(endMatchButton));

    // Reset button
    const resetButton = createInput('submit', 'Reset', 'reset');
    Object.assign(resetButton.style, {
        backgroundColor: '#007BFF',
        padding: '10px',
        fontSize: 'large',
        width: '120%',
        margin:"3px",
        fontWeight:"500",
        border:"solid 2px whitesmoke"
    });
    buttons.appendChild(createElement('div', 'reset', '').appendChild(resetButton));

    // Resume button
    const resumeButton = createInput('submit', 'Resume', 'resumeButton');
    Object.assign(resumeButton.style, {
        backgroundColor: '#00B000',
        padding: '10px',
        fontSize: 'large',
        width: '120%',
        margin:"3px",
        fontWeight:"500",
        border:"solid 2px whitesmoke",
        display:"none"
    });
    buttons.appendChild(createElement('div', 'resumeButton', '').appendChild(resumeButton));

    body.appendChild(buttons);

    // point
    const point = createElement('div', 'point', '','',{display: "flex",justifyContent: "space-between",marginTop: "30px"});

    // Left point button
    let leftpointButton,rightpointButton;
    if(currentSport=="Badminton"||currentSport=="Volleyball"){
         leftpointButton = createInput('submit', '1 Point', 'leftpoint');
        Object.assign(leftpointButton.style, {
            margin: '10px',
            fontSize: 'xx-large',
            padding: '30px',
            borderRadius: '20%',
            border: '2px solid beige',
            backgroundColor: '#000',
            color:"white",
            display:"none"
        });
    }else{
         leftpointButton = createInput('submit', 'Goal!!', 'leftpoint');
        Object.assign(leftpointButton.style, {
            margin: '10px',
            fontSize: 'xx-large',
            padding: '30px',
            borderRadius: '20%',
            border: '2px solid beige',
            backgroundColor: '#000',
            color:"white",
            display:"none"
        });
    }
  
    point.appendChild(createElement('div', 'leftpoint','').appendChild(leftpointButton));

    // Right point button
    if(currentSport=="Badminton"||currentSport=="Volleyball"){
     rightpointButton = createInput('submit', '1 Point', 'rightpoint');
    Object.assign(rightpointButton.style, {
        margin: '10px',
        fontSize: 'xx-large',
        padding: '30px',
        borderRadius: '20%',
        border: '2px solid beige',
        backgroundColor: '#000',
        color:"White",
        display:"none"
    });
}else{
    rightpointButton = createInput('submit', 'Goal!!', 'rightpoint');
    Object.assign(rightpointButton.style, {
        margin: '10px',
        fontSize: 'xx-large',
        padding: '30px',
        borderRadius: '20%',
        border: '2px solid beige',
        backgroundColor: '#000',
        color:"White",
        display:"none"
    });
}
    point.appendChild(createElement('div', 'rightpoint', '').appendChild(rightpointButton));
    body.appendChild(point);
    
    const style = createElement('style', '', `
        * {
            color: whitesmoke;
            margin: auto;
            background-color: #000;
        }
        body {
            font-family: 'Arial', sans-serif;
        }
        /* Add your additional CSS styles here */
    `);
    body.appendChild(style);
}

let teamOne,teamTwo,teamOneScore=0,teamTwoScore=0,matchLimit,deuce=false,currentSport,time,timer,notPaused=true,i=2,j=3,k=4;
let halfOrQuarter=1;
let icons=['./images/Image0.jpg','./images/Image1.jpg','./images/Image2.jpg','./images/Image3.jpg','./images/Image4.jpg','./images/Image5.jpg'];
let isTimerRunning = false;
document.addEventListener("DOMContentLoaded",()=>{
    currentSport = localStorage.getItem('currentSport')
    teamOne = localStorage.getItem('teamOne')
    teamTwo = localStorage.getItem('teamTwo')
    icon1 = localStorage.getItem('icon1')
    icon2 = localStorage.getItem('icon2')
    matchLimit = localStorage.getItem('gameLimit')
    if(currentSport!="Badminton" && currentSport!="Volleyball"){
        time = matchLimit*60;
    }
    pageCreation();
    document.getElementById('leftImage').src = icons[icon1];
    document.getElementById('rightImage').src = icons[icon2];

    let leftButton = document.getElementById('leftpoint')
    leftButton.addEventListener('click',()=>{updatePoint(teamOneScore+1,teamTwoScore)})
    let rightButton = document.getElementById('rightpoint')
    rightButton.addEventListener('click',()=>{updatePoint(teamOneScore,teamTwoScore+1)})
    if(currentSport=="Badminton" || currentSport=="Volleyball"){
    document.getElementById('matchLimit').textContent = "Match Point: " + matchLimit+"Points";
}else{
    document.getElementById('matchLimit').textContent = "Match Time: " + matchLimit+"Min";
}
    let resetButton = document.getElementById('reset')
    resetButton.addEventListener('click',resetAll)
    let endButton = document.getElementById('endMatch')
    endButton.addEventListener('click',endMatches)
    let startButton = document.getElementById('start')
    startButton.addEventListener('click',startTimer)
    let resumeButton = document.getElementById("resumeButton");
    resumeButton.addEventListener("click",resume);
})

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}
function updateTimer() {
    document.getElementById('timeLeft').textContent = formatTime(time);
}
//Start Timer Function
const startTimer=()=> {
    document.getElementById('leftpoint').style.display = "block";
    document.getElementById('rightpoint').style.display = "block";
    if(currentSport=="Football"||currentSport=="Handball"||currentSport=="Basketball"||currentSport=="Hockey"){
    document.getElementById('quarterIndicator').style.display = "block"; 
}
    document.getElementById('start').style.display = "none";
    if (!isTimerRunning&&notPaused){
        if(currentSport=="Football" || currentSport=="Handball"){
            document.getElementById('quarterIndicator').textContent = "Half-"+halfOrQuarter;
            timer = setInterval(() => {
                if(time==matchLimit*30){
                    pauseTimer();
                    document.getElementById('resumeButton').style.display = "block";
                    document.getElementById('matchLimit').textContent = "Timeout";
                    document.getElementById('endMatch').style.display = "none";
                    document.getElementById('reset').style.display = "none";
                    // document.getElementById('quarterIndicator').textContent = "Half-"+halfOrQuarter;
                } 
                else if (time > 0) {
                    time--;
                    updateTimer();
                } 
                else {
                    clearInterval(timer);
                    alert("Match ended!");
                    end();
                }
            }, 1000);
            isTimerRunning = true;
        }
        if(currentSport=="Hockey"){
            document.getElementById('quarterIndicator').textContent = "Quarter-"+halfOrQuarter;
            timer = setInterval(() => {
                if(time==((matchLimit*60)*i)/j&&i>0){
                    pauseTimer();
                    document.getElementById('resumeButton').style.display = "block";
                    document.getElementById('matchLimit').textContent = "Timeout";
                    document.getElementById('endMatch').style.display = "none";
                    document.getElementById('reset').style.display = "none";
                    // document.getElementById('quarterIndicator').textContent = "Quarter-"+halfOrQuarter;
                } 
                else if (time > 0) {
                    time--;
                    updateTimer();
                } 
                else {
                    clearInterval(timer);
                    alert("Match ended!");
                    end();
                }
            }, 1000);
            isTimerRunning = true;
        }
        if(currentSport=="Basketball"){
            document.getElementById('quarterIndicator').textContent = "Quarter-"+halfOrQuarter;
            timer = setInterval(() => {
                if(time==((matchLimit*60)*j)/k && j>0){
                    pauseTimer();
                    document.getElementById('resumeButton').style.display = "block";
                    document.getElementById('matchLimit').textContent = "Timeout";
                    document.getElementById('endMatch').style.display = "none";
                    document.getElementById('reset').style.display = "none";                    
                } 
                else if (time > 0) {
                    time--;
                    updateTimer();
                } 
                else {
                    clearInterval(timer);
                    alert("Match ended!");
                    end();
                }
            }, 1000);
            isTimerRunning = true;
        }
  }
}
const end=()=>{
        clearInterval(timer);
        time = matchLimit * 60;
        updateTimer();
        isTimerRunning = false;
        if(teamOneScore>teamTwoScore) alert(teamOne + " Is Winner!!")
        else if(teamOneScore<teamTwoScore) alert(teamTwo + " Is Winner!!")
        else alert("Match Drawn!!")
        window.location.href = "index.html";
}
const resetAll=()=>{
    if(currentSport!="Badminton"&&currentSport!="Volleyball"){
    teamOneScore=0;
    teamTwoScore=0;
    updatePoint(teamOneScore,teamTwoScore);
    document.getElementById('timeLeft').textContent = matchLimit+":"+"00";
    clearInterval(timer);
    time = matchLimit * 60; //Time in seconds
    document.getElementById('start').style.display = "inline";
    isTimerRunning=false;
}else{
    teamOneScore=0;
    teamTwoScore=0;
    document.getElementById('start').style.display = "inline";
    document.getElementById('leftpoint').style.display = "none";
    document.getElementById('rightpoint').style.display = "none";
    updatePoint(0,0);
}
document.getElementById('leftpoint').style.display = "none";
document.getElementById('rightpoint').style.display = "none";
document.getElementById('quarterIndicator').style.display = "none";
}

const resume=()=>{
    document.getElementById('quarterIndicator').textContent = "Half-"+halfOrQuarter;
    document.getElementById('leftpoint').style.display = "inline";
    document.getElementById('rightpoint').style.display = "inline";
    isTimerRunning=false;
    document.getElementById('resumeButton').style.display = "none";
    time--;
    document.getElementById('matchLimit').textContent = "Match Time: " + matchLimit+"min";
    document.getElementById('endMatch').style.display = "inline";
    document.getElementById('reset').style.display = "inline";
    updateTimer();
    startTimer();
}
function pauseTimer() {
    halfOrQuarter++;
    document.getElementById('leftpoint').style.display = "none";
    document.getElementById('rightpoint').style.display = "none";
    clearInterval(timer);
    isTimerRunning = false;
    i--;
    if(currentSport=="Basketball"){
        j--;
    }
}
const updatePoint=(var1,var2)=>{
if(currentSport=="Badminton" ||currentSport=="Volleyball"){
if(deuce && ((var1>var2+1)||(var1+1<var2))){
endMatches();
}
if(teamOneScore==teamTwoScore &&(teamOneScore==matchLimit-1 &&teamTwoScore==matchLimit-1)&&!deuce){
    deuce=true
    alert("Match Proceeding After Deuce")
}
teamOneScore = var1;
teamTwoScore = var2;
document.getElementById('teamOneScore').textContent = teamOneScore;
document.getElementById('teamTwoScore').textContent = teamTwoScore;
if((teamOneScore>matchLimit-1 || teamTwoScore>matchLimit-1) &&!deuce){
    endMatches();
}
}else{
    teamOneScore = var1;
    teamTwoScore = var2;
    document.getElementById('teamOneScore').innerHTML = teamOneScore;
    document.getElementById('teamTwoScore').innerHTML = teamTwoScore;
}
}
const endMatches = ()=>{
    if(teamOneScore>teamTwoScore) alert(teamOne + " Is Winner!!")
    else if(teamOneScore<teamTwoScore) alert(teamTwo + " Is Winner!!")
    else alert("Match Drawn!!")
    window.location.href = "index.html"
}