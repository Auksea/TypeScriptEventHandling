let contenElement: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("myInput");
let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("myButton");

buttonElement.addEventListener("click",
    () => {
        console.log("button click");
        let inputText: String = inputElement.value;
        contenElement.innerHTML = "You typed " + inputText;
    });

buttonElement.addEventListener("click",
    (e: MouseEvent) => console.log("button click " + e.screenX + ", " + e.screenY));

document.addEventListener("click",
    (e: MouseEvent) => console.log("background " + e.screenX + ", " + e.screenY));

inputElement.addEventListener("focus",
    (e: FocusEvent) => {
        console.log("input focus ");
        inputElement.style.backgroundColor = "orange";
    });

inputElement.addEventListener("blur",
    (e: FocusEvent) => {
        console.log("input blur ");
        inputElement.style.backgroundColor = "white";
    });

inputElement.addEventListener("keypress",
    (e: KeyboardEvent) => console.log("input keypress " + e.key));

inputElement.addEventListener("keydown",
    (e: KeyboardEvent) => console.log("input keydown " + e.key));

inputElement.addEventListener("keyup",
    (e: KeyboardEvent) => console.log("input keyup " + e.key));

buttonElement.addEventListener("mouseover",
    (e: MouseEvent) => {
        console.log("button mouseover " + e.x + ", " + e.y);
        buttonElement.style.fontWeight = "bold";
    });

buttonElement.addEventListener("mouseout",
    (e: MouseEvent) => {
        console.log("button mouseover " + e.x + ", " + e.y);
        buttonElement.style.fontWeight = "normal";
    });

inputElement.addEventListener("select", // select some text
    (e: UIEvent, ) => console.log("input select "));