function mytoggle(){
    document.getElementById('navbar').classList.toggle('mytoggle')
    document.getElementsByClassName('body-admin')[0].style.width='95%'
}

let mydate=new Date()
document.getElementById('date').innerText=''+mydate.toLocaleString('fa-ir')+''

function nightmode(){
    document.getElementsByClassName('body-priview')[0].classList.toggle('Nightmode')
}