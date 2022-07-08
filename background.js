var random = Math.floor(Math.random()* 100) +10;
console.log(random)

function fetchImage(){

    //let parentdiv = document.createElement('div')
    //parentdiv.id = 'animal'
    fetch('https://www.reddit.com/r/Eyebleach.json?limit=10')
    .then(response => response.json())
    .then(body => {
        for(let index = 0; index<body.data.children.length; index++){
            console.log("hello");
            if(body.data.children[index].data.post_hint=='image'){
                let image = body.data.children[index].data.url_overridden_by_dest
                console.log(image)
                return(image)
                //let div=document.createElement('div')
                //let h4=document.createElement('h4')
                //let image=document.createElement('img')
                //image.src=body.data.children[index].data.url_overridden_by_dest
                //h4.textContent=body.data.children[index].data.title
                //div.appendChild(h4)
                //div.appendChild(image)
                //parentdiv.appendChild(div)
            }
        }
    //document.body.appendChild(parentdiv)
    });
}

chrome.alarms.onAlarm.addListener(
    () => {
        chrome.notifications.create(
            {
            type: 'image',
            iconUrl: 'icon_128.png',
            imageUrl: fetchImage(),
            title: 'notification title',
            message: 'notification message',
            priority: 2,
            silent: false
        },
        () => {}
        )
    },
)

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.time)
            createAlarm();
    }
);

function createAlarm() {
    chrome.alarms.create(
        "notifurcation",
        {
            delayInMinutes: 0,
            periodInMinutes: 1 // THIS IS THE TIME (IN MINUTES) FOR EACH ALARM
        }
    );
}