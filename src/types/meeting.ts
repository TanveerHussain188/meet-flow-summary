
export interface ActionItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface TranscriptExchange {
  speaker: string;
  timestamp: string;
  text: string;
}

export interface MeetingData {
  id: string;
  title: string;
  creator: {
    name: string;
    initials: string;
  };
  date: string;
  duration: string;
  screenshots: number;
  sharedWith: string;
  overview: string;
  actionItems: ActionItem[];
  outlineDescription: string;
  outlineItems: string[];
  keywords: string[];
  speakerStats: {
    [key: string]: string;
  };
  transcript: TranscriptExchange[];
}
