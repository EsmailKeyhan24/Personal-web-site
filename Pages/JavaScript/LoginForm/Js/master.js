let _forms=document.querySelectorAll('form')
        let _bg=document.getElementsByClassName('bg')[0]
        document.getElementById('BtnReg').addEventListener('click',function(){
            _bg.style.animationName='bgchange1'
            _forms[1].style.opacity=0
            _forms[0].style.opacity=1
            document.getElementById('banner').src='img/bg.jpg'
            
        })


        document.getElementById('BtnLog').addEventListener('click',function(){
            _bg.style.animationName='Bbgchange2'
            _forms[0].style.opacity=0
            _forms[1].style.opacity=1
            document.getElementById('banner').src='img/project-5.jpg'
        })