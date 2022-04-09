import {tns} from 'tiny-slider';

function Slider(){
    const sliderWrapper = document.querySelector('.reviewz_wrapper'),
          sliders = document.querySelectorAll('.reviewz_wrapper-list'),
          button = document.querySelectorAll('.reviews_btn li'),
          reviews = document.querySelector('.reviews'),
          widtz = window.getComputedStyle(reviews).width;
    let scrollX = 0,
        width,
        widthScroll,
        widthNoPx = Math.floor(widtz.replace(/px/g, '')),
        slaiderWhite;

    function sliderListWidth(scroll, slid, mar, wid, plus){
        width = Math.floor(widtz.replace(/px/g, '') / 3 - scroll);
        sliderWrapper.style.width = slid * sliders.length + mar + 'px';
        slaiderWhite = wid;

        widthScroll = width + plus;
    }

    function firstActive(scroll, width){
        sliderWrapper.style.transform = `translateX(-${scroll}px)`;
        sliders[1].style.width = `${width}px`;
    }

    if(widthNoPx > 1700){
        sliderListWidth(78, 550, 85, 500, 50);
    } 
    else if(widthNoPx > 850 && widthNoPx < 1700){
        sliderListWidth(78, 315, 25, 300, 80)
    } 
    else if(widthNoPx > 700 && widthNoPx < 800){
        sliderListWidth(15, 225, 25, 200, 0)
    } 
    else if(widthNoPx > 400 && widthNoPx < 600){
        sliderListWidth(9, 130, 25, 120, 0);
    } else{
        var slider = tns({
            container: '.reviewz_wrapper',
            items: 1,
            slideBy: 'page',
            autoplay: false
          });     
    }

    function slaidersWidth(){
        sliders.forEach(slider => {
            slider.style.width = slaiderWhite + 'px';
            slider.classList.remove('active');
        });

        button.forEach(btn => {
            btn.style.opacity = 0.7;
        })
    }

    function activeSlid(width, id){
        slaidersWidth();
        sliders[id - 1].classList.add('active');
        sliders[id - 1].style.width = `${width}px`; 
        button[id - 1].style.opacity = 1;
    }

    slaidersWidth();

    sliders[1].classList.add('active');

    if(widthNoPx > 1700){
        firstActive(550, 636);
    } 
    else if (widthNoPx > 850 && widthNoPx < 1700){
        firstActive(328, 300);
    } 
    else if (widthNoPx > 700 && widthNoPx < 800){
        firstActive(225, 250);
    } 
    else if (widthNoPx > 400 && widthNoPx < 600){
        firstActive(132, 150);
    }
 
    function activeSlider(id){
        if(widthNoPx > 1700){
            activeSlid(636, id);
        } 
        else if(widthNoPx > 850 && widthNoPx < 1700){
            activeSlid(300, id)
        } 
        else if(widthNoPx > 700 && widthNoPx < 800){
            activeSlid(250, id);
        } 
        else if(widthNoPx > 400 && widthNoPx < 600){
            activeSlid(150, id);
        } 
    }
        
    button.forEach(btn => {
        btn.addEventListener('click', function(e){
            const dataId = e.target.getAttribute('data-id');
            
            scrollX = widthScroll * (dataId - 1);

            sliderWrapper.style.transform = `translateX(-${scrollX}px)`;

            activeSlider(dataId);
        })
    });

    sliders.forEach(slid => {
        slid.addEventListener('click', function(e){
            const slaidText = e.target.closest('[data-slider]'),
                  res = slaidText.getAttribute('data-slider');

            scrollX = widthScroll * (res - 1);

            sliderWrapper.style.transform = `translateX(-${scrollX}px)`;
            activeSlider(res);
        })
    })
}

export default Slider;