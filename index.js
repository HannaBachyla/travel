let menuIcon = document.querySelector('.menu__icon');
        let menuNav = document.querySelector('.nav');
        
        menuIcon.addEventListener('click', function(){
            menuIcon.classList.toggle('active');
            menuNav.classList.toggle('active');
        })


// Карусель 

let width = 800;
let widthMob = 390;
let count = 1;

let list = document.querySelector('.destinations__track');
let listElems = document.querySelectorAll('.destinations__img');

let position = 0;

let circle1 = document.querySelector('.circle1');
let circle2 = document.querySelector('.circle2');
let circle3 = document.querySelector('.circle3');

let arrow1 = document.querySelector('.arrow1');
let arrow2 = document.querySelector('.arrow2');


circle1.style.backgroundColor = '#F2785C';

let screen = window.innerWidth

if (screen >= 391) {
document.querySelector('.left1').onclick = function() {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
    circle1.style.backgroundColor = 'rgba(242, 120, 92, 0.5)';
    circle2.style.backgroundColor = '#F2785C';

}

document.querySelector('.left2').onclick = function() {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
    circle2.style.backgroundColor = 'rgba(242, 120, 92, 0.5)';
    circle3.style.backgroundColor = '#F2785C';
}
} else {

    document.querySelector('.arrow2').onclick = function() {
        position -= widthMob * count;
        position = Math.max(position, -widthMob * (listElems.length - count));
        list.style.marginLeft = position + 'px';
        circle1.style.backgroundColor = 'rgba(242, 120, 92, 0.5)';
        circle2.style.backgroundColor = '#F2785C';    
    }
    
    document.querySelector('.arrow2').onclick = function() {
        position -= widthMob * count;
        position = Math.max(position, -widthMob * (listElems.length - count));
        list.style.marginLeft = position + 'px';
        circle2.style.backgroundColor = 'rgba(242, 120, 92, 0.5)';
        circle3.style.backgroundColor = '#F2785C';
    }

    document.querySelector('.arrow1').onclick = function() {
        position +=widthMob * count;
        position = Math.min(position, 0)
        list.style.marginLeft = position + 'px';
        circle2.style.backgroundColor = '#F2785C';
        circle3.style.backgroundColor = 'rgba(242, 120, 92, 0.5)';

    }

    document.querySelector('.arrow1').onclick = function() {
        position +=widthMob * count;
        position = Math.min(position, 0)
        list.style.marginLeft = position + 'px';
        circle1.style.backgroundColor = '#F2785C';
        circle2.style.backgroundColor = 'rgba(242, 120, 92, 0.5)';
        circle3.style.backgroundColor = 'rgba(242, 120, 92, 0.5)';

    }
}





//Popap
/*
const popapLinks = document.querySelector('.popap__open'); //всем кнопкам, которые открывают попап
const body = document.querySelector('body');
const lockPadding = document.querySelector('.lockPadding');

let = unlock = true;

const timeout = 800;

if (popapLinks.length > 0) {
    for (let index = 0; index < popapLinks.length, index++) {
        const popapLink = popapLinks[index];
        popapLink.addEventListener("click", function (e) {
            const popapName = popapOpen.getAttribute('href').replace('#', '');
            const curentPopap = document.getElementById(popapName)
            popapOpen(curentPopap);
            e.preventDefault();
        });
    }
}

const popapCloseIcon = document.querySelector('.popap__close'); //закрывают попап
if (popapCloseIcon.length > 0) {
    for (let index = 0; index < popapCloseIcon.length, index++) {
        const el = popapCloseIcon[index];
        el.addEventListener("click", function (e) {
            popapClose(el.closest('.popap'));
            e.preventDefault();
        });
        }
    }

    function popapOpen(curentPopap) {
        if (curentPopap && unlock) {
            const popapActive = document.querySelector('.popap.open');
            if (popapActive) {
                popapClose(popapActive, false);
            } else {
                bodyLock();
            }
            curentPopap.classList.add('open');
            curentPopap.addEventListener("click", function (e) {
                if (!e.target.closest('.popap__content')) {
                    popapClose(e.target.closest('.popap'));
                }
            });
        }
    }
    */




// alert

const welcome = () => {
    let email = document.querySelector('.email');
    let pass = document.querySelector('.pass');
 
    if (!email.value) alert('Заполните поле "Логин"');
    else if (!pass.value) alert('Заполните поле "Пароль"');
    else alert(`${email.value}\n${pass.value}`);
}
 
document.querySelector('.button_sign').addEventListener('click', welcome);