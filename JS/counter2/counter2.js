 document.addEventListener("DOMContentLoaded", () => {
    let counter = 0;

    
    const h1 = document.querySelector("h1");


    document.querySelector(".up").addEventListener("click", () => {
    counter++;
    h1.textContent = counter;

    if (counter % 10 === 0) {
        alert(`Count is now ${counter}`);
    }
    });


    document.querySelector(".down").addEventListener("click", () => {
    counter--;
    h1.textContent = counter;
    });

});
