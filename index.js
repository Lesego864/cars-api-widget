// console.log(axios);
const colors = document.querySelector('.colors');
const brand = document.querySelector('.brands');
const cars = document.querySelector('.cars');

//variables needed for the filtering drop down
const filterColor = document.getElementById('colors');
const filterBrand = document.getElementById('brand');
const filterButton = document.getElementById('search');
const filterDisplay = document.querySelector('.search-result');

const filterTemplateText = document.querySelector('.filterTemplate');
const filterTemplate = Handlebars.compile(filterTemplateText.innerHTML);

// const filterColor = document.getElementById('colors')

const colorTemplateText = document.querySelector('.colourTemplate');
// const filterTemplateText = document.querySelector('.filterTemplate');

const colorTemplate = Handlebars.compile(colorTemplateText.innerHTML)
    // const filterTemplate =  Handlebars.compile(filterTemplateText.innerHTML)

const carsTemplateText = document.querySelector('.table');
// const filterTemplateText = document.querySelector('.filterTemplate');

const carsTemplate = Handlebars.compile(carsTemplateText.innerHTML)

//Display of the three lists:
axios
    .get('https://api-tutor.herokuapp.com/v1/colors')
    .then(function(result) {
        // colors.innerHTML = result.data
        colors.innerHTML = colorTemplate({ color: result.data });
        console.log(result.data);

    });

axios
    .get('https://api-tutor.herokuapp.com/v1/makes')
    .then(function(result) {
        // colors.innerHTML = result.data
        brand.innerHTML = colorTemplate({ color: result.data });
        console.log(result.data);

    });

axios
    .get('https://api-tutor.herokuapp.com/v1/cars')
    .then(function(result) {
        // colors.innerHTML = result.data
        cars.innerHTML = carsTemplate({ car: result.data });
        console.log(result.data);

    });

//Drop down that can filter according to the make and color of the cars list:

axios
    .get('https://api-tutor.herokuapp.com/v1/colors')
    .then(function(result) {
        filterColor.innerHTML = filterTemplate({ filter: result.data });
    });

axios
    .get('https://api-tutor.herokuapp.com/v1/makes')
    .then(function(result) {
        filterBrand.innerHTML = filterTemplate({ filter: result.data });
    });


var theColorValue = '';
var theBrandValue = '';

filterColor.addEventListener('change', function(e) {
    theColorValue = e.target.value

});

filterBrand.addEventListener('change', function(e) {
    theBrandValue = e.target.value

});

filterButton.addEventListener('click', function() {
    if (theColorValue && theBrandValue) {
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/make/${theBrandValue}/color/${theColorValue}`)
            .then(function(result) {
                console.log(result.data)
                filterDisplay.innerHTML = filterTemplate({ filters: result.data });

            });

    } else if (theColorValue) {
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/color/${theColorValue}`)
            .then(function(result) {
                console.log(result.data)
                filterDisplay.innerHTML = filterTemplate({ filters: result.data });

            });
    } else if (theBrandValue) {
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/make/${theBrandValue}`)
            .then(function(result) {
                console.log(result.data)
                filterDisplay.innerHTML = filterTemplate({ filters: result.data });

            });

    }
    // axios
    //     .get(`https://api-tutor.herokuapp.com/v1/cars/make/${theBrandValue}/color/${theColorValue}`)
    //     .then(function (result) {
    //         console.log(result.data)
    //         filterDisplay.innerHTML = filterTemplate({ filters: result.data });

    //     });

});