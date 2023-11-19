document.addEventListener("DOMContentLoaded", function () {
    function generateMissionCard(name, description, reward, timeLimit) {
        const missionCard = document.createElement('div');
        missionCard.classList.add('card');
        missionCard.classList.add('mission-card');

        const missionName = document.createElement('h4');
        missionName.innerHTML = name;
        const missionDescription = document.createElement('div');
        missionDescription.innerHTML = description;
        missionDescription.classList.add('card-description')
        const missionReward = document.createElement('div');
        missionReward.innerHTML = reward;
        const missionTimeLimit = document.createElement('div');
        missionTimeLimit.innerHTML = timeLimit;

        const acceptButton = document.createElement('button');
        acceptButton.innerHTML = `Accept`;
        acceptButton.classList.add('card-button')

        missionCard.append(missionName)
        missionCard.append(missionDescription)
        missionCard.append(missionReward)
        missionCard.append(missionTimeLimit)
        missionCard.append(acceptButton)
        return missionCard
    }
    function addMission(event) {
        const missionName = document.getElementById('mission-name').value;
        const missionDescription = document.getElementById('mission-description').value;
        const missionReward = document.getElementById('mission-reward').value;
        const missionTimeLimit = document.getElementById('mission-time-limit').value;

        const missionCard = generateMissionCard(
            missionName,
            missionDescription,
            missionReward,
            missionTimeLimit)

        resultContainer.append(missionCard);

        let storageMissions = JSON.stringify(resultContainer.innerHTML);

        localStorage.setItem('missions', storageMissions);
        event.preventDefault();
    }

    let storageMissions = localStorage.getItem('missions');

    const form = document.getElementById('board-form');
    const resultContainer = document.getElementById('board-form-result-container');

    storageMissions = JSON.parse(storageMissions);

    resultContainer.innerHTML = storageMissions;

    form.addEventListener("submit", addMission);

    const clearLocalMissionsButton = document.getElementById('clear-missions-btn');
    clearLocalMissionsButton.addEventListener("click", function() {
        localStorage.clear();
        location.reload();
    })
});