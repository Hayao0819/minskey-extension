import { StorageItem } from "webext-storage";

export const minskeyHostUrl = new StorageItem<string>("minsk-ext", {
    defaultValue: "https://minskey.vercel.app",
    area: "sync",
});
