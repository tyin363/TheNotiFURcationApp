const notificationElement = document.getElementById("btn");
const sb = document.querySelector('.animal-type');
const time = document.querySelector('#time-intervals');
var sendtime = 0;

notificationElement.addEventListener("click", () => {
  if(time.selectedIndex == 0) {
    console.log('6s');
    sendtime = 0.1;
  }
  if(time.selectedIndex == 1) {
    console.log('30mins');
    sendtime = 30;
  }
  if(time.selectedIndex == 2) {
    console.log('60mins');
    sendtime = 60;
  }

  if(sb.selectedIndex == 0) {
    console.log("any");
    chrome.runtime.sendMessage(['https://www.reddit.com/r/Eyebleach.json?limit=100', sendtime], (response) => {
      console.log("any");
      initializeUi(response);
    });
  }
  if(sb.selectedIndex == 1) {
    console.log("dog");
    chrome.runtime.sendMessage(['https://www.reddit.com/r/dogpictures.json?limit=100', sendtime], (response) => {
      console.log("dog");
      initializeUi(response);
    });
  }
  if(sb.selectedIndex == 2) {
    console.log("cat");
    chrome.runtime.sendMessage(['https://www.reddit.com/r/catpictures.json?limit=100', sendtime], (response) => {
      console.log("cat");
      initializeUi(response);
    });
  }
  if(sb.selectedIndex == 3) {
    console.log("memes");
    chrome.runtime.sendMessage(['https://www.reddit.com/r/memes.json?limit=100', sendtime], (response) => {
      console.log("memes");
      initializeUi(response);
    });
  }

});