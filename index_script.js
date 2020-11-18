window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
    if (currentScrollPos >= 1082) {
        document.getElementById("menu").style.visibility = 'visible';
        document.getElementById("menu").style.opacity = 1;
    } else {
        document.getElementById("menu").style.visibility = 'hidden';
        document.getElementById("menu").style.opacity = 0;
    }
}