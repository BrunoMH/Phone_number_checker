document.addEventListener('DOMContentLoaded', function () {
    const numberInput = document.getElementById('number-input');
    const checkBtn = document.getElementById('check-btn');
    const clearBtn = document.getElementById('clear-btn');
    const result = document.getElementById('result');

    checkBtn.addEventListener("click", function () {
        const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

        if (numberInput.value === "") {
            alert("Please provide a phone number");
            return;
        } else if (regex.test(numberInput.value)) {
            result.textContent = "Valid US number: " + numberInput.value;
        } else {
            result.textContent = "Invalid US number: " + numberInput.value;
        }
        numberInput.value = "";
        numberInput.focus();
    });

    clearBtn.addEventListener("click", function () {
        result.textContent = "";
        numberInput.value = "";
        numberInput.focus();
    });
});