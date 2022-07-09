
async function fetchImage() {

    var random = Math.floor(Math.random() * 100);
    console.log(random);
  //let parentdiv = document.createElement('div')
  //parentdiv.id = 'animal'
  return fetch("https://www.reddit.com/r/Eyebleach.json?limit=100")
    .then((response) => response.json())
    .then((body) => {
      for (let index = 2; index < body.data.children.length; index++) {
        if (body.data.children[random].data.post_hint == "image") {
          let image = body.data.children[random].data.url_overridden_by_dest;
          console.log(typeof image);
          console.log(typeof "icon-128.png");
          console.log(image);
          return image;

          //let div=document.createElement('div')
          //let h4=document.createElement('h4')
          //let image=doc ument.createElement('img')
          //image.src=body.data.children[index].data.url_overridden_by_dest
          //h4.textContent=body.data.children[index].data.title
          //div.appendChild(h4)
          //div.appendChild(image)
          //parentdiv.appendChild(div)
        }
        else {
            random = Math.floor(Math.random() * 100);
            console.log(random);
        }
      }
      
    });
}

chrome.alarms.onAlarm.addListener(async () => {
  chrome.notifications.create(
    {
      type: "image",
      iconUrl: "icon-128.png",
      imageUrl: await fetchImage(),
      title: "Your notifurcation",
      message: "STAY PAWSITIVE!",
      priority: 2,
      silent: false,
    },
    () => {}
  );
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.time) createAlarm();
});

function createAlarm() {
  chrome.alarms.create("notifurcation", {
    delayInMinutes: 0,
    periodInMinutes: 1, // THIS IS THE TIME (IN MINUTES) FOR EACH ALARM
  });
}
