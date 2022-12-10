const bill = document.querySelector(".bill input");
const percentage = document.querySelectorAll(".percentage button");
const custom = document.querySelector("#custom-percentage");
const numberOfPeople = document.querySelector("#number-of-people");
const tipAmount = document.querySelector(".tip-amount-result");
const total = document.querySelector(".total-result");
const reset = document.querySelector(".result button");
const zero = document.querySelector(".zero");


percentage.forEach(ele => {
    ele.addEventListener("click", (e) => {
            for(let i = 0; i < percentage.length; i++) {
                if(percentage[i].classList.contains("active")) {
                    percentage[i].classList.remove("active");
                }
            }
            e.target.classList.add("active");
            if(bill.value > 0) {
                if(numberOfPeople.value === 0 || numberOfPeople.value === "") {
                    zero.style.display= "block";
                    numberOfPeople.style.border = "0.125rem solid red";
                }else {
                    zero.style.display= "none";
                    numberOfPeople.style.border = "none";
                    tipAmount.innerText = (bill.value / numberOfPeople.value * parseFloat(e.target.innerText) / 100).toFixed(2);
                    total.innerText = (bill.value / numberOfPeople.value + parseFloat(tipAmount.innerText)).toFixed(2);
                    custom.value = "";
                    reset.style.opacity = "1";
                }
            }
    });
});


custom.addEventListener("input", () => {
    //this for loop to avoid NaN in total and tipAmount
    for(let i = 0; i < percentage.length; i++) {
        if(percentage[i].classList.contains("active")) {
            percentage[i].classList.remove("active");
        }
    }
    if(bill.value > 0) {
        if(numberOfPeople.value === 0 || numberOfPeople.value === "") {
            zero.style.display= "block";
            numberOfPeople.style.border = "0.125rem solid red";
        }else {
            zero.style.display= "none";
            numberOfPeople.style.border = "none";
            tipAmount.innerText = (bill.value / numberOfPeople.value * custom.value / 100).toFixed(2);
            total.innerText = (bill.value / numberOfPeople.value + parseFloat(tipAmount.innerText)).toFixed(2);
            reset.style.opacity = "1";
        }
    }
})


reset.addEventListener("click", () => {
    location.reload()
})
