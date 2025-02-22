const _divs=document.querySelectorAll('.line>div')
document.querySelector('.line').style.height=600*_divs.length+'px'
const _li=document.querySelectorAll('nav>li')
_li.forEach((item , index)=>{
    item.addEventListener('click',()=>{
        document.querySelector('.line').style.transform='translateY(-'+(index*600)+'px)'
    } )
})