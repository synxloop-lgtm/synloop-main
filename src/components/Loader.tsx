import { useEffect, useState } from 'react';

interface LoaderProps {
  isVisible: boolean;
  onComplete?: () => void;
  duration?: number;
}

const Loader = ({ isVisible, onComplete, duration = 3000 }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  const loadingMessages = [
    "Connecting to Indian Market Leaders...",
    "Syncing with Local Business Networks...",
    "Loading SynLoop Solutions...",
    "Preparing Your Automation Journey...",
  ];

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete?.(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, duration / 50);

    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % loadingMessages.length);
    }, duration / 4);

    return () => {
      clearInterval(interval);
      clearInterval(messageInterval);
    };
  }, [isVisible, duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center">
      <div className="text-center space-y-8 max-w-md mx-auto px-6">
        {/* Brand Logo Area */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold gradient-text">SynLoop</h1>
          <p className="text-muted-foreground text-sm">
            Empowering Indian Businesses with AI Automation
          </p>
        </div>

        {/* Enhanced Infinity Loader */}
        <div className="relative flex items-center justify-center py-8">
          <div className="infinity-loop-loader"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-accent rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-3">
          <div className="w-full bg-secondary/30 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground animate-pulse">
            {loadingMessages[currentMessage]}
          </p>
          <p className="text-xs text-accent font-medium">
            {progress}% Complete
          </p>
        </div>

        {/* Indian Market Focus */}
        <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
          <span>🇮🇳</span>
          <span>Made for India, Built for Scale</span>
          <span>🚀</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;