let currentSport;
document.addEventListener('DOMContentLoaded',()=>{
    let sportButtons = document.querySelectorAll('input[type=submit]');
    sportButtons.forEach(sportButton => {
        sportButton.addEventListener('click',()=>{
            fetchSport(sportButton)
        });
    })
})
const fetchSport= (sportButton) => {
currentSport = sportButton.getAttribute('value');
redirection();
}
const redirection=()=>{
localStorage.setItem('currentSport',currentSport);
window.location.href = "teams.html"
}