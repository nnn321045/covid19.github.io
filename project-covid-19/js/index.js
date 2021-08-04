const countrySelect = document.querySelector('#countrySelect');
let totalCase, pass, rate = '';

function changeHandler() {
    const baseUrl = `https://corona.lmao.ninja/v2/countries/${this.value}`;
    axios.get(baseUrl).then(res => {
        totalCase = parseFloat(res.data.cases);
        pass = parseFloat(res.data.deaths);
        rate = (pass / totalCase).toFixed(4) * 100 + '%';

        document.querySelector('#today').innerHTML = res.data.todayCases.toLocaleString();
        document.querySelector('#todayDeath').innerHTML = res.data.todayDeaths.toLocaleString();
        document.querySelector('#total').innerHTML = res.data.active.toLocaleString();
        document.querySelector('#active').innerHTML = res.data.cases.toLocaleString();
        document.querySelector('#recovery').innerHTML = res.data.recovered.toLocaleString();
        document.querySelector('#tested').innerHTML = res.data.tests.toLocaleString();
        document.querySelector('#totalDeath').innerHTML = res.data.deaths.toLocaleString();
        document.querySelector('#deathRate').innerHTML = rate;
        document.querySelector('#flagImg').src = res.data.countryInfo.flag;
    });
};

countrySelect.addEventListener('change', changeHandler);