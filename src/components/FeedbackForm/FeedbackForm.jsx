import React, { useState } from "react";
import "./FeedbackForm.css";
import succeslogo from "../../assets/icons/successfeedback.svg";
import axios from "axios";

const FeedbackForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isName, setName] = useState("");
  const [comments, setComments] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // const [feedback, setfeedback] = useState([]);

  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  // const {id} = useParams()

  // const {respone, isLoading} = useAxios({
  //   api:feedbackApi,
  //   method:'get',
  //   url:`/feedback/${id}`
  // })

  const handleCheckboxChange = () => {
    setIsChecked((prevValue) => !prevValue);
    setName((prevName) => (prevName === "Anonymous" ? "" : "Anonymous"));
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure you want to submit?")) {
      const options = {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        day: "numeric",
        month: "long",
        year: "numeric",
      };

      const currentTime = new Date().toLocaleString("en-us", options);
      // Here, you can perform any actions with the feedback data
      try {
        const response = await axios.post(
          "https://64866e02beba6297278ec839.mockapi.io/feedback",
          {
            title: isName,
            subtitle: comments,
            time: currentTime,
          }
        );
        console.log(response.data);

        setShowPopup(true);
        // Reset the form after submission
        setIsChecked(false);
        setName("");
        setComments("");
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      } catch (error) {
        console.error(error);
      }
      // console.log("name", isName )
      console.log("Selected items:", isChecked);
      // console.log("Comments:", comments);
    }
  };

  const handleCancel = () => {
    setName("")
    setComments("");
    setIsChecked(false);
  };

  return (
    <div className="container feedback-comment">
      <form onSubmit={handleSubmit} className="form-feedb">
        <div>
          <label>
            <input
              type="text"
              value={isName}
              onChange={handleNameChange}
              disabled={isChecked}
              placeholder="Your Name"
              className="input-name"
              required
            />
          </label>
        </div>
        <div className="feedback-text">
          <label>
            <input
              type="text"
              value={comments}
              onChange={handleCommentsChange}
              placeholder="What's your feedback and suggestions?"
              className="input-comment "
              required
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
