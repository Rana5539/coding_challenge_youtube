import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchTranscript, fetchTranslation } from '../lib/api';
import { TranscriptItem } from '../types/transcript';
import { TranslationItem } from '../types/translation';

const HomePage = () => {
  const router = useRouter();
  const { videoId } = router.query;

  const [transcript, setTranscript] = useState<TranscriptItem[]>([]);
  const [translation, setTranslation] = useState<TranslationItem[]>([]);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (videoId) {
      fetchTranscript(videoId as string).then(data => setTranscript(data.items));
      fetchTranslation(videoId as string).then(data => setTranslation(data.items));
    }
  }, [videoId]);

  const handleTimeUpdate = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    setCurrentTime(event.currentTarget.currentTime);
  };

  const handlePlayPause = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    setIsPlaying(!event.currentTarget.paused);
  };

  const findCurrentTranscript = () => {
    return transcript.find(item => currentTime >= item.start && currentTime <= item.start + item.duration);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="video-container mb-4">
        {videoId && (
          <video
            src={`https://www.youtube.com/embed/${videoId}`}
            controls
            onTimeUpdate={handleTimeUpdate}
            onPlay={handlePlayPause}
            onPause={handlePlayPause}
          />
        )}
      </div>
      <div className="transcript-container">
        {isPlaying && findCurrentTranscript() && (
          <p className="transcript-text">{findCurrentTranscript()?.text}</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
