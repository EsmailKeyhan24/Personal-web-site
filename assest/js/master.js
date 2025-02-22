// ============= اینجا کاملا مروبط قسمت مینو در حالت موبایل خورد میشود 
function mytoggle(){
    document.getElementById('menusmall').classList.toggle('ulphonesmall')
}
// ========***** .menuItem *** ==== 
const _menuItem=document.querySelectorAll('.menuItem')
_menuItem.forEach((item)=>{
    item.addEventListener('click' , ()=>{
        document.getElementById('menusmall').classList.remove('ulphonesmall')
    })
})
let flag=0
window.addEventListener('click' , ()=>{
    if(!(flag % 2)){
        document.getElementById('menusmall').classList.remove('ulphonesmall')
    }
    flag++
})
    // // Start Scop Loading 
    // let _loading=document.getElementById('loading')
    //     function loading(){
    //         _loading.classList.add('loadingshow')
    //     }
    //     setTimeout(() => {
    //         _loading.classList.remove('loadingshow')
    //     }, 4000);
    // // end Scop loading 


        // شروع اسکوپ مینو در حالت اسکرول شدن 
        window.addEventListener('scroll',function(){
            if(this.scrollY>10){
                document.getElementById('menuLarge').classList.add('scroll')
            }else{
                this.document.getElementById('menuLarge').classList.remove('scroll')
            }
        })
        // ختم اسکوپ مینو در حالت اسکرول شدن 




        // start btn-slider
        let _BtnSlider=document.querySelectorAll('.btn-slider>span')
        _BtnSlider.forEach(function(item){
            item.addEventListener('click',function(){
                for(i=0;i<_BtnSlider.length;i++){
                    _BtnSlider[i].style.background='#fff'
                }
                item.style.background='#000'
            })
        })
        // end of btn-slider



//شروع اسکوپ رفتن به بالا
let _body=document.getElementsByTagName('body')[0]
let _header_top =document.getElementsByClassName('header_top')[0]
    _body.addEventListener('scroll',function(){
        _sct=this.scrollTop
        if(_sct>100){
            _header_top.classList.add('scroll')
        }else{
            _header_top.classList.remove('scroll')
        }
    })
// ختم اسکوپ مینوبالا 

// start MouseEvent scope
let _mosue=document.querySelectorAll('.mouse')
document.getElementsByTagName('body')[0].addEventListener('mousemove',function(e){
    let x=e.clientX
    let y=e.clientY
    _mosue[0].style.top=(y-(-20))+'px'
    _mosue[0].style.left=(x-(-20))+'px'
    _mosue[1].style.top=(y-(-20))+'px'
    _mosue[1].style.left=(x-(-20))+'px'
})
// end MouseEvent scope

// start TemColor 
let _Temcolor=document.getElementsByClassName('TempColor')[0]
let _Btncolor=document.getElementById('BtnColor')
_Btncolor.addEventListener('click',function(){
    _Temcolor.style.left=0
    this.style.left='-100%'
})
document.getElementsByClassName('TempColorBtn')[0].addEventListener('click',function(){
    _Temcolor.style.left='-100%'
    _Btncolor.style.left=0
})
// end of Temcolor 
// start internet status scope 
let _message=document.getElementById('Checkinternet')
let _timemesage
    window.addEventListener('load',function(){
        if(navigator.onLine){
            _timemesage= setTimeout(() => {
                _message.innerHTML='اتصال انترنیت برقرار است'
           }, 6000);
        }else{
           clearTimeout(_timemesage)
           _message.innerHTML=('اتصال  انترنیت ندارید.')
        }
    })
    window.addEventListener('offline',function(){
        setTimeout(() => {
            _message.innerHTML=('اتصال  انترنیت ندارید.')
           }, 6000);
    })
    window.addEventListener('online',function(){
        _timemesage= setTimeout(() => {
            _message.innerHTML='اتصال انترنیت برقرار است'
           }, 6000);
    })
// end internet status scope 
// شروع اسکوپ دکمه رفتن به بالا 
let _btnTop=document.getElementById('BtnTop')
    window.addEventListener('scroll',function(){
        if(window.scrollY > 1050){
            _btnTop.classList.add('show')
        }else{
            _btnTop.classList.remove('show')
        }
    })
    _btnTop.addEventListener('click',function(){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    })
    window.addEventListener('scroll',function(){
        if(this.window.scrollY>5000){
            _btnTop.classList.add('showRight')
        }else{
            _btnTop.classList.remove('showRight')
        }
    })
    // _btnTop.addEventListener('click',function(){
    //     window.scrollTo({
    //         top:700
    //     })
    // })
// ختم اسکوپ رفتن به بالا 

// شروع محل شمارنده تعداد پروژه ها 
    let _number=document.getElementById('numberProject')
    let _count=0
    setInterval(_countNumber,100)
    function _countNumber(){
        if(_count<=50){
            _number.innerHTML=_count++
        }
    }
// ختم محل شمارنده تعداد پروژه ها 




// ============================= .navbarLinks_portfolio>ul>li ==================== 
const _divsprotfolio=document.querySelectorAll('#portfolio>.container>div')
const _Btnmenu=document.querySelectorAll('.navbarLinks_portfolio>ul>li')
_Btnmenu.forEach((item  , index)=>{
    item.addEventListener('click',()=>{
        for(i=0; i<_Btnmenu.length; i++){
            _Btnmenu[i].classList.remove('BtnMenu')
        }
        item.classList.add('BtnMenu')

        for(j=0; j<_divsprotfolio.length; j++){
            _divsprotfolio[j].classList.remove('show')
        }
        _divsprotfolio[index].classList.add('show')
    })
})
// =============================END OF .navbarLinks_portfolio>ul>li ==================== 




