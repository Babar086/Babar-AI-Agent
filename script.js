function sendMessage(){

let input=document.getElementById("userInput");

let chat=document.getElementById("chatBox");

if(input.value.trim()=="") return;

chat.innerHTML += `
<div class="user-message">
${input.value}
</div>
`;

chat.innerHTML += `
<div class="ai-message">
Thinking...
</div>
`;

input.value="";

chat.scrollTop=chat.scrollHeight;

}
