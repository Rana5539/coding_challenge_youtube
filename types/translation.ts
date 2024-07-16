export interface TranslationItem {
    text: string;
    start: number;
    duration: number;
  }
  
  export interface TranslationResponse {
    videoId: string;
    items: TranslationItem[];
  }
  