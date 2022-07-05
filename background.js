chrome.runtime.onInstalled.addListener((details) => {
    chrome.contextMenus.create({
        title: "Speak transletion",
        id: "contextMenuSpeak",
        contexts: ["page", "selection"]
    })
    chrome.contextMenus.onClicked.addListener((event) => {
        console.log(event.selectionText)
        chrome.tts.speak(event.selectionText)
    })
})

console.log("background script running")

