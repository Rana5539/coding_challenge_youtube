export interface TranscriptItem {
    text: string;
    start: number;
    duration: number;
  }
  
  export interface TranscriptResponse {
    videoId: string;
    items: TranscriptItem[];
  }
  