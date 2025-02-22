
let nav=document.getElementById('navbar_head_top')
let flag=1
function mytoggle(){
    if(flag%2){
        nav.classList.add('navbar_top')
    }else{
        nav.classList.remove("navbar_top")
    }
    flag++
}