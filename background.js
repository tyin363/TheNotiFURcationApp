chrome.alarms.onAlarm.addListener(
    () => {
        chrome.notifications.create(
            {
            type: 'basic',
            iconUrl: 'icon_128.png',
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
            periodInMinutes: 1
        }
    );
}