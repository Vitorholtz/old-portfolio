window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
    if (currentScrollPos >= 1082) {
        document.getElementById("menu").style.visibility = 'visible';
        document.getElementById("menu").style.opacity = 1;

        document.getElementById("stickhome_img").style.opacity = 1;
        document.getElementById("stickhome_img").style.visibility = 'visible';
        document.getElementById("stickhome_img").style.top = '40em';
    } else {
        document.getElementById("menu").style.visibility = 'hidden';
        document.getElementById("menu").style.opacity = 0;

        document.getElementById("stickhome_img").style.opacity = 0;
        document.getElementById("stickhome_img").style.visibility = 'hidden';
        document.getElementById("stickhome_img").style.top = '0em';
    }
}