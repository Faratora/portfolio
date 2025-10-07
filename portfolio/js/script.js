// бургер меню

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const burger = document.getElementById("burger");
    const menu = document.getElementById("menu");
    const links = document.querySelectorAll(".header-nav__link");

    // Открыть/закрыть меню
    burger.addEventListener("click", (e) => {
        e.stopPropagation();
        header.classList.toggle("open");
        document.body.classList.toggle("lock", header.classList.contains("open"));
    });

    // Клик по ссылке — плавное закрытие и скролл
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }

            header.classList.remove("open");
            document.body.classList.remove("lock");
        });
    });

    // Закрыть меню при нажатии Esc
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            header.classList.remove("open");
            document.body.classList.remove("lock");
        }
    });

    // Закрывает меню при клике
    menu.addEventListener("click", (e) => e.stopPropagation());

    // Закрывает меню при клике вне его
    document.body.addEventListener("click", () => {
        header.classList.remove("open");
        document.body.classList.remove("lock");
    });
});





 // FAQ ACCORDION — раскрытие одного вопроса за раз + сохранение состояния
document.addEventListener('DOMContentLoaded', function () {
  const allDetails = document.querySelectorAll('.faq-list details');

  // Восстановление состояния аккордеона
  let savedIndex = localStorage.getItem('faq-open-index');
  if (savedIndex === null) {
    savedIndex = '0'; // открываем первый элемент
  }

  allDetails.forEach((detail, index) => {
    if (index.toString() === savedIndex) {
      detail.setAttribute('open', '');
    }

    detail.addEventListener('toggle', function () {
      if (detail.open) {
        // Закрываем все остальные
        allDetails.forEach((otherDetail, i) => {
          if (otherDetail !== detail) {
            otherDetail.removeAttribute('open');
          }
        });
        // Сохраняем индекс
        localStorage.setItem('faq-open-index', index.toString());
      } else {
        // Если всё закрыто — очищаем
        const anyOpen = Array.from(allDetails).some(d => d.open);
        if (!anyOpen) {
          localStorage.removeItem('faq-open-index');
        }
      }
    });
  });
});

// модальное окно
const modal = document.querySelector(".modal-container");
const openBtns = document.querySelectorAll(".package-button"); // все кнопки
const closeBtn = document.getElementById("closeModal");
const modalBox = document.querySelector(".modal__box");

// открыть по любой кнопке
openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // блокируем прокрутку
    });
});

// закрыть по крестику
closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // возвращаем прокрутку
});

// закрыть по клику вне окна
modal.addEventListener("click", e => {
  if (!modalBox.contains(e.target)) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
});






// Слайдер 
// slider

// const slider = document.querySelector('.portfolio-gallery'); 
// const sliderContainer = document.querySelector('.slider'); 

// let sliderShift = 0; 
// let sliderStep = 0; 
// let sliderSpeed = 8;

// const basicPadding = 20;

// function setSlider() {
//   const sliderWidth = slider.scrollWidth;
//   const containerWidth = sliderContainer.getBoundingClientRect().width;
  
//   sliderShift = (containerWidth - sliderWidth) / 2;
//   slider.style.transform = `translateX(${sliderShift}px)`;

//   if (sliderWidth <= containerWidth) {
//     sliderStep = 0;
//     slider.classList.add('disabled-slider');
//     slider.style.justifyContent = 'center'; 
//     document.querySelector('.hover-left').style.pointerEvents = 'none';
//     document.querySelector('.hover-right').style.pointerEvents = 'none';
//   } else {
//     slider.classList.remove('disabled-slider');
//     slider.style.justifyContent = 'flex-start'; 
//     document.querySelector('.hover-left').style.pointerEvents = 'auto';
//     document.querySelector('.hover-right').style.pointerEvents = 'auto';
//   }
// }

// function startSlider() { 
//   if (sliderStep !== 0) { 
//     sliderShift += sliderStep * sliderSpeed; 
//     const sliderWidth = slider.scrollWidth; 
//     const containerWidth = sliderContainer.getBoundingClientRect().width; 

//     const contentContainer = document.querySelector('.container');
//     const contentContainerWidth = contentContainer.getBoundingClientRect();
    
//     const leftSliderPadding = contentContainerWidth.left;
//     const rightSliderPadding = document.documentElement.clientWidth - contentContainerWidth.right;

//     const maxSliderShift = leftSliderPadding; 
//     const minSliderShift = containerWidth - sliderWidth - rightSliderPadding;
      
//     if (sliderShift > maxSliderShift) {
//       sliderShift = maxSliderShift; 
//     }
//     if (sliderShift < minSliderShift) {
//       sliderShift = minSliderShift; 
//     }
      
//     slider.style.transform = `translateX(${sliderShift}px)`; 
//   } 
//   requestAnimationFrame(startSlider); 
// } 
   
// document.querySelector('.hover-left').addEventListener('mouseenter', () => sliderStep = +1); 
// document.querySelector('.hover-left').addEventListener('mouseleave', () => sliderStep = 0); 
// document.querySelector('.hover-right').addEventListener('mouseenter', () => sliderStep = -1); 
// document.querySelector('.hover-right').addEventListener('mouseleave', () => sliderStep = 0); 
        
// window.addEventListener('load', () => {
//   setSlider();
//   startSlider();
// });

// window.addEventListener('resize', setSlider);


// // mobile slider

// let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
// const minSwipeDistance = 5;

// if (isTouchDevice) {
//   const leftArrow = document.querySelector('.hover-left');
//   const rightArrow = document.querySelector('.hover-right');

//   leftArrow.style.display = 'none';
//   rightArrow.style.display = 'none';

//   leftArrow.style.pointerEvents = 'none';
//   rightArrow.style.pointerEvents = 'none'; 

//   let startX = 0;
//   let currentShift = 0;
//   let isSwiping = false;

//   sliderContainer.addEventListener('touchstart', (e) => {
//     if (slider.classList.contains('disabled-slider')) return;
//     slider.style.transition = "none"; 
//     startX = e.touches[0].clientX;
//     currentShift = sliderShift;
//     isSwiping = false;  
//   }, { passive: true });

//   sliderContainer.addEventListener('touchmove', (e) => {
//     if (slider.classList.contains('disabled-slider')) return; 
//     const deltaX = e.touches[0].clientX - startX;

//     if (!isSwiping && Math.abs(deltaX) < minSwipeDistance) return;
    
//     isSwiping = true;
//     e.preventDefault();

//     sliderShift = currentShift + deltaX;

//     const sliderWidth = slider.scrollWidth;
//     const containerWidth = sliderContainer.getBoundingClientRect().width;
//     const minSliderShift = containerWidth - sliderWidth;
//     const maxSliderShift = 0;

//     if (sliderShift > maxSliderShift) sliderShift = maxSliderShift;
//     if (sliderShift < minSliderShift) sliderShift = minSliderShift;

//     slider.style.transform = `translateX(${sliderShift}px)`;
//   }, { passive: false });

//   sliderContainer.addEventListener('touchend', () => {
//     isSwiping = false;

//     slider.style.transition = "transform 0.3s ease-out";
//     slider.style.transform = `translateX(${sliderShift}px)`; 
//   }, { passive: true });
// }




// slider

const slider = document.querySelector('.portfolio__slider-wrapper'); 
const sliderContainer = document.querySelector('.portfolio__slider'); 

let sliderShift = 0; 
let sliderStep = 0; 
let sliderSpeed = 8;

const basicPadding = 20;

function setSlider() {
  const sliderWidth = slider.scrollWidth;
  const containerWidth = sliderContainer.getBoundingClientRect().width;
  
  sliderShift = (containerWidth - sliderWidth) / 2;
  slider.style.transform = `translateX(${sliderShift}px)`;

  if (sliderWidth <= containerWidth) {
    sliderStep = 0;
    slider.classList.add('disabled-slider');
    slider.style.justifyContent = 'center'; 
    document.querySelector('.hover-left').style.pointerEvents = 'none';
    document.querySelector('.hover-right').style.pointerEvents = 'none';
  } else {
    slider.classList.remove('disabled-slider');
    slider.style.justifyContent = 'flex-start'; 
    document.querySelector('.hover-left').style.pointerEvents = 'auto';
    document.querySelector('.hover-right').style.pointerEvents = 'auto';
  }
}

function startSlider() { 
  if (sliderStep !== 0) { 
    sliderShift += sliderStep * sliderSpeed; 
    const sliderWidth = slider.scrollWidth; 
    const containerWidth = sliderContainer.getBoundingClientRect().width; 

    const contentContainer = document.querySelector('.container');
    const contentContainerWidth = contentContainer.getBoundingClientRect();
    
    const leftSliderPadding = contentContainerWidth.left;
    const rightSliderPadding = document.documentElement.clientWidth - contentContainerWidth.right;

    const maxSliderShift = leftSliderPadding; 
    const minSliderShift = containerWidth - sliderWidth - rightSliderPadding;
      
    if (sliderShift > maxSliderShift) {
      sliderShift = maxSliderShift; 
    }
    if (sliderShift < minSliderShift) {
      sliderShift = minSliderShift; 
    }
      
    slider.style.transform = `translateX(${sliderShift}px)`; 
  } 
  requestAnimationFrame(startSlider); 
} 
   
document.querySelector('.hover-left').addEventListener('mouseenter', () => sliderStep = +1); 
document.querySelector('.hover-left').addEventListener('mouseleave', () => sliderStep = 0); 
document.querySelector('.hover-right').addEventListener('mouseenter', () => sliderStep = -1); 
document.querySelector('.hover-right').addEventListener('mouseleave', () => sliderStep = 0); 
        
window.addEventListener('load', () => {
  setSlider();
  startSlider();
});

window.addEventListener('resize', setSlider);


// mobile slider

let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
const minSwipeDistance = 5;

if (isTouchDevice) {
  const leftArrow = document.querySelector('.hover-left');
  const rightArrow = document.querySelector('.hover-right');

  leftArrow.style.display = 'none';
  rightArrow.style.display = 'none';

  leftArrow.style.pointerEvents = 'none';
  rightArrow.style.pointerEvents = 'none'; 

  let startX = 0;
  let currentShift = 0;
  let isSwiping = false;

  sliderContainer.addEventListener('touchstart', (e) => {
    if (slider.classList.contains('disabled-slider')) return;
    slider.style.transition = "none"; 
    startX = e.touches[0].clientX;
    currentShift = sliderShift;
    isSwiping = false;  
  }, { passive: true });

  sliderContainer.addEventListener('touchmove', (e) => {
    if (slider.classList.contains('disabled-slider')) return; 
    const deltaX = e.touches[0].clientX - startX;

    if (!isSwiping && Math.abs(deltaX) < minSwipeDistance) return;
    
    isSwiping = true;
    e.preventDefault();

    sliderShift = currentShift + deltaX;

    const sliderWidth = slider.scrollWidth;
    const containerWidth = sliderContainer.getBoundingClientRect().width;
    const minSliderShift = containerWidth - sliderWidth;
    const maxSliderShift = 0;

    if (sliderShift > maxSliderShift) sliderShift = maxSliderShift;
    if (sliderShift < minSliderShift) sliderShift = minSliderShift;

    slider.style.transform = `translateX(${sliderShift}px)`;
  }, { passive: false });

  sliderContainer.addEventListener('touchend', () => {
    isSwiping = false;

    slider.style.transition = "transform 0.3s ease-out";
    slider.style.transform = `translateX(${sliderShift}px)`; 
  }, { passive: true });
}

document.querySelector('.arrow-change').addEventListener('click', function(e) {
  e.preventDefault();
  const target = document.querySelector('#about-section');
  target.scrollIntoView({ behavior: 'smooth' });
});






