// Create a chat popup element
var chatPopup = document.createElement("div");
chatPopup.id = "myChatPopup";
chatPopup.style.position = "fixed";
chatPopup.style.bottom = "20px"; // Adjust position as needed
chatPopup.style.right = "20px"; // Adjust position as needed
chatPopup.style.backgroundColor = "#ffffff";
chatPopup.style.border = "1px solid #ccc";
chatPopup.style.padding = "10px";
chatPopup.innerHTML = "This is a chat popup!";

// Append the chat popup element to the specified target element
var targetElement = document.getElementById("ast-scroll-top");
if (targetElement) {
    targetElement.appendChild(chatPopup);
} else {
    console.error("Target element not found.");
}
