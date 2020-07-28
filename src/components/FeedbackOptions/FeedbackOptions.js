import React from "react";
import PropTypes from "prop-types";
import styles from "./feedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.keys(options).map((key) => (
        <button
          type="button"
          name={key}
          key={key}
          onClick={onLeaveFeedback}
          className={styles.optionButton}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
