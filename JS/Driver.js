class Driver extends Account {
    
    constructor (name, document, email, password) {
        super (name, document, email, password);
    }

    printDataDriver() {
        console.log("The name: " + this.name);
        console.log("The document: " + this.document);
        console.log("The email: " + this.email);
        console.log("The password: " + this.password);
    }
}

    