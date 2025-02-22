const _show=document.querySelectorAll('.show')
const _liMenu=document.querySelectorAll('.header_navLinks>ul>li')
window.addEventListener('scroll' , ()=>{
    let _windowHeight=window.innerHeight / 5 
    _show.forEach((item , index)=>{
        let _ST=item.getBoundingClientRect().top
        if(_ST < _windowHeight){
            for(j=0; j<_liMenu.length; j++){
                _liMenu[j].classList.remove('borderBottom')
            }
            _liMenu[index].classList.add('borderBottom')
        }
    })
})