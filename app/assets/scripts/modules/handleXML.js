class HandleXML {

    constructor() {
        this.addFile = document.getElementById("add-file");
        this.mainContainer = document.getElementById("main-container");
        this.events();
    }

    events() {
        this.addFile.addEventListener("change", (e) => this.readXML(e))
    }

    readXML(e) {
        let myFile = e.target.files[0];
        let fileReader = new FileReader();        
        fileReader.readAsText(myFile);
        fileReader.onloadend = () => {
            let readerFile = fileReader.result;
            this.renderXML(readerFile);
        }
    }

    renderXML(readerFile) {
        let domparser = new DOMParser();
        let XMLDoc = domparser.parseFromString(readerFile, "text/xml");;
        let i;
        for (i = 0; i < 1; i++) {
            let chemical = XMLDoc.getElementsByTagName("NAME");
            let CAS = XMLDoc.getElementsByTagName("PRE_REGISTERED_SUBSTANCE");
            // let EC = chemical.parentElement.getElementsByTagName("EC_NUMBER");
            // console.log(`${chemical.textContent}, ${CAS}, ${EC}`);
            console.log(chemical);
            
            console.log(CAS);
        }
    }


}

export default HandleXML;