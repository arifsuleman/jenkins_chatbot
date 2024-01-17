// chatbot.js

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() === '') return;

    // Display user message
    appendMessage('user', userMessage);

    // Send user message to OpenAI API
    const apiKey = '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';
     const apiUrl = 'https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions';
    
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: userMessage,
            max_tokens: 150
        })
    })
    .then(response => response.json())
    .then(data => {
        const botReply = data.choices[0].text.trim();
        // Display bot reply
        appendMessage('bot', botReply);
    })
    .catch(error => console.error('Error:', error));

    // Clear user input
    userInput.value = '';
}

function handleKeyPress(event) {
    // Check if Enter key is pressed
    if (event.key === 'Enter') {
        sendMessage();
    }
}
