
function Burger(){
    const burger = document.querySelector('.menu_burger'),
          burgerWrapper = document.querySelector('.burger_wrapper');

    function burgerOpen(){
        burger.classList.add('active');
        burger.classList.remove('hidden');
        burgerWrapper.classList.add('active');
    }

    function burgerClose(){
        burger.classList.add('hidden');
        burger.classList.remove('active');
        burgerWrapper.classList.remove('active');
    }

    burger.addEventListener('click', function(){
        if(burger.classList.contains('hidden')){
            burgerOpen();
        } else if(burger.classList.contains('active')){
            burgerClose();
        }
    })
}

export default Burger;
