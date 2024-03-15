import { useState } from "react";
import "./App.css";

import Descriptions from "./Components/Descriptions";
import Options from "./Components/Options";
import Feedback from "./Components/Feedback";
import Notification from "./Components/Notification";

//

const App = () => {
  const [voiceCount, setVoiceCount] = useState({ good: 0, neutral: 0, bad: 0 });

  const totalFeedback = voiceCount.good + voiceCount.neutral + voiceCount.bad;

  const positiveRate = Math.round(
    ((voiceCount.good + voiceCount.neutral) / totalFeedback) * 100
  );

  const updateFeedback = (feedbackType) => {
    setVoiceCount({
      ...voiceCount,
      [feedbackType]: voiceCount[feedbackType] + 1,
    });
  };

  const resetFeedback = (totalFeedback) => {
    setVoiceCount({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
      <Descriptions />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          voice={voiceCount}
          totalFeedback={totalFeedback}
          positiveRate={positiveRate}
        />
      )}
    </div>
  );
};

export default App;
