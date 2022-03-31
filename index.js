// console.log(axios);
const carListElem = document.querySelector(".carList");
const availableColorsElem = document.querySelector(".availableColors");
const availableBrandsElem = document.querySelector(".availableBrands");

axios
    .get("https://api-tutor.herokuapp.com/v1/cars")
    .then(function(result) {
        // console.log();

        // carListElem.innerHTML = hbsTemplate({ rows: result.data });

        result.data.forEach(car => {
            const li = document.createElement('tr');
            li.innerHTML = `<tr>
            <td>${car.make}</td>
            <td>${car.model}</td>
            <td>${car.color}</td>
            <td>${car.price}</td>
            <td>${car.reg_number}</td>
            </tr>`
            carListElem.appendChild(li);

        });

        // <
        // li > < /li>
    });
axios
    .get("https://api-tutor.herokuapp.com/v1/colors")
    .then(function(result) {
        // console.log(result);

        result.data.forEach(color => {
            const li = document.createElement('tr');
            li.innerHTML = `<tr>
            <td>${color}</td>
            </tr>`

            availableColorsElem.appendChild(li);

        });
    });
axios
    .get("https://api-tutor.herokuapp.com/v1/makes")
    .then(function(result) {
        // console.log(result);

        result.data.forEach(make => {
            const li = document.createElement('tr');
            li.innerHTML = `<tr>
            <td>${make}</td>
            </tr>`

            availableBrandsElem.appendChild(li);

        });
    });