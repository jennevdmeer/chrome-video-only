chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({ target: { tabId: tab.id }, func: videoOnly });
});

function videoOnly() {
    const v = document.querySelector('video');

    if (!v) {
        return;
    }

    document.head.replaceChildren();
    document.body.replaceChildren(v);
    [document.documentElement, document.body, v].forEach((el) => el.getAttributeNames().forEach((n) => el.removeAttribute(n)));
    v.controls = true;
    v.play();
}
