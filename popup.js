const notificationElement = document.getElementById("btn");

notificationElement.addEventListener("click", () => {
  chrome.runtime.sendMessage({ time: "1" }, function (response) {
    console.log(response);
  });
});
