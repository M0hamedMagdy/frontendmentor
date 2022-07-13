const sliders = Array.from(document.querySelectorAll('.slider'));
const btnRight = Array.from(document.querySelectorAll('.btn-right'));
const btnLeft = Array.from(document.querySelectorAll('.btn-left'));

// find index of active class 
// remove it 
// add active to the next one 


function slideRight() {     
    let indexOf = sliders.findIndex( slider => slider.classList.contains('active'))
    if(indexOf + 1 < sliders.length) {         
        sliders[indexOf].classList.remove('active')
        sliders[indexOf + 1 ].classList.add('active')
    } else { 
        return 0
    }
    
}

function slideLeft() {     
    let indexOf = sliders.findIndex( slider => slider.classList.contains('active'))
    if(indexOf - 1 <= sliders.length && indexOf !== 0) {         
        sliders[indexOf].classList.remove('active')
        sliders[indexOf - 1 ].classList.add('active')
    } else { 
        return 0
    }
    
}





btnRight.forEach(btn => btn.addEventListener('click' ,  slideRight))
 btnLeft.forEach(btn => btn.addEventListener('click' , slideLeft))