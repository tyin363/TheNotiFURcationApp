const notificationElement = document.getElementById("btn");
const sb = document.querySelector('.animal-type');
const time = document.querySelector('#time-intervals');
var sendtime = 0;

function changeBG() {
  if (this.checked) {
    console.log("this is working");
    document.getElementById('body').style.backgroundImage = 'url(dog1.png)';
  }
  else {
    document.getElementById('body').style.backgroundImage = 'url(dog2.png)';
  }
}

document.getElementById('thing').addEventListener('change', changeBG);

notificationElement.addEventListener("click", () => {
  if(time.selectedIndex == 0) {
    console.log('12s');
    sendtime = 0.2;
  }
  if(time.selectedIndex == 1) {
    console.log('30mins');
    sendtime = 30;
  }
  if(time.selectedIndex == 2) {
    console.log('60mins');
    sendtime = 60;
  }
  if(time.selectedIndex == 3) {
    console.log('Time OFF');
    sendtime = 10000000;
    chrome.runtime.sendMessage(sendtime, (response) => {
      console.log("any");
      initializeUi(response);
    });
  } 
  else {
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
      chrome.runtime.sendMessage(['https://www.reddit.com/r/AnimalMemes.json?limit=100', sendtime], (response) => {
        console.log("memes");
        initializeUi(response);
      });
    }
  }
});