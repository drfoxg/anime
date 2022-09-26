
const detailData = () => {

    const renderGanreList = (ganres) => {
        const dropdownBlock = document.querySelector('.header__menu .dropdown');

        dropdownBlock.innerHTML = '';
        ganres.forEach(ganre => {
            dropdownBlock.insertAdjacentHTML('afterbegin', `
                <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
            `)
        });
    }

    const renderAnimeDetails = (array, itemId) => {

        const animeObj = array.find(item => item.id == itemId);
        const imageBlock = document.querySelector('.anime__details__pic');
        const viewsBlock = imageBlock.querySelector('.view');
        const titleBlock = document.querySelector('.anime__details__title h3');
        const subTitleBlock = document.querySelector('.anime__details__title span');
        const descriptionBlock = document.querySelector('.anime__details__text p');


        if (animeObj) {

            imageBlock.dataset.setbg = animeObj.image;
            viewsBlock.innerHTML = '';
            viewsBlock.insertAdjacentHTML('beforeend', `
                <i class="fa fa-eye"></i> ${animeObj.views}</div>
            `);

            titleBlock.textContent = animeObj.title;
            subTitleBlock.textContent = animeObj['original-title'];
            descriptionBlock.textContent = animeObj.description;

            bgElements('.set-bg', document);

        } else {
            console.log('Такого аниме нет!');
        }

        console.log('array: ', array);
        console.log('itemId: ', itemId);

    }

    fetch('https://anime-intensity-default-rtdb.europe-west1.firebasedatabase.app/anime.json')
        .then((responce) => responce.json())
        .then((anime) => {

            const ganres = new Set();

            const ganreParams = new URLSearchParams(window.location.search).get('itemId');


            anime.forEach((items) => {
                ganres.add(items.ganre);
            });

            if (ganreParams) {
                renderAnimeDetails(anime, ganreParams);
            } else {
                console.log('Такого аниме нет!');
            }

            renderGanreList(ganres);

        });
}

detailData();