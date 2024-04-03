import { minskeyHostUrl } from "../storage";

export const createOpenWithMinskeyMenu = () =>
    chrome.contextMenus.create({
        id: "open-with-minsky",
        title: "Open with Minsky",
        contexts: ["all"],
    });

export const menuOnclick: (info: chrome.contextMenus.OnClickData, tab?: chrome.tabs.Tab | undefined) => void = () => {
    (async () => {
        const host = await minskeyHostUrl.get();
        if (!host) {
            // alert is not defined
            //alert("Minskey host URL is not set");

            return;
        }

        console.log("Opening with Minskey", host);
    })();
};

export const registerMenu = () => {
    chrome.runtime.onInstalled.addListener(createOpenWithMinskeyMenu);
    chrome.contextMenus.onClicked.addListener(menuOnclick);
};
