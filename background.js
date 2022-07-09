var topic = '';
var time = 0;

async function fetchImage() {

    var random = Math.floor(Math.random() * 100);
    console.log(random);
  //let parentdiv = document.createElement('div')
  //parentdiv.id = 'animal'
  return fetch(topic)
    .then((response) => response.json())
    .then((body) => {
      for (let index = 2; index < body.data.children.length; index++) {
        if (body.data.children[random].data.post_hint == "image") {
          let image = body.data.children[random].data.url_overridden_by_dest;
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
        }
      }
      
    });
}

var puns = ["Stay PAWsitive!", "What do you call an animal you keep in your car? A carPET", "What did the gym coach say to the cat? Have you paid your annual FLEAS?", "The cow crossed the road to get to the udder side", "I took my cat to the vet because she wasn't feline fine", "Rabbits love hip-hop.", "The pony wanted to drink water - his throat was horse!", "The sheep went to the Baaahamas for vacation", "What do you call an explosive monkey? A ba-boom", "What did the buffalo say when his son left home? Bison"];


chrome.alarms.onAlarm.addListener(async () => {
  random = Math.floor(Math.random() * 10); // 0 - 9
  chrome.notifications.create(
    {
      type: "image",
      iconUrl: "icon-128.png",
      imageUrl: await fetchImage(),
      title: "You've got a notiFURcation!",
      message: puns[random],
      priority: 2,
      silent: false,
    },
    () => {}
  );
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  
  console.log("there should be a message")
  console.log(message);
  if (Array.isArray(message)) {
    topic = message[0];
    time = message[1];
    console.log(topic);
    console.log(time);
    createAlarm();
  }
});

function createAlarm() {
  console.log('true time');
  console.log(time);
  chrome.alarms.create("notifurcation", {
    delayInMinutes: 0,
    periodInMinutes: time, // THIS IS THE TIME (IN MINUTES) FOR EACH ALARM
  });
}
