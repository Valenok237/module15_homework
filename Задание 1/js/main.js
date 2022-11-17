const btn = document.querySelector('.btn');
const svgIcon1 = document.querySelector('.svg-icon_1');
const svgIcon2 = document.querySelector('.svg-icon_2');

btn.addEventListener('click', () => {
    svgIcon1.classList.toggle('icon-del');
    svgIcon2.classList.toggle('icon-del');
});






