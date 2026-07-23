const API_URL = "http://127.0.0.1:8000/chat";

async function sendMessage() {

    const input = document.getElementById("userInput");
    const chat = document.getElementById("chatBox");

    const message = input.value.trim();

    if (message === "") return;

    chat.innerHTML += `
        <div class="user-message">${message}</div>
    `;

    input.value = "";

    chat.innerHTML += `
        <div class="ai-message" id="loading">
            🤖 Thinking...
        </div>
    `;

    chat.scrollTop = chat.scrollHeight;

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message
            })

        });

        const data = await response.json();

        document.getElementById("loading").innerHTML =
            "🤖 " + data.reply;

    } catch (error) {

        document.getElementById("loading").innerHTML =
            "❌ Connection Error";

        console.log(error);

    }

    chat.scrollTop = chat.scrollHeight;
}
