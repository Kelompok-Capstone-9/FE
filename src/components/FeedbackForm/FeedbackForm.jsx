import React, { useState } from "react";
import './FeedbackForm.css'

const FeedbackForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [comments, setComments] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked((prevValue) => !prevValue);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can perform any actions with the feedback data
    console.log('Selected items:', isChecked);
    console.log('Comments:', comments);
    // Reset the form after submission
    setIsChecked(false);
    setComments('');
  };

  return (
    <div className="container feedback-comment">
      <form onSubmit={handleSubmit}>
      <div>
          <label>
            <input
              type="text"
              value={comments}
              onChange={handleCommentsChange}
              placeholder="What's your feedback and suggestions?"
              className="input-text"
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="Option 1"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            Leave review as anonymous
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
