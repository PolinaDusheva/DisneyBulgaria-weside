document.addEventListener('DOMContentLoaded', () => {
    /* --- МОБИЛНО МЕНЮ (Global) --- */
    // const navMenu = document.querySelector('.nav');
    // const navContainer = document.querySelector('.nav-container');
    // const navLinks = document.querySelectorAll('.nav-link-item');

    // // Автоматично създаване на бутона, ако липсва в HTML
    // let menuBtn = document.querySelector('.mobile-menu-toggle');
    // if (!navContainer) return; // Защита, ако няма навигация на страницата

    // if (!menuBtn) {
    //     menuBtn = document.createElement('div');
    //     menuBtn.classList.add('mobile-menu-toggle');
    //     menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    //     navContainer.prepend(menuBtn);
    // }

    // // Отваряне/Затваряне на менюто
    // menuBtn.addEventListener('click', () => {
    //     navMenu.classList.toggle('active');
    //     toggleMenuIcon();
    // });

    // // ОПТИМИЗАЦИЯ: Затваряне на менюто при клик върху линк
    // navLinks.forEach(link => {
    //     link.addEventListener('click', () => {
    //         if (navMenu.classList.contains('active')) {
    //             navMenu.classList.remove('active');
    //             toggleMenuIcon();
    //         }
    //     });
    // });

    // // Помощна функция за смяна на иконата
    // function toggleMenuIcon() {
    //     const icon = menuBtn.querySelector('i');
    //     if (navMenu.classList.contains('active')) {
    //         icon.classList.replace('fa-bars', 'fa-times');
    //     } else {
    //         icon.classList.replace('fa-times', 'fa-bars');
    //     }
    // }
    // const menuBtn = document.querySelector('.mobile-menu-toggle');
    // const navMenu = document.querySelector('.nav');

    // if (menuBtn && navMenu) {
    //     console.log("Бутонът е намерен!"); // Проверка в конзолата (F12)

    //     menuBtn.addEventListener('click', (e) => {
    //         e.stopPropagation(); // Спира пренасянето на клика към други елементи
    //         navMenu.classList.toggle('active');
            
    //         // Смяна на иконата
    //         const icon = menuBtn.querySelector('i');
    //         if (navMenu.classList.contains('active')) {
    //             icon.classList.replace('fa-bars', 'fa-times');
    //         } else {
    //             icon.classList.replace('fa-times', 'fa-bars');
    //         }
    //     });
    // } else {
    //     console.error("Менюто или бутонът не са намерени в HTML!");
    // }

// /*//////////////////////////////////////////// --- СТРАНИЦА НОВИНИ --- ////////////////////////////////////////////*/
// //Изкачащ прозорец за показване на новина 
//     const modal = document.getElementById("newsModal");
//     const closeBtn = document.querySelector(".close-modal");

//     // Функция за отваряне на статия
//     // Добавяме слушател към всички бутони "Прочети повече"
//     document.querySelectorAll('.read-more').forEach(button => {
//         button.addEventListener('click', function(e) {
//             e.preventDefault();
            
//             // Намираме родителската карта на новината
//             const card = this.closest('.archive-card') || this.closest('.news-card');
            
//             // Вземаме данните от нея
//             const title = card.querySelector('h2, h3, h4').innerText;
//             const imgSrc = card.querySelector('img').src;
//             const content = "Това е пълното съдържание на статията. Тук можеш да добавиш много повече текст, който не се вижда в малкия грид. Disney продължава да вдъхновява милиони хора по света със своите нови продукции и иновации в увеселителните паркове.";

//             // Попълваме модала
//             document.getElementById('modalTitle').innerText = title;
//             document.getElementById('modalImg').src = imgSrc;
//             document.getElementById('modalFullText').innerText = content;

//             // Показваме модала
//             modal.style.display = "block";
//             document.body.style.overflow = "hidden"; // Спираме скрола на страницата отдолу
//         });
//     });

//     // Затваряне при клик на X
//     closeBtn.onclick = () => {
//         modal.style.display = "none";
//         document.body.style.overflow = "auto";
//     };

//     // Затваряне при клик извън прозореца
//     window.onclick = (event) => {
//         if (event.target == modal) {
//             modal.style.display = "none";
//             document.body.style.overflow = "auto";
//         }
//     };
// });
/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

/*//////////////////////////////////////////// --- СТРАНИЦА ГАЛЕРИЯ --- ////////////////////////////////////////////*/
// document.addEventListener('DOMContentLoaded', () => {
//     const imagesData = [
//         // КЛАСИКИ (Disney Classics)
//         { file: 'mickey-mouse.jpg', category: 'classics', title: 'Мики Маус' },
//         { file: 'snow-white.jpg', category: 'classics', title: 'Снежанка' },
//         { file: 'lion-king.jpg', category: 'classics', title: 'Цар Лъв' },
//         { file: 'cinderella.jpg', category: 'classics', title: 'Пепеляшка' },
//         { file: 'dragon.jpg', category: 'classics', title: 'Аладин' },
//         { file: 'nutcracker.jpg', category: 'classics', title: 'Лешникотрошачката' },
//         { file: 'avatar.jpg', category: 'classics', title: 'Аватар' },
//         { file: 'frozen-olaf.jpg', category: 'classics', title: 'Замръзналото кралство' },
//         { file: 'coco-secret.jpg', category: 'classics', title: 'Тайната на коко' },
//         { file: 'aladin.jpg', category: 'classics', title: 'Аладин' },
//         { file: 'aladin.jpg', category: 'classics', title: 'Аладин' },
//         { file: 'aladin.jpg', category: 'classics', title: 'Аладин' },
//         { file: 'aladin.jpg', category: 'classics', title: 'Аладин' },
        
        
//         // PIXAR
//         { file: 'toy-story.jpg', category: 'pixar', title: 'Играта на играчките' },
//         { file: 'finding-nemo.jpg', category: 'pixar', title: 'Търсенето на Немо' },
//         { file: 'coco.jpg', category: 'pixar', title: 'Тайната на Коко' },
//         { file: 'cars.jpg', category: 'pixar', title: 'Колите' },
        
//         // MARVEL
//         { file: 'iron-man.jpg', category: 'marvel', title: 'Железният човек' },
//         { file: 'deadpull.jpg', category: 'marvel', title: 'Дедпул' },
//         { file: 'avengers.jpg', category: 'marvel', title: 'Отмъстителите' },
//         { file: 'marvel.jpg', category: 'marvel', title: 'Отмъстителите' },
//         { file: 'spiderman.jpg', category: 'marvel', title: 'Спайдър-мен' },
//         { file: 'raketa.jpg', category: 'marvel', title: 'Ракета' },
//         { file: 'spiderman.jpg', category: 'marvel', title: 'Спайдър-мен' },
//         { file: 'dr-strange.jpg', category: 'marvel', title: 'Доктор Стрейндж' },
//         { file: 'spiderman1.jpg', category: 'marvel', title: 'Спайдър-мен' },
//         { file: 'iron-man1.jpg', category: 'marvel', title: 'Железният човек' },
//         { file: 'spiderman2.jpg', category: 'marvel', title: 'Спайдър-мен' },
//         { file: 'dr-strange1.jpg', category: 'marvel', title: 'Доктор Стрейндж' },
//         // STAR WARS
//         { file: 'darth-vader.jpg', category: 'starwars', title: 'Дарт Вейдър' },
//         { file: 'mandalorian.jpg', category: 'starwars', title: 'Мандалорецът' },
//         { file: 'yoda.jpg', category: 'starwars', title: 'Йода' },
//         { file: 'stormtrooper.jpg', category: 'starwars', title: 'Щурмовак' }
//     ];

//     const grid = document.getElementById('gallery-grid');
//     const filterSelect = document.getElementById('movie-filter');

//     // Функция за показване на снимките
//     function displayImages(category = 'all') {
//         grid.innerHTML = ''; // Изчистваме грида
        
//         imagesData.forEach(img => {
//             if (category === 'all' || img.category === category) {
//                 const item = document.createElement('div');
//                 item.className = 'gallery-item';
//                 item.innerHTML = `
//                     <img src="pictures/${img.file}" alt="${img.title}">
//                     <div class="item-overlay">
//                         <i class="fas fa-expand"></i>
//                     </div>
//                 `;
//                 grid.appendChild(item);
//             }
//         });
//     }

//     // Първоначално зареждане
//     displayImages();

//     // Слушател за промяна във филтъра
//     filterSelect.addEventListener('change', (e) => {
//         displayImages(e.target.value);
//     });
// });




/* --- 1. МОБИЛНО МЕНЮ (Работи на всички страници) --- */
const menuBtn = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav');

if (menuBtn && navMenu) {
    console.log("Бутонът е намерен!");
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        //alert("Кликна ме!"); // АКО ТОВА СЕ ПОЯВИ, ЗНАЧИ СКРИПТЪТ РАБОТИ
        navMenu.classList.toggle('active');
        
        const icon = menuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });
}

/* --- 2. СТРАНИЦА НОВИНИ (Безопасна проверка) --- */
const modal = document.getElementById("newsModal");
const closeBtn = document.querySelector(".close-modal");

// ПРАВИМ ПРОВЕРКА: Изпълни само ако модалът съществува (т.е. сме в Новини)
if (modal && closeBtn) { 
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.archive-card') || this.closest('.news-card');
            const title = card.querySelector('h2, h3, h4').innerText;
            const imgSrc = card.querySelector('img').src;

            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalImg').src = imgSrc;
            document.getElementById('modalFullText').innerText = "Това е пълното съдържание...";

            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        });
    });

    closeBtn.onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };
}

/* --- 3. СТРАНИЦА ГАЛЕРИЯ (Безопасна проверка) --- */
const grid = document.getElementById('gallery-grid');
const filterSelect = document.getElementById('movie-filter');

// ПРАВИМ ПРОВЕРКА: Изпълни само ако гридът съществува
if (grid) { 
    const imagesData = [
        // КЛАСИКИ (Disney Classics)
        { file: 'mickey-mouse.jpg', category: 'classics', title: 'Мики Маус' },
        { file: 'snow-white.jpg', category: 'classics', title: 'Снежанка' },
        { file: 'lion-king.jpg', category: 'classics', title: 'Цар Лъв' },
        { file: 'cinderella.jpg', category: 'classics', title: 'Пепеляшка' },
        { file: 'aladin.jpg', category: 'classics', title: 'Аладин' },
        { file: 'nutcracker.jpg', category: 'classics', title: 'Лешникотрошачката' },
        { file: 'avatar.jpg', category: 'classics', title: 'Аватар' },
        { file: 'frozen-olaf.jpg', category: 'classics', title: 'Замръзналото кралство' },
        { file: 'coco-secret.jpg', category: 'classics', title: 'Тайната на коко' },
        { file: 'alice.jpg', category: 'classics', title: 'Алиса в страната на чудесата' },
        { file: 'tangled.jpg', category: 'classics', title: 'Рапунцел' },
        { file: 'little-mermaid.jpg', category: 'classics', title: 'Малката русалка' },
        
        
        // PIXAR
        { file: 'toy-story-2.jpg', category: 'pixar', title: 'Играта на играчките' },
        { file: 'nemo.jpg', category: 'pixar', title: 'Търсенето на Немо' },
        { file: 'coco.jpg', category: 'pixar', title: 'Тайната на Коко' },
        { file: 'monsters-ood.jpg', category: 'pixar', title: 'Таласъми отдолу' },
        { file: 'wish.jpg', category: 'pixar', title: 'Желание' },
        { file: 'elemental.jpg', category: 'pixar', title: 'Елементи' },
        { file: 'ratatouille.jpg', category: 'pixar', title: 'Рататуй' },
        { file: 'inside-out.jpg', category: 'pixar', title: 'Отвътре навън' },
        { file: 'aladin-banner.jpg', category: 'pixar', title: 'Аладин' },
        { file: 'brave-heart.jpg', category: 'pixar', title: 'Храбро сърце' },
        { file: 'cars.jpg', category: 'pixar', title: 'Колите' },
        { file: 'up.jpg', category: 'pixar', title: 'В небето' },

        // MARVEL
        { file: 'iron-man.jpg', category: 'marvel', title: 'Железният човек' },
        { file: 'deadpull.jpg', category: 'marvel', title: 'Дедпул' },
        { file: 'avengers.jpg', category: 'marvel', title: 'Отмъстителите' },
        { file: 'marvel.jpg', category: 'marvel', title: 'Отмъстителите' },
        { file: 'spiderman.jpg', category: 'marvel', title: 'Спайдър-мен' },
        { file: 'raketa.jpg', category: 'marvel', title: 'Ракета' },
        { file: 'spiderman.jpg', category: 'marvel', title: 'Спайдър-мен' },
        { file: 'dr-strange.jpg', category: 'marvel', title: 'Доктор Стрейндж' },
        { file: 'spiderman1.jpg', category: 'marvel', title: 'Спайдър-мен' },
        { file: 'iron-man1.jpg', category: 'marvel', title: 'Железният човек' },
        { file: 'spiderman2.jpg', category: 'marvel', title: 'Спайдър-мен' },
        { file: 'dr-strange1.jpg', category: 'marvel', title: 'Доктор Стрейндж' },

        // STAR WARS
        { file: 'darth-vader.jpg', category: 'starwars', title: 'Дарт Вейдър' },
        { file: 'mandalorian.jpg', category: 'starwars', title: 'Мандалорецът' },
        { file: 'yoda.jpg', category: 'starwars', title: 'Йода' },
        { file: 'stormtrooper.jpg', category: 'starwars', title: 'Щурмовак' }
    ];

    function displayImages(category = 'all') {
        grid.innerHTML = ''; 
        imagesData.forEach(img => {
            if (category === 'all' || img.category === category) {
                const item = document.createElement('div');
                item.className = 'gallery-item';
                item.innerHTML = `
                    <img src="pictures/${img.file}" alt="${img.title}">
                    <div class="item-overlay"><i class="fas fa-expand"></i></div>
                `;
                grid.appendChild(item);
            }
        });
    }
    displayImages();
    if (filterSelect) {
        filterSelect.addEventListener('change', (e) => displayImages(e.target.value));
    }
}
});
/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/