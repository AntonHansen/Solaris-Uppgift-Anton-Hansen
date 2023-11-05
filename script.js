function fetchPlanets() {
    fetch("https://majazocom.github.io/Data/solaris.json")
      .then((response) => response.json())
      .then((data) => {
        displayPlanets(data);
      });
}
fetchPlanets();

function displayPlanets(planets) {
    const planetList = document.querySelector("#planetList");
    planets.forEach((planet) => {
        const div = document.createElement("div");
        div.id = planet.name;
        div.addEventListener("click", () => displayPlanetInfo(planet));
        planetList.appendChild(div);
    });
}

function displayPlanetInfo(planet) {
    const frontPage = document.querySelector("#FrontPage");
    frontPage.remove();

    const starsContainer = document.querySelector("#stars-container");
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
        const stars = document.createElement("div");
        stars.className = "stars";

        const x = Math.random() * 100;
        const y = Math.random() * 100;

        stars.style.left = x + 'vw';
        stars.style.top = y + 'vh';

        starsContainer.appendChild(stars);
    }

    const planetInfo = document.querySelector("#planetList");

    const planetInfoDiv = document.createElement("div");
    planetInfoDiv.id = `planetInfo`;

    const planetSideElement = document.createElement("div");
    planetSideElement.id = `${planet.name}-Zoom`;

    const nameElement = document.createElement("h1");
    nameElement.textContent = planet.name;

    const latinNameElement = document.createElement("h2");
    latinNameElement.textContent = planet.latinName;

    const descElement = document.createElement("p");
    descElement.className = "descPara";
    descElement.textContent = planet.desc;
    
    const circumDistanceParent = document.createElement("div");
    circumDistanceParent.className = "circumDistanceParent";
    
    const circumferenceParent = document.createElement("div");
    circumferenceParent.className = "circumferenceParent";
    
    const circumferenceTitle = document.createElement("h3");
    circumferenceTitle.className = "circumferenceTitle";
    circumferenceTitle.textContent = "OMKRETS";

    const circumferenceStats = document.createElement("p");
    circumferenceStats.className = "circumferencePara";
    const circumferenceThousandSeparator = planet.circumference.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    circumferenceStats.textContent = `${circumferenceThousandSeparator} km`;

    circumferenceParent.appendChild(circumferenceTitle);
    circumferenceParent.appendChild(circumferenceStats);

    const distanceParent = document.createElement("div");
    distanceParent.className = "distanceParent";

    const distanceTitle = document.createElement("h3");
    distanceTitle.className = "distanceTitle";
    distanceTitle.textContent = "KM FRÅN SOLEN";

    const distanceStats = document.createElement("p");
    distanceStats.className = "distancePara";
    const distanceThousandSeparator = planet.distance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    distanceStats.textContent = `${distanceThousandSeparator} km`;

    distanceParent.appendChild(distanceTitle);
    distanceParent.appendChild(distanceStats);

    circumDistanceParent.appendChild(circumferenceParent);
    circumDistanceParent.appendChild(distanceParent);

    const tempParent = document.createElement("div");
    tempParent.className = "tempParent";

    const dayTempParent = document.createElement("div");
    dayTempParent.className = "dayTempParent";

    const dayTempTitle = document.createElement("h3");
    dayTempTitle.className = "dayTempTitle";
    dayTempTitle.textContent = "MAX TEMPERATUR";

    const dayTempStats = document.createElement("p");
    dayTempStats.className = "dayTempPara";
    const dayTempThousandSeparator = planet.temp.day.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    dayTempStats.textContent = `${dayTempThousandSeparator}°C`;

    dayTempParent.appendChild(dayTempTitle);
    dayTempParent.appendChild(dayTempStats);

    const nightTempParent = document.createElement("div");
    nightTempParent.className = "nightTempParent";

    const nightTempTitle = document.createElement("h3");
    nightTempTitle.className = "nightTempTitle";
    nightTempTitle.textContent = "MIN TEMPERATUR";

    const nightTempStats = document.createElement("p");
    nightTempStats.className = "nightTempPara";
    const nightTempThousandSeparator = planet.temp.night.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    nightTempStats.textContent = `${nightTempThousandSeparator}°C`;

    nightTempParent.appendChild(nightTempTitle);
    nightTempParent.appendChild(nightTempStats);

    tempParent.appendChild(dayTempParent);
    tempParent.appendChild(nightTempParent);

    const moonParent = document.createElement("div");

    const moonTitle = document.createElement("h3");
    moonTitle.className = "moonTitle";
    moonTitle.textContent = "MÅNAR";

    const moonsElement = document.createElement("p");
    moonsElement.className = "moonPara";
    const moonList = planet.moons.join(", ");
    moonsElement.textContent = moonList;

    moonParent.appendChild(moonTitle);
    moonParent.appendChild(moonsElement);

    const lineOne = document.createElement("div");
    lineOne.id = "lineOne";

    const lineTwo = document.createElement("div");
    lineTwo.id = "lineTwo";

    planetInfoDiv.appendChild(nameElement);
    planetInfoDiv.appendChild(latinNameElement);
    planetInfoDiv.appendChild(descElement);
    planetInfoDiv.appendChild(lineOne);
    planetInfoDiv.appendChild(circumDistanceParent);
    planetInfoDiv.appendChild(tempParent);
    planetInfoDiv.appendChild(lineTwo);
    planetInfoDiv.appendChild(moonParent);

    planetInfo.innerHTML = '';

    planetInfo.appendChild(planetSideElement);
    planetInfo.appendChild(planetInfoDiv);
}
