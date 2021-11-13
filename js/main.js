class City {
    constructor(name, country, population, imgUrl) {
        this.name = name;
        this.country = country;
        this.population = population;
        this.imgUrl = imgUrl;
    }
}

const cityForm = document.getElementById("cityForm");

const cityArr = [];

cityForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // read the form inputs
    const cityName = document.getElementById("nameCity").value;
    const country = document.getElementById("country").value;
    const population = document.getElementById("population").value;
    const imgUrl = document.getElementById("imgUrl").value;

    // create a new city object based on input values
    const newCity = new City(cityName, country, population, imgUrl);

    // push the object into array
    cityArr.push(newCity);

    //clear the name input for the next item
    document.getElementById("nameCity").value = "";
    document.getElementById("country").value = "";
    document.getElementById("population").value = "";
    document.getElementById("imgUrl").value = "";
    document.getElementById("nameCity").focus();

    console.log(cityArr);
});

setInterval(() => {
    if (cityArr.length > 0) {
        let randomNum = Math.floor(Math.random() * cityArr.length);
        let targetCity = cityArr[randomNum];
        outputArea.innerHTML = `Name: ${targetCity.name} <br>
                                Country: ${targetCity.country} <br>
                                Population: ${targetCity.population} <br>
                                <img src="${targetCity.imgUrl}" width="100%" height="auto">`;
    }
}, 2000);