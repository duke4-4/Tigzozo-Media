const changeTheme = document.querySelector('.theme');
const darkmode = document.querySelector('.darktheme');
const changeLogo = document.querySelector('.theme');
const changeContrast = document.querySelector('.theme2')

changeTheme.addEventListener('click', function(){
    darkmode.classList.toggle('black')
    changeLogo.classList.toggle('switch')
})

changeContrast.addEventListener('click', function(){
    darkmode.classList.toggle('black')
    changeLogo.classList.toggle('switch')
})