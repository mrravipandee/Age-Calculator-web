// Select output elements
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");

const submit_btn = document.querySelector(".submit-button");

// Select input elements
let isValid = false;

const input_year = document.querySelector("#year");
const input_month = document.querySelector("#month");
const input_day = document.querySelector("#day");

// Error elements
const error_year = document.querySelector(".error-year");
const error_month = document.querySelector(".error-month");
const error_day = document.querySelector(".error-day");

// Write program logic
input_day.addEventListener("input", (e) => {
    const inputValue = +input_day.value; // Convert input value to a number
    
    if (inputValue > 31 || inputValue < 1) {
        error_day.textContent = "Must be a valid date";
        isValid = false;
    } else {
        isValid = true;
        error_day.textContent = "";
    }
});


input_month.addEventListener("input", (e) => {
    const inputValue = +input_month.value; // Convert input value to a number
    
    if (inputValue > 12 || inputValue < 1) {
        error_month.textContent = "Must be a valid month";
        isValid = false;
    } else {
        isValid = true;
        error_month.textContent = "";
    }
});


input_year.addEventListener("input", (e) => {
    const inputValue = +input_year.value; // Convert input value to a number

    const currentYear = new Date().getFullYear();

    if (inputValue > currentYear || inputValue < 1) {
        error_year.textContent = "Must be a valid year";
        isValid = false;
    } else {
        isValid = true;
        error_year.textContent = "";
    }
});

submit_btn.addEventListener("click", function() {
    if (isValid) {
        const birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
        const birthdayOb = new Date(birthday);
        const ageDiffMill = Date.now() - birthdayOb.getTime();
        const ageDate = new Date(ageDiffMill);
        const ageYear = ageDate.getUTCFullYear() - 1970;
        const ageMonth = ageDate.getUTCMonth();
        const ageDay = ageDate.getUTCDate() - 1;

        // Displaying
        output_day.textContent = ageDay;
        output_month.textContent = ageMonth;
        output_year.textContent = ageYear;

    } else {
        alert("Error: Please enter valid date values.");
    }
});
