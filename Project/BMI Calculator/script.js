const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // result.innerHTML = `<span>${bmi}</span>`;
        let category = "";
        let message = "";

        if (bmi < 18.6) {
          category = "Underweight";
          message = "Less than 18.6";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
          category = "Normal";
          message = "Between 18.6 and 24.9";
        } else {
          category = "Overweight";
          message = "Greater than 24.9";
        }

        result.innerHTML = `
        <h3>Your BMI: ${bmi}</h3>
        <p>Category: <strong>${category}</strong></p>
        <p>Healthy Range: ${message}</p>
    `;
    }
})