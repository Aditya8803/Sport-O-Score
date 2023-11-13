document.addEventListener("DOMContentLoaded",()=>{
let getStarted = document.getElementById('getStarted');
getStarted.addEventListener('click',redirectionToTeams);
})                      
const redirectionToTeams = () =>{
    window.location.href="choosesport.html";
}