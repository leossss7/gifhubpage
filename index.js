const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function(){
    alert('Sabia que dirias que si mi vida, no hay mujer mas hermosa que tu, ni otra mujer aparte de ti con la que quier pasar este dia.')
});

const noBtn=document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})