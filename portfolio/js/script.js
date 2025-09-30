// бургер меню

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('burger').addEventListener("click", function () {
        document.querySelector('.header').classList.toggle('open')
    })
})


// Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Действие при клике
        document.querySelector('.header').classList.remove('open')
    }
});

// Закрыть меню при клике вне его
document.getElementById('menu').addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.getElementById('burger').addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    // Действие при клике
    document.querySelector('.header').classList.remove('open')
});



 // FAQ ACCORDEON — раскрытие одного вопроса за раз + сохранение состояния
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




