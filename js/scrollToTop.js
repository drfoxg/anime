
scrollToTop = () => {

    const topBtn = document.querySelector('#scrollToTopButton');

    topBtn.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('event: ', event);

        /* работает не кроссбраузерно        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        */

        seamless.scrollIntoView(document.querySelector(".header"), {
            behavior: "smooth",
            block: "center",
            inline: "center",
        });

    });

};

scrollToTop();