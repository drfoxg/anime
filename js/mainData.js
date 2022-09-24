
const mainData = () => {

    fetch('https://anime-intensity-default-rtdb.europe-west1.firebasedatabase.app/anime.json')
        .then((responce) => {
            return responce.json()
        })
        .then((anime) => {
            console.log('data: ', anime);
        });

};

mainData();