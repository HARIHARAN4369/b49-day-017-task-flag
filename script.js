function createcountries(countries){
    countries.forEach((country)=>{
    document.body.innerHTML +=`<div class="country-container">
    <img src="${country.flags.svg}" alt="indian flag" />
    <div class ="content-container">
    <h2>${country.name.common}</h2>
    <p><span>population:</span>${country.population}</p>
    <p><span>region:</span>${country.region}</p>
    <p><span>capital:</span>${country.capital}</p>
    </div>
    </div>`;
    });
    }
fetch("https://restcountries.com/v3.1/all")
.then((data) =>data.json())
.then((countries) => createcountries(countries))
.catch((errMsg) => console.log("error occurred:", errMsg));
