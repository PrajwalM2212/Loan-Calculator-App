const calculateBtn = document.getElementById("calculate");
const loader = document.querySelector(".loader");
const resultsDiv = document.getElementById("results");
const card = document.querySelector(".card-body");
const heading = document.querySelector(".card-title");

calculateBtn.addEventListener("submit", function (e) {
    e.preventDefault();
    calculateResults();
});

function calculateResults() {

    // disappear the results div on pressing calculate button
    resultsDiv.style.display = "none"

    const loanAmount = Number(document.getElementById("loan-amount").value);
    const rate = Number(document.getElementById("interest").value);
    const years = Number(document.getElementById("years-to-repay").value);

    if (loanAmount === 0.00 || rate === 0.00 || years === 0.00) {

        // show error
        const errorDiv = document.createElement("div");
        errorDiv.className = "alert alert-danger";
        errorDiv.textContent = "Please input the numbers correctly";
        card.insertBefore(errorDiv, heading);
        setTimeout(removeError, 2000);

    } else {

        const totalPayment = parseFloat(loanAmount * (Math.pow(1 + (rate / 100), years)));
        const monthlyPayment = parseFloat(totalPayment / (years * 12));
        const interest = parseFloat(totalPayment - loanAmount);

        const monthltyPaymentUI = document.getElementById("monthly-payment");
        monthltyPaymentUI.value = monthlyPayment.toFixed(2);

        const totalPaymentUI = document.getElementById("total-payment");
        totalPaymentUI.value = totalPayment.toFixed(2);

        const interestUI = document.getElementById("total-interest");
        interestUI.value = interest.toFixed(2);

        displayLoader();
        setTimeout(displayResults, 3000);
    }
}


// display loader
function displayLoader() {
    loader.style.display = "block";
}

// disappear loader and  display results 
function displayResults() {
    loader.style.display = "none";
    resultsDiv.style.display = "block";
}

// remove error message
function removeError() {
    card.children[0].remove();
}

