const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data)); //... spread the data object when pushed

function findMatches(wordMatch, cities) {
    return cities.filter(place => {
        //here we ned to figure out if the city or state matches what was searched
        const regex = new RegExp(wordMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
};

// add commas to population number
function numWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map( place => {
        const regex = new RegExp(this.value, 'gi')
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numWithCommas(place.population)}</span>
            </li>
        `
    }).join('');
    // console.log(html)
    suggestions.innerHTML = html
};

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);