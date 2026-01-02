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

/*//////////////////////////////////////////// --- СТРАНИЦА НОВИНИ --- ////////////////////////////////////////////*/
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
/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

/*//////////////////////////////////////////// --- СТРАНИЦА ГАЛЕРИЯ --- ////////////////////////////////////////////*/
document.addEventListener('DOMContentLoaded', () => {
    const imagesData = [
        // КЛАСИКИ (Disney Classics)
        { file: 'mickey-mouse.jpg', category: 'classics', title: 'Мики Маус' },
        { file: 'snow-white.jpg', category: 'classics', title: 'Снежанка' },
        { file: 'lion-king.jpg', category: 'classics', title: 'Цар Лъв' },
        { file: 'cinderella.jpg', category: 'classics', title: 'Пепеляшка' },
        { file: 'dragon.jpg', category: 'classics', title: 'Аладин' },
        { file: 'nutcracker.jpg', category: 'classics', title: 'Лешникотрошачката' },
        { file: 'avatar.jpg', category: 'classics', title: 'Аватар' },
        { file: 'frozen-olaf.jpg', category: 'classics', title: 'Замръзналото кралство' },
        { file: 'coco-secret.jpg', category: 'classics', title: 'Тайната на коко' },
        { file: 'aladin.jpg', category: 'classics', title: 'Аладин' },
        { file: 'aladin.jpg', category: 'classics', title: 'Аладин' },
        { file: 'aladin.jpg', category: 'classics', title: 'Аладин' },
        { file: 'aladin.jpg', category: 'classics', title: 'Аладин' },
        
        
        // PIXAR
        { file: 'toy-story.jpg', category: 'pixar', title: 'Играта на играчките' },
        { file: 'finding-nemo.jpg', category: 'pixar', title: 'Търсенето на Немо' },
        { file: 'coco.jpg', category: 'pixar', title: 'Тайната на Коко' },
        { file: 'cars.jpg', category: 'pixar', title: 'Колите' },
        
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

    const grid = document.getElementById('gallery-grid');
    const filterSelect = document.getElementById('movie-filter');

    // Функция за показване на снимките
    function displayImages(category = 'all') {
        grid.innerHTML = ''; // Изчистваме грида
        
        imagesData.forEach(img => {
            if (category === 'all' || img.category === category) {
                const item = document.createElement('div');
                item.className = 'gallery-item';
                item.innerHTML = `
                    <img src="pictures/${img.file}" alt="${img.title}">
                    <div class="item-overlay">
                        <i class="fas fa-expand"></i>
                    </div>
                `;
                grid.appendChild(item);
            }
        });
    }

    // Първоначално зареждане
    displayImages();

    // Слушател за промяна във филтъра
    filterSelect.addEventListener('change', (e) => {
        displayImages(e.target.value);
    });
});
/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/