
// вызов выпадашки и ее позиционирование, сначала получаем координаты через рект, потом двигаем куда надо
// import { debounce } from "./debounce";

export const initChoices = () => {
    const adjustElementPosition = (element, count = 0) => {
        const rect = element.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
    
       if (rect.left < 0 ) {
        element.style.left = "0";
        element.style.right = "auto";
        element.style.transform = "translateX(0)";
       } else if ( rect.right > viewportWidth) {
        element.style.left = "auto";
        element.style.right = "0";
        element.style.transform = "translateX(0)";
       } else {
        element.style.left = "50%";
        element.style.right = "auto";
        element.style.transform = "translateX(-50%)";
       };
    
       const postRect = element.getBoundingClientRect();
    
       if ((postRect.left < 0 || postRect.right > viewportWidth) && count < 3) {
        count++;
        adjustElementPosition(element, count);
       }
    };
    
    
    const choice = document.querySelectorAll(".choices");
    
    choice.forEach((choices) => {
        const btn = choices.querySelector(".choices__btn");
        const box = choices.querySelector(".choices__box");
    
        btn.addEventListener('click', () => {
            box.classList.toggle("choices__box_open");
    
            choice.forEach(otherChoice => {
                if(otherChoice !== choices) {
                    otherChoice
                        .querySelector('.choices__box')
                        .classList.remove('choices__box_open')
                }
            })
    
            adjustElementPosition(box);
        });
    
        window.addEventListener("resize", () => {
            adjustElementPosition(box);
        });
    });

};

 