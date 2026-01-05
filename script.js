document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. МОБИЛНО МЕНЮ --- */
    const menuBtn = document.querySelector('.navbar-toggle');
    const navMenu = document.querySelector('.navbar-menu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
            const icon = menuBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    }

    /* --- 2. СТРАНИЦА НОВИНИ --- */
    const modal = document.getElementById("newsModal");
    const closeBtn = document.querySelector(".close-modal");

    if (modal && closeBtn) { 
        document.querySelectorAll('.news-read-more').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const card = this.closest('.news-archive-card') || this.closest('.news-card'); 
                const title = card.querySelector('h2, h3, h4').innerText; 
                const imgSrc = card.querySelector('img').src; 
                const fullContent = card.querySelector('.news-full-description').innerHTML; 

                document.getElementById('modalTitle').innerText = title; 
                document.getElementById('modalImg').src = imgSrc; 
                document.getElementById('modalFullText').innerHTML = fullContent; 

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            });
        });

        closeBtn.onclick = () => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        };

        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        };
    }

    /* --- 3. СТРАНИЦА ГАЛЕРИЯ (С НОВИТЕ ПЪТИЩА) --- */
    const grid = document.getElementById('gallery-grid');
    const filterSelect = document.getElementById('movie-filter');
    const lightbox = document.getElementById('galleryLightbox');

    if (grid) { 
        // Карта на пътищата според категорията
        const categoryPaths = {
            'classics': 'pictures/gallery/disney/',
            'pixar': 'pictures/gallery/pixar/',
            'marvel': 'pictures/gallery/marvel/',
            'starwars': 'pictures/gallery/star wars/'
        };

        const imagesData = [
            // КЛАСИКИ
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
            { file: 'dr-strange.jpg', category: 'marvel', title: 'Доктор Стрейндж' },
            { file: 'spiderman1.jpg', category: 'marvel', title: 'Спайдър-мен' },
            { file: 'iron-man1.jpg', category: 'marvel', title: 'Железният човек' },
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
                    // Изчисляваме динамичния път
                    const folder = categoryPaths[img.category] || 'pictures/';
                    const fullPath = folder + img.file;

                    const item = document.createElement('div');
                    item.className = 'gallery-item';
                    
                    // Подаваме пълния път към снимката за Lightbox
                    item.setAttribute('onclick', `openLightbox('${fullPath}', '${img.title}')`);
                    
                    item.innerHTML = `
                        <img src="${fullPath}" alt="${img.title}">
                        <div class="gallery-item-overlay"><i class="fas fa-expand"></i></div>
                    `;
                    grid.appendChild(item);
                }
            });
        }
        
        displayImages();
        
        if (filterSelect) {
            filterSelect.addEventListener('change', (e) => displayImages(e.target.value));
        }

        const closeLightboxBtn = document.querySelector('#galleryLightbox .close-modal');
        if (closeLightboxBtn) {
            closeLightboxBtn.onclick = () => {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            };
        }

        window.addEventListener('click', (event) => {
            if (event.target == lightbox) {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});

function openLightbox(src, title) {
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');

    if (lightbox && lightboxImg && lightboxTitle) {
        lightboxImg.src = src; 
        lightboxTitle.innerText = title; 
        lightbox.style.display = 'block'; 
        document.body.style.overflow = 'hidden'; 
    }
}