(() => {

    let screen = document.querySelector(".screen");
    let result = document.querySelector(".result");
    let buttons = document.querySelectorAll(".btn");
    let del = document.querySelector(".btn-delete");
    let clear = document.querySelector(".btn-clear");
    let equal = document.querySelector(".btn-equal");
    
    buttons.forEach( button => {
        button.addEventListener("click", e => {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener("click", e => {
        if(screen.value === "") {
            screen.value == "";
        } else {
            let answer = eval(screen.value);
            result.value = answer;
        }
    })

    clear.addEventListener("click", e => {
        screen.value = "";
        result.value = "";
    })

    del.addEventListener("click", e => {
        screen.value = screen.value.slice(0, -1);
    })

    //keyboard keys event listeners
    document.addEventListener("keydown", e => {
        if (e.key >= 0 && e.key <=9) {
            let value = e.key;
            screen.value += value;
        } else if (e.key === "Enter"){
            e.preventDefault();
            if(screen.value === "") {
                screen.value == "";
            } else {
                let answer = eval(screen.value);
                result.value = answer;
            }
        } else if (e.key === "Backspace") {
            screen.value = screen.value.slice(0, -1);
        }
    })

    document.addEventListener("keydown", e => {
        let value = e.key;
        if (e.key === "+"){
            screen.value += value;
        } else if (e.key === "-") {
            screen.value += value;
        } else if (e.key === "/") {
            screen.value += value;
        } else if (e.key === "*") {
            screen.value += value;
        } else if (e.key === "Escape") {
            screen.value = "";
            result.value = "";
        }
    })
})();

