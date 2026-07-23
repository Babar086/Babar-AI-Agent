class VoiceAssistant {

    constructor() {
        this.recognition = null;
        this.isListening = false;
    }

    startListening() {

        if (!('webkitSpeechRecognition' in window)) {
            alert("Speech Recognition is not supported in this browser.");
            return;
        }

        this.recognition = new webkitSpeechRecognition();

        this.recognition.lang = "en-US";

        this.recognition.continuous = false;

        this.recognition.interimResults = false;

        this.recognition.onresult = (event) => {

            const text = event.results[0][0].transcript;

            document.getElementById("userInput").value = text;

            sendMessage();

        };

        this.recognition.start();
    }

    speak(text){

        const speech = new SpeechSynthesisUtterance(text);

        speech.lang = "en-US";

        window.speechSynthesis.speak(speech);

    }

}

const voiceAssistant = new VoiceAssistant();
