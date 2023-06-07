import React, { useState } from "react";
import "./FeedbackForm.css";
import succeslogo from "../../assets/icons/successfeedback.svg"

const FeedbackForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [comments, setComments] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevValue) => !prevValue);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can perform any actions with the feedback data
    console.log("Selected items:", isChecked);
    console.log("Comments:", comments);
    setShowPopup(true);
    // Reset the form after submission
    setIsChecked(false);
    setComments("");
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const handleCancel = () => {
    setComments('');
    setIsChecked(false);
  };

  return (
    <div className="container feedback-comment">
      <form onSubmit={handleSubmit}>
        <div className="feedback-text">
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
        <div className="feedback-checkbox">
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
        <div className="form-feedback-btn">
          <button
          type="button"
          onClick={handleCancel}
            className="btn pe-lg-4 ps-lg-4 me-3"
            style={{
              color: "var(--primary-500)",
              borderColor: "var(--primary-500)",
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn ps-lg-5 pe-lg-5"
            style={{
              backgroundColor: "var(--primary-500)",
              color: "var(--primary-100)",
            }}
          >
            Send
          </button>
        </div>
      </form>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <img src={succeslogo} alt="" />
            <h3>Thank you for supporting us</h3>
            <p>Your feedback will be forwarded to the admin</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
