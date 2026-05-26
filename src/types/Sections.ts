export type BlockSitesSettings = {
  enabled: boolean;
  blockedUrls: string[];
  blockedDomains: string[];
  blockAll: boolean;
  whitelist: string[];
};

export type ScrollingSettings = {
  enabled: boolean;
  targetedUrls: string[];
  targetedDomains: string[];
  targetAll: boolean;
  whitelist: string[];
};

export type TabsSettings = {
  enabled: boolean;
  targetedDomains: string[];
  targetAll: boolean;
  maxTabsCount: number;
  whitelist: string[];
};

type PlatformSettings = {
  enabled: boolean;
  dailyLimitMinutes: number;
  sessionLimitMinutes: number;
}

type YouTubeSettings = PlatformSettings & {
  hideShorts: boolean;
  hideComments: boolean;
  maxSuggestedVideos: number;
  blockedChannels: string[];
  blockAllChannels: string[];
  whitelist: string[];
}

type FacebookSettings = PlatformSettings & {
  hideReels: boolean;
  hideWatch: boolean;
  hideMarketplace: boolean;
  maxSuggestedPosts: number;
}

type TwitterSettings = PlatformSettings & {
  hideForYou: boolean;
  hideTrending: boolean;
  hideReplies: boolean;
}

type InstagramSettings = PlatformSettings & {
  hideReels: boolean;
  hideExplore: boolean;
  maxSuggestedPosts: number;
}

type TikTokSettings = PlatformSettings & {
  maxClips: number;
}

type LinkedInSettings = PlatformSettings & {
  maxPosts: number;
  hideShorts: boolean;
}

type PinterestSettings = PlatformSettings & {
  maxRecommendations: number;
}

export type SocialMediaSettings = {
  enabled: boolean;
  youtube: YouTubeSettings;
  facebook: FacebookSettings;
  twitter: TwitterSettings;
  instagram: InstagramSettings;
  tiktok: TikTokSettings;
  linkedin: LinkedInSettings;
  pinterest: PinterestSettings;
};

export type SectionData =
  | { section: "BlockSites"; data: BlockSitesSettings }
  | { section: "Scrolling"; data: ScrollingSettings }
  | { section: "Tabs"; data: TabsSettings }
  | { section: "SocialMedia"; data: SocialMediaSettings };

export type Section = 
  | SectionData["section"]
  | "Home"
  | "About";
