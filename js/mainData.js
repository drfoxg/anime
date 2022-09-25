
const mainData = () => {

    const renderAnimeList = (array, ganres) => {

        console.log('ganres: ', ganres);
        console.log('array: ', array);

    }

    const renderTopAnime = (array) => {

        const wrapper = document.querySelector('.filter__gallery');

        wrapper.innerHTML = '';
        array.forEach(item => {

            wrapper.insertAdjacentHTML('beforeend', `
                <div class="product__sidebar__view__item set-bg mix" data-setbg="${item.image}">
                    <div class="ep">${item.rating} / 10</div>
                    <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
                    <h5><a href="/anime-details.html">${item.title}</a></h5>
                </div>              
            `);

        });

        bgElements('.set-bg', wrapper);

    }

    fetch('https://anime-intensity-default-rtdb.europe-west1.firebasedatabase.app/anime.json')
        .then((responce) => {
            return responce.json()
        })
        .then((anime) => {

            console.log('anime: ', anime);

            const ganres = new Set();

            // вывод первых 5 самых просматриваемых аниме на основе значения views
            renderTopAnime(anime.sort((a, b) => b.views - a.views).slice(0, 5));

            anime.forEach((items) => {
                ganres.add(items.ganre);
            });

            renderAnimeList(anime, ganres);

        });



};

mainData();