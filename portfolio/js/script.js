// бургер меню

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




