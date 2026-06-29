// Background service worker placeholder.
// Could later be used for an options page, dynamic blocking list, and storage.

import { AppData } from "../types/AppData";
import { AppearanceData } from "../types/AppearanceData";
import { UserSettings } from "../types/UserSettings";

chrome.runtime.onInstalled.addListener(() => {
  console.log("Dritto extension installed");
  console.log("Setting up the necessary settings");

  const appearanceData: AppearanceData = {
    accentColor: "blue",
    theme: "system",
    fontFamily: "Saira",
  };

  const userSettings: UserSettings = {
    blockSites: {
      enabled: false,
      blockedUrls: [],
      blockedDomains: [],
      blockAll: false,
      whitelist: [],
    },
    scrolling: {
      enabled: false,
      targetedUrls: [],
      targetedDomains: [],
      targetAll: false,
      whitelist: [],
    },
    tabs: {
      enabled: false,
      targetedDomains: [],
      targetAll: false,
      maxTabsCount: NaN,
      whitelist: [],
    },
    socialMedia: {
      enabled: false,
      youtube: {
        enabled: false,
        dailyLimitMinutes: NaN,
        sessionLimitMinutes: NaN,
        hideShorts: false,
        hideComments: false,
        maxSuggestedVideos: NaN,
        blockedChannels: [],
        blockAllChannels: [],
        whitelist: [],
      },
      facebook: {
        enabled: false,
        dailyLimitMinutes: NaN,
        sessionLimitMinutes: NaN,
        hideReels: false,
        hideWatch: false,
        hideMarketplace: false,
        maxSuggestedPosts: NaN,
      },
      twitter: {
        enabled: false,
        dailyLimitMinutes: NaN,
        sessionLimitMinutes: NaN,
        hideForYou: false,
        hideTrending: false,
        hideReplies: false,
      },
      instagram: {
        enabled: false,
        dailyLimitMinutes: NaN,
        sessionLimitMinutes: NaN,
        hideReels: false,
        hideExplore: false,
        maxSuggestedPosts: NaN,
      },
      tiktok: {
        enabled: false,
        dailyLimitMinutes: NaN,
        sessionLimitMinutes: NaN,
        maxClips: NaN,
      },
      linkedin: {
        enabled: false,
        dailyLimitMinutes: NaN,
        sessionLimitMinutes: NaN,
        maxPosts: NaN,
        hideShorts: false,
      },
      pinterest: {
        enabled: false,
        dailyLimitMinutes: NaN,
        sessionLimitMinutes: NaN,
        maxRecommendations: NaN,
      },
    },
  };

  const appData: AppData = {
    appearance: appearanceData,
    lang: "EN",
    userSettings: userSettings,
  };

  chrome.storage.local
    .set(appData)
    .then(() => console.log("Initial data was stored successfully"));
});
