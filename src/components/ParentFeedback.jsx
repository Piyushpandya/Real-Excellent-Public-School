import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const ParentFeedback = () => {
  return (
    <div className="parentfeedback">
      <h2 className="feedback-heading">Parent Feedback</h2>
      <div className="parent-card">
        <img src="/piyush.jpeg" alt="not found" className="parent-image" />
        <h3 className="parent-name">Piyush Pandya</h3>
        <div className="feedback-content">
          <FaQuoteLeft className="icon" />
          <span className="feedback">
            Excellent Public School has been a great experience my child Tanush.
            The teachers are dedicated, and the environment is very nurturing.
          </span>
          <FaQuoteRight className="icon" />
        </div>
      </div>
      <div className="parent-card feedbackRight">
        <img src="/piyush.jpeg" alt="not found" className="parent-image" />
        <h3 className="parent-name">Anurag Verma</h3>
        <div className="feedback-content">
          <FaQuoteLeft className="icon" />
          <span className="feedback">
            The extracurricular activities at EPS have really helped my child
            grow. I love how they focus on holistic development and growth of
            the children.
          </span>
          <FaQuoteRight className="icon" />
        </div>
      </div>
    </div>
  );
};
export default ParentFeedback;
