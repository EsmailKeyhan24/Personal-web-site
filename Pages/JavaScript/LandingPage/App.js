const _section=document.querySelectorAll('.row>section')
document.querySelector('.row').style.height=_section.length*100+'vh'

const _liMenu=document.querySelectorAll('.section_header_navLinks>ul>li')
_liMenu.forEach((item , index)=>{
    _liMenu[0].classList.add('background')
    item.addEventListener('click' , ()=>{
        for(i=0; i<_liMenu.length; i++){
            _liMenu[i].classList.remove('background')
        }
        item.classList.add('background')


        document.querySelector('.row').style.transform='translateY(-'+(index*100)+'vh)'
    })
})