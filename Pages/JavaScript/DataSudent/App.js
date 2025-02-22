let coun = 0
let num=1
let wrapList=null
const _inputData = document.querySelectorAll('form>input')
const _textarea=document.getElementById('note')
const _bntSave = document.getElementById('bntSave')
const _messError = document.getElementsByClassName('message')[0]
const _nameTeacher=document.getElementById('Nameteacher')
const _imgStudent=document.getElementById('img')
// const _img=document.querySelector('img')
_bntSave.addEventListener('click', () => {
    if (_inputData[coun].value == null || _inputData[coun].value == '') {
        _messError.classList.add('open')
        setTimeout(() => {
            _messError.classList.remove('open')
        }, 1500);
        _nameTeacher.value=null
    } else {
        // اینجا اسم مدرس گرفته و ذخیره گردیده است 
        document.getElementById('teacher').innerHTML=_nameTeacher.value
        _nameTeacher.value=null
        // end of get _nameTeacher 
        // در اینجا مشخص شده که خالی نیست فیلدها و باکس دیتا هاساخته می شود.
         wrapList = document.createElement('ul')
        wrapList.classList.add('list')
        wrapList.innerHTML = `
            <span></span>
            <li>${_inputData[0].value+'<br>'}</li>
            <li>${_inputData[1].value}</li>
            <li>${_inputData[2].value}</li>
            <li>${_inputData[3].value}</li>
            <li>${_inputData[4].value}</li>
            <li>${_inputData[5].value}</li>
            <li>${_inputData[6].value}</li>
            <img src="" id="Simg">
            <p class="col-m-100 col-m-100">${_textarea.value}</p>
        `
        document.getElementById('list').appendChild(wrapList)

        // this Loop is for null fo input value then click to on _bntSave 
        for (i = 0; i < _inputData.length; i++) {
            _inputData[i].value = null
        }
        _textarea.value=null
        // there End loop of null all fields 
    }
    coun++
    num++
})

function _getIMg(e){
    temp=URL.createObjectURL(e.target.files[0])
}









