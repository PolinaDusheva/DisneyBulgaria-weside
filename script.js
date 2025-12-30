document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.querySelector('.nav');
    const navContainer = document.querySelector('.nav-container');

    // Проверка дали бутонът вече е създаден
    let menuBtn = document.querySelector('.mobile-menu-toggle');

    if (!menuBtn) {
        menuBtn = document.createElement('div');
        menuBtn.classList.add('mobile-menu-toggle');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        navContainer.prepend(menuBtn);
    }

    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });


//Изкачащ прозорец за показване на новина 
    const modal = document.getElementById("newsModal");
    const closeBtn = document.querySelector(".close-modal");

    // Функция за отваряне на статия
    // Добавяме слушател към всички бутони "Прочети повече"
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Намираме родителската карта на новината
            const card = this.closest('.archive-card') || this.closest('.news-card');
            
            // Вземаме данните от нея
            const title = card.querySelector('h2, h3, h4').innerText;
            const imgSrc = card.querySelector('img').src;
            const content = "Това е пълното съдържание на статията. Тук можеш да добавиш много повече текст, който не се вижда в малкия грид. Disney продължава да вдъхновява милиони хора по света със своите нови продукции и иновации в увеселителните паркове.";

            // Попълваме модала
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalImg').src = imgSrc;
            document.getElementById('modalFullText').innerText = content;

            // Показваме модала
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Спираме скрола на страницата отдолу
        });
    });

    // Затваряне при клик на X
    closeBtn.onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };

    // Затваряне при клик извън прозореца
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };
});