let flga=1
function mytoggle(){
    let navUl=document.getElementById('navbar-header')
    // document.getElementById('navbar-header').classList.toggle('mytoggle')
    if(flga%2){
        navUl.style.height='45vh'
    }else{
        navUl.style.height='0'
    }
    flga++
}

function _hidden(self){
    self.parentElement.classList.add('hidde')
    let x=self.parentElement
}