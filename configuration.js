document.querySelectorAll('.background').forEach((e) => {

    e.style.backgroundImage = "url(" + localStorage.getItem('backgroundImg') + ")";
    

});



document.querySelectorAll('.TextButtons').forEach((e) => {
    e.innerHTML += "<audio id='audio' src='menu.mp3'></audio>";

    e.addEventListener('mouseenter',(e) => {
        console.log(e.target.childNodes[1]);
        e.target.childNodes[1].play();
    })  

});
