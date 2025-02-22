const toggleButton = document.querySelector("#toggle_button");

toggleButton.addEventListener('click', () =>{
    document.querySelector('.item_list').classList.toggle('show');
})

// ===================================================== NAVBAR HEADER
const navLinks_header = document.querySelector('.navlinks')
window.addEventListener('scroll', () => {
    let _ST = window.scrollY
    if (_ST > 10) {
        navLinks_header.classList.add('show')
    } else {
        navLinks_header.classList.remove('show')
    }
})
// ================================================== NAVBAR HEADER END

// ============================================================ COURSES 
const _courseProcuts = document.querySelectorAll('#courses>.row>div')


window.addEventListener('scroll', () => {
    for (i = 0; i < _courseProcuts.length; i++) {
        let _scrollTop = window.innerHeight / 5 * 4
        let st = _courseProcuts[i].getBoundingClientRect().top
        if (st < _scrollTop) {
            _courseProcuts[i].classList.add('show')
            Counter()
        } // end of if
        
    } // end of for 
    
})

const _courseSpan = document.querySelectorAll('.counter')
let _count = 0
function Counter(){
   setTimeout(() => {
    setInterval(() => {
        if (_count < 1025) {
            _courseSpan[0].innerHTML = _count++
        }
        if (_count < 961) {
            _courseSpan[1].innerHTML = _count++
        }
        if (_count < 1020) {
            _courseSpan[2].innerHTML = _count++
        }
        if (_count < 820) {
            _courseSpan[3].innerHTML = _count++
        }
    }, 200);
   }, 100);
}

// ======================================================== COURSES END

//============================================================ STUDENTS
const _figure=document.querySelectorAll('#Students>.row>.line>figure')
console.log(document.querySelector('#Students>.row>.line').style.width=850*_figure.length+'px')
for(i=0; i<_figure.length; i++){
    temp=document.createElement('span')
    temp.classList.add('BtnSlide')
    document.querySelector('.BtnsSlider').appendChild(temp)
}
const _BtnSlide=document.querySelectorAll('.BtnSlide')

_BtnSlide.forEach((item , index)=>{
    _BtnSlide[0].classList.add('ShowBtn')
    item.addEventListener('click',()=>{
        for(i=0; i<_BtnSlide.length; i++){
            _BtnSlide[i].classList.remove('ShowBtn')
        }
        item.classList.add('ShowBtn')
        document.querySelector('.line').style.transform='translateX(-'+(index*650)+'px)'
    })
})


function line(self){
    self.style.transform='translateX(-'+(index*650)+'px)'
}
//======================================================== STUDENTS END