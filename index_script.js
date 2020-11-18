window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
    let position = 1082;

    if (currentScrollPos >= position) {
        document.getElementById("stickhome_img").style.opacity = 1;
        document.getElementById("stickhome_img").style.visibility = 'visible';
        document.getElementById("stickhome_img").style.top = '50%';
    } else {
        document.getElementById("stickhome_img").style.opacity = 0;
        document.getElementById("stickhome_img").style.visibility = 'hidden';
        document.getElementById("stickhome_img").style.top = '0em';
    }
}