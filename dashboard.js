class Dashboard {

    constructor() {

        this.user = "Babar";

        this.version = "1.0.0";

        this.status = "Online";

        this.start();

    }

    start() {

        console.log("🚀 Babar AI Dashboard Started");

        this.showWelcome();

        this.showClock();

    }

    showWelcome() {

        alert("👋 Welcome to Babar AI Agent");

    }

    showClock() {

        setInterval(() => {

            const time = new Date();

            console.log(time.toLocaleTimeString());

        },1000);

    }

}

new Dashboard();
