import React, { useState } from 'react';

export default function Counter() {
  const [data, setData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    return Object.values(data).reduce((total, values) => total + values, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const positivePercentage = Math.round((data.good / totalFeedback) * 100);
    return `${positivePercentage}%`;
  };

  const handleClick = type => {
    setData(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const totalFeedback = countTotalFeedback();

  return (
    <div>
      <div>
        <button onClick={() => handleClick('good')}>Good</button>
        <button onClick={() => handleClick('neutral')}>Neutral</button>
        <button onClick={() => handleClick('bad')}>Bad</button>
      </div>
      {totalFeedback === 0 ? (
        <p>No feedback yet</p>
      ) : (
        <div>
          <h2>Statistics</h2>
          <p>Good: {data.good}</p>
          <p>Neutral: {data.neutral}</p>
          <p>Bad: {data.bad}</p>
          <p>Total feedback: {totalFeedback}</p>
          <p>Positive percentage: {countPositiveFeedbackPercentage()}</p>
        </div>
      )}
    </div>
  );
}
