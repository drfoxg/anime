
const bgElements = (classBg, node = document) => {

    const elements = node.querySelectorAll(classBg);

    elements.forEach((imageBlock, indexImageBlock, array) => {

        const src = imageBlock.dataset.setbg;
        imageBlock.style.backgroundImage = `url(${src})`;

    });

    /* так не модно перебирать массив
    for (let i = 0; i < elements.length; i++) {

        const src = elements[i].dataset.setbg;
        elements[i].style.backgroundImage = `url(${src})`;

    }
    */

};

bgElements('.set-bg');