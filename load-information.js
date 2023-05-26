document.addEventListener("DOMContentLoaded", function() {
    var message = document.getElementById("message1");
    var messageText = "Buy now and get 5% off each order! "; // information of discount
    var displayDelay = 2000; // pause 2s for the message to appear
    var displayTime = 10000; // display time in ms

    message.textContent = messageText;
    message.style.display = "block";

    setTimeout(function() {
        message.textContent = messageText;
        message.classList.add("show");

        setTimeout(function() {
            message.classList.add("hide");

            setTimeout(function() {
                message.style.display = "none";
                message.classList.remove("show", "hide");
            }, 1000); // wait for 1s for the bar to disappear
        }, displayTime);
    }, displayDelay);
});
