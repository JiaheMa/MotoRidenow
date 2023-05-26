var chatbotToggle = document.getElementById('chatbot-toggle');
var chatbotContainer = document.getElementById('chatbot-container');

chatbotToggle.addEventListener('click', function() {
    chatbotContainer.style.display = chatbotContainer.style.display === 'block' ? 'none' : 'block';
});