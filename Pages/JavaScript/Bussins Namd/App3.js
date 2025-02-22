const _divs=document.querySelectorAll('.container>div')
const _li=document.querySelectorAll('nav>li')
_li.forEach((item , index)=>{
    item.addEventListener('click',()=>{
        for(i=0; i<_divs.length; i++){
            _divs[i].classList.remove('show')
        }
        _divs[index].classList.add('show')
    })
})