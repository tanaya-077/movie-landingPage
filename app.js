
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.page1'); 
let SliderDom = carouselDom.querySelector('.list'); 
let thumbnailBorderDom = document.querySelector('.thumbnail'); 
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

let timeRunning = 2000;
let runTimeOut;


thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);


nextDom.onclick = function () {
    showSlider('next');
};

prevDom.onclick = function () {
    showSlider('prev');
};

// Slider switch function
function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.item');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

   
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
}
