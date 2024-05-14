const changeTheme = document.querySelector('.theme');
const darkMode = document.querySelector('.darktheme');
const changeLogo = document.querySelector('.theme');
const changeContrast = document.querySelector('.theme2')
const themeLogoDark = document.querySelector('.bottom') ;
const themeLogoBright = document.querySelector('.top')
// const dropDown = document.querySelector('.overlay');
// const menu = document.querySelector('.hamburger'); 
console.log(themeLogoBright.classList, "here");
const dropDown = document.querySelector('.dropdown-content');
const burger = document.querySelector('.hamburger');


let IsLight = true


changeContrast.addEventListener('click', function(){
    
    darkMode.classList.toggle('black')
        if(IsLight){
            themeLogoBright.classList.toggle('active')
            themeLogoDark.classList.toggle('switch')
            themeLogoBright.classList.remove('hide')
            themeLogoBright.classList.add('show')
            console.log(themeLogoBright);
            IsLight = !IsLight

        }else{
            themeLogoBright.classList.remove('active')
            themeLogoDark.classList.add('active')
            IsLight = !IsLight


        }
    
})

// changeContrast.addEventListener('click', function(){
//     darkmode.classList.toggle('black')
//     changeLogo.classList.toggle('switch')
// })

burger.addEventListener('click', function(){
    burger.classList.toggle('ham');
    dropDown.classList.toggle('drop');
})