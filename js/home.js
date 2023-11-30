function changePage(pageNum) {
    const currentButton = document.getElementsByClassName('current-button')[0];
    if (currentButton.value - 1 === pageNum) {
        return;
    }
    currentButton.classList.remove('current-button');

    const newCurrentButton = document.getElementsByClassName('page-button')[pageNum];
    newCurrentButton.classList.add('current-button');

    loadBirds();
}

function loadBirds() {
    const currentButton = document.getElementsByClassName('current-button')[0];

    const firstBirdId = parseInt(currentButton.innerText) * 10 - 9;
    const lastBirdId = firstBirdId + 10;

    fetchUserBirds(firstBirdId, lastBirdId);
}

function fetchUserBirds(firstBirdId, lastBirdId) {
    const preloader = document.getElementsByClassName('preloader')[0];
    preloader.style.display = '';

    const userBirds = document.getElementsByClassName("user-birds")[0];
    userBirds.innerHTML = '';

    const userBirdsPromises = [];

    for (let birdId = firstBirdId; birdId < lastBirdId; birdId++) {
        userBirdsPromises.push(
            fetch(`https://jsonplaceholder.typicode.com/photos/${birdId}`)
                .then(response => {
                        if (!response.ok) {
                            throw new Error(`Http error: ${response.status}`);
                        }
                        return response.json();
                    })
                .then(json => {
                    let newBird = document.createElement('p');
                    newBird.classList.add('user-bird');

                    const birdId = json['id'];
                    const birdImgUrl = json['thumbnailUrl'];

                    let birdIdElem = document.createElement('p');
                    birdIdElem.innerHTML = birdId;
                    birdIdElem.classList.add('bird-id')

                    let birdImg = document.createElement('img');
                    birdImg.src = birdImgUrl;

                    newBird.append(birdIdElem);
                    newBird.append(birdImg);

                    userBirds.append(newBird);

                    return json;
                })
                .catch((error) => {
                    const errorElem = document.createElement('div');
                    errorElem.innerHTML = `<div class="fetch-error">Error while loading bird :(</div>`;
                    userBirds.append(errorElem);
                })
        )
    }

    Promise.all(userBirdsPromises)
        .then(() => {
            const preloader = document.getElementsByClassName('preloader')[0];
            preloader.style.display = 'none';
        })
}

document.addEventListener("DOMContentLoaded", function () {
    loadBirds();

    const pageButtons = document.getElementsByClassName('page-buttons')[0].children;

    for (let i = 0; i < pageButtons.length; i++) {
        pageButtons[i].onclick = function() {
            changePage(i);
        };
    }
})