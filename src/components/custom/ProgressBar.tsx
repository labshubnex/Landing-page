import { useEffect, useState } from "react";
import AnimatedCircularProgressBar from "../magicui/animated-circular-progress-bar";

interface ProgressBarProps {
  initialValue?: number; // Optional initial value if needed
}

export function ProgressBar({ initialValue = 0 }: ProgressBarProps) {
  const [value, setValue] = useState(Math.min(Math.max(initialValue, 0), 100)); // Clamp value between 0 and 100

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev >= 100) {
        return 0; // Reset the progress if it exceeds 100
      }
      return prev + 10;
    };

    const interval = setInterval(() => {
      setValue((prev) => handleIncrement(prev));
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <AnimatedCircularProgressBar
      max={100}
      min={0}
      value={Math.min(Math.max(value, 0), 100)}
      gaugePrimaryColor="rgb(79 70 229)"
      gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
    />
  );
}
