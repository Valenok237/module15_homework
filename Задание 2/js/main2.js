const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    alert("Ширина экрана:" + window.screen.width + "\nВысота экрана:" + window.screen.height + "\nШирина области просмотра (без скролла):" + document.documentElement.clientWidth + "\nВысота области просмотра (без скролла):" + document.documentElement.clientHeight);
});
