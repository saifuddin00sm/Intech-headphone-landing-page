const closeBtn = document.querySelector('.close-btn');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
const navInner = document.querySelector('.nav-inner');
const header = document.querySelector('.header');


window.onscroll = () => {
    if (window.scrollY > 200) {
        header.classList.add('onScroll-bg');
    } else {
        header.classList.remove('onScroll-bg');
    }
};

// Aos animation
const ssAOS = function() {
    AOS.init({
        easing: 'ease-in-sine',
        delay: 100,
        duration: 1000,
        once: false,
    });
};
ssAOS();

// Event listeners
closeBtn.addEventListener('click', () => {
    bar1.classList.toggle('change');
    bar2.classList.toggle('change');
    bar3.classList.toggle('change');
    navInner.classList.toggle('hide-nav');
});

// tiny slider
const slider = tns({
    container: '.b-slider',
    items: 1,
    mouseDrag: true,
    controls: false,
    nav: false,
    responsive: {
        640: {
            edgePadding: 20,
            gutter: 20,
            items: 2
        },
        700: {
            gutter: 20,
            items: 3
        },
        1000: {
            items: 5,
        }
    }
});

const review_slider = tns({
    "container": ".review-cards-slider",
    "items": 1,
    "mouseDrag": true,
    "nav": false,
    "responsive": {
        "640": {
            "items": 1,
            "controls": true,
        },
        "768": {
            "items": 2,
        },
        "1000": {
            "items": 3
        }
    },
    "swipeAngle": false,
    "speed": 1000
});

const controls = document.querySelector('.tns-controls');

controls.children[0].innerHTML = `<i class="fas fa-chevron-left"></i>`;
controls.children[1].innerHTML = `<i class="fas fa-chevron-right"></i>`;