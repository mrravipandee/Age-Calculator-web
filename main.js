//select output elements
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");

const submit_btn = document.querySelector(".submit-button");

//select input elements

let isValid = false;

const input_year = document.querySelector("#year");
const input_month = document.querySelector("#month");
const input_day = document.querySelector("#day");

// Error elements
const error_year = document.querySelector(".error-year");
const error_month = document.querySelector(".error-month");
const error_day = document.querySelector(".error-day");

// write a program logic

input_day.addEventListener("input", (e) => {
    const inputValue = +input_day.value; // Convert input value to a number
    
    if (inputValue > 31) {
        error_day.textContent = "Must be a valid date";
        isValid = false;
        return;
    } else if (inputValue === 0) {
        error_day.textContent = "The field is required";
        isValid = false;
        return;
    }
    
    // If the input value is valid
    isValid = true;
    error_day.textContent = "";
});


input_month.addEventListener("input", (e) => {
    const inputValue = +input_month.value; // Convert input value to a number
    
    if (inputValue > 12) {
        error_month.textContent = "Must be a valid month";
        isValid = false;
        return;
    } else if (inputValue === 0) {
        error_month.textContent = "The field is required";
        isValid = false;
        return;
    }
    
    // If the input value is valid
    isValid = true;
    error_month.textContent = "";
});


input_year.addEventListener("input", (e) => {
    const inputValue = +input_year.value; // Convert input value to a number

    const currentYear = new Date().getFullYear();

    if (inputValue > currentYear) {
        error_year.textContent = "Must be a valid year";
        isValid = false;
        return;
    } else if (inputValue === 0) {
        error_year.textContent = "The field is required";
        isValid = false;
        return;
    }
    
    // If the input value is valid
    isValid = true;
    error_year.textContent = "";
});

submit_btn.addEventListener("click", function() {
    if (isValid) {
        let birthday = '${input_month.value}/${input_day.value}/${input_year.value}';
    } else {
        alert("error");
    }
});