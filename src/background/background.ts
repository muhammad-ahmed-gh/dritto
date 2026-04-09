// Background service worker placeholder.
// Could later be used for an options page, dynamic blocking list, and storage.

import { AppData } from "../types/AppData";

chrome.runtime.onInstalled.addListener(() => {
  console.log("Dritto extension installed");
  console.log("Setting up the necessary settings");

  const scaffoldedData: AppData = {
    controls: {
      blockSites: {
        enabled: false,
        settings: {
          blockedSites: [],
          whitelist: [],
        },
      },
      tabsCount: {
        enabled: false,
        settings: {
          maxTabsCount: "No limit",
          ignoredTabs: [],
        },
      },
      scrollingLimit: {
        enabled: false,
        settings: {
          allowedAmount: "No limit", // viewport fractions
          restrictedSites: [],
          behavior: {
            addWarning: false,
            addFriction: false,
          },
        },
      },
      youtube: {
        enabled: false,
        settings: {
          maxHomePageVideos: 0,
          maxSuggestedVideos: 0,
          maxShorts: 0,
          maxComments: 0,
          hideDescription: false,
        },
      },
      facebook: {
        enabled: false,
        settings: {
          maxPosts: 0,
          maxReels: 0,
          maxStories: 0,
          maxSuggestedFriends: 0,
          maxFriendRequests: 0,
          maxComments: 0,
        },
      },
      twitter: {
        enabled: false,
        settings: {
          maxTweets: 0,
          maxReplies: 0,
          maxTrends: 0,
          hideForYou: false,
          hideWhoToFollow: false,
        },
      },
      instagram: {
        enabled: false,
        settings: {
          maxPosts: 0,
          maxReels: 0,
          maxStories: 0,
          maxExploreItems: 0,
          hideSuggestions: false,
        },
      },
      tiktok: {
        enabled: false,
        settings: {
          maxVideos: 0,
          maxScrollDepth: 0,
          addFriction: false,
        },
      },
      linkedin: {
        enabled: false,
        settings: {
          maxFeedPosts: 0,
          hideSuggestedJobs: false,
          hideNews: false,
          hidePeopleSuggestions: false,
        },
      },
      pinterest: {
        enabled: false,
        settings: {
          maxPins: 0,
          maxRelatedPins: 0,
          hideExplore: false,
        },
      },
      blockByDomain: {
        enabled: false,
        settings: {
          blockedDomains: [],
          whitelist: [],
        },
      },
    },
    tasks: [],
    pomodoro: {
      focusDuration: 25,
      breakDuration: 5,
      autoSwitch: false,
    },
    ui: {
      accentColor: "green",
      theme: "system",
      fontFamily: "Saira",
    },
  };

  chrome.storage.local.set(scaffoldedData);
});
