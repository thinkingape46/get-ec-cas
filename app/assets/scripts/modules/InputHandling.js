class InputHandler {

    constructor() {
        this.chemicalNameField = document.getElementById("chemical-name");
        this.mainContainer = document.getElementById("main-container");
        this.events();
    }

    events() {
        this.chemicalNameField.addEventListener('keyup', (e) => {
        this.clearDisplay(e);
        this.outputText(e);
        })
    }

    outputText(e) {
        this.mainContainer.insertAdjacentHTML('beforeend', this.chemicalNameField.value);
    }

    clearDisplay(e) {
        this.mainContainer.innerHTML = "";
    }
}

export default InputHandler;
