export type BlockSitesSettings = {
  blockSites: string[];
  whitelist: string[];
};

export type TabsCountSettings = {
  maxTabsCount: number | "No limit";
  ignoredTabs: string[];
};

export type ScrollingLimitSettings = {
  allowedAmount: number | "No limit"; // viewport fractions
  restrictedSites: string[];
  behavior: {
    addWarning: boolean;
    addFriction: boolean;
  };
};

export type YoutubeSettings = {
  maxHomePageVideos: number;
  maxSuggestedVideos: number;
  maxShorts: number;
  maxComments: number;
  hideDescription: boolean;
};

export type FacebookSettings = {
  maxPosts: number;
  maxReels: number;
  maxStories: number;
  maxSuggestedFriends: number;
  maxFriendRequests: number;
  maxComments: number;
};

export type TwitterSettings = {
  maxTweets: number;
  maxReplies: number;
  maxTrends: number;
  hideForYou: boolean;
  hideWhoToFollow: boolean;
};

export type InstagramSettings = {
  maxPosts: number;
  maxReels: number;
  maxStories: number;
  maxExploreItems: number;
  hideSuggestions: boolean;
};

export type TiktokSettings = {
  maxVideos: number;
  maxScrollDepth: number;
  addFriction: boolean;
};

export type LinkedInSettings = {
  maxFeedPosts: number;
  hideSuggestedJobs: boolean;
  hideNews: boolean;
  hidePeopleSuggestions: boolean;
};

export type PinterestSettings = {
  maxPins: number;
  maxRelatedPins: number;
  hideExplore: boolean;
};

export type BlockByDomainSettings = {
  blockedDomains: string[];
  whitelist: string[];
};

export type OptionData<T> = {
  enabled: boolean;
  settings: T;
}

export type ControlsData = {
  blockSites: OptionData<BlockSitesSettings>;
  tabsCount: OptionData<TabsCountSettings>;
  scrollingLimit: OptionData<ScrollingLimitSettings>;
  youtube: OptionData<YoutubeSettings>;
  facebook: OptionData<FacebookSettings>;
  twitter: OptionData<TwitterSettings>;
  instagram: OptionData<InstagramSettings>;
  tiktok: OptionData<TiktokSettings>;
  linkedin: OptionData<LinkedInSettings>;
  pinterest: OptionData<PinterestSettings>;
  blockByDomain: OptionData<BlockByDomainSettings>;
};
