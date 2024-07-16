import { TranscriptResponse } from '../types/transcript';
import { TranslationResponse } from '../types/translation';

export const fetchTranscript = async (videoId: string): Promise<TranscriptResponse> => {
  const response = await fetch(`/api/transcripts/${videoId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch transcript');
  }
  return response.json();
};

export const fetchTranslation = async (videoId: string): Promise<TranslationResponse> => {
  const response = await fetch(`/api/translations/${videoId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch translation');
  }
  return response.json();
};
