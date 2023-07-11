let content = document.getElementById("container");

function animation() {
    if (content.classList.contains('animate')) {
        content.classList.remove("animate");
    }
    else {
        content.classList.add("animate");
    }

    //   setTimeout(function() {
    //     content.classList.remove("animate");
    //   }, 500); // 500 is the same time as the CSS animation
}

function scrollFunction1() {
    let home = document.getElementsByClassName('firstsection')[0]
    home.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });
    animation();
    document.getElementsByClassName('menu')[0].classList.remove('opened');
}
function scrollFunction2() {
    let home = document.getElementsByClassName('secondsection')[0]
    home.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });
    animation();
    document.getElementsByClassName('menu')[0].classList.remove('opened');
}
function scrollFunction3() {
    let home = document.getElementsByClassName('thirdsection')[0]
    home.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });
    animation();
    document.getElementsByClassName('menu')[0].classList.remove('opened');
}
function scrollFunction4() {
    let home = document.getElementsByClassName('fourthsection')[0]
    home.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });
    animation();
    document.getElementsByClassName('menu')[0].classList.remove('opened');
}
function scrollFunction5() {
    let home = document.getElementsByClassName('fifthsection')[0]
    home.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });
    animation();
    document.getElementsByClassName('menu')[0].classList.remove('opened');
}
function scrollFunction6() {
    let home = document.getElementsByClassName('sixthsection')[0]
    home.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });
    animation();
    document.getElementsByClassName('menu')[0].classList.remove('opened');
}
