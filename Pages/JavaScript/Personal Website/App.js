const _li=document.querySelectorAll('#navgation_links>ul>li')
_li.forEach((item)=>{
    _li[0].classList.add('navlinkBg')
    item.addEventListener('click',()=>{
        for(i=0; i<_li.length; i++){
            _li[i].classList.remove('navlinkBg')
        }
        item.classList.add('navlinkBg')
    })
})

// ================== about =============== 
const _about=document.querySelectorAll('.card_about')
window.addEventListener('scroll' , ()=>{
    let _windowHeight=window.innerHeight / 10 * 5
    for(i=0; i<_about.length; i++){
        let _ST=_about[i].getBoundingClientRect().top
        if(_ST < _windowHeight){
            _about[i].classList.add('show')
        }
    }
})


const _span=document.querySelectorAll('.about_section_content_social>span')
window.addEventListener('scroll' , ()=>{
    let _windowHeight=window.innerHeight
    for(i=0; i<_span.length; i++){
        let _st=_span[i].getBoundingClientRect().top
        if(_st < _windowHeight){
            _span[i].classList.add('show')
        }
    }
})






// ======================= section_cards ===================== 
const _cards_section=document.querySelectorAll('.section_cards_row_card')
window.addEventListener('scroll' , ()=>{
    let _windowHeight=window.innerHeight / 8 * 5
    for(i=0; i<_cards_section.length; i++){
        let _ST=_cards_section[i].getBoundingClientRect().top
        if(_ST < _windowHeight){
            _cards_section[i].classList.add('show')
        }
    }
})