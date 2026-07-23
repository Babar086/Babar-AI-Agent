class BabarAIAssistant {

    constructor() {

        this.name = "Babar AI Agent";

        this.version = "1.0.0";

        this.status = "Online";

        console.log(this.name + " Started Successfully");

    }

    async send(message) {

        console.log("User:", message);

        return message;

    }

    async reply(response) {

        console.log("AI:", response);

    }

    start() {

        console.log("Babar AI Agent Ready");

    }

}

const assistant = new BabarAIAssistant();

assistant.start();
