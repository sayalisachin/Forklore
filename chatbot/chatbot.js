function handleUserInput(input) {
    const botResponse = generateBotResponse(input);
    displayMessage("User: " + input, "user-message");
    displayMessage("Bot: " + botResponse, "bot-message");
}

function displayMessage(message, messageType) {
    const chatLog = document.getElementById("chatLog");
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add("message", messageType);
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function generateBotResponse(input) {
    const commandRegex = /^(show recipe for\s)(.+)$/i;
    const commentRegex = /^(comment on\s)(.+):\s(.+)$/i;
    const likeRegex = /^how to like a recipe$/i;
    const restaurantsNearMeRegex = /^restaurants near me$/i;

    if (commandRegex.test(input)) {
        const recipeName = input.match(commandRegex)[2];
        return `Search for your desired recipe on home page!`; // Placeholder response, fetch and display recipe logic would go here
    } else if (commentRegex.test(input)) {
        const [, , recipeName, comment] = input.match(commentRegex);
        return `Comment under the comment section of a recipe page. Create, Edit, Delete! `; // Placeholder response, add comment to recipe logic would go here
    } else if (likeRegex.test(input)) {
        return "To like a recipe, simply click on the like button! View liked recipes in your list."; // Placeholder response, instructions for liking a recipe would go here
    } else if (restaurantsNearMeRegex.test(input)) {
        return "Find restaurants near you through google maps."; // Placeholder response, fetch and display restaurants near user's location logic would go here
    } else {
        return "I'm sorry, I didn't understand that command.";
    }
}
