const notificationElement = document.getElementById("btn");

notificationElement.addEventListener("click", () => {
  chrome.runtime.sendMessage({ time: "1" }, function (response) {
    console.log(response);
  });
});

function toggle(el) {
  if (el.className != "pause") {
    el.src = "icon-hd-inverted.png";
    el.className = "pause";
  } else if (el.className == "pause") {
    el.src = "icon-hd.png";
    el.className = "play";
  }

  return false;
}
