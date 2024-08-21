import React, { useState } from "react";
import "./FaqItem.scss";

const FAQitem = ({
  indexValue,
  question,
  answer,
  toggleAccordin,
  activeIndex,
}) => {
  return (
    <div className="faq-item">
      <div
        className="question-wrapper"
        onClick={() => toggleAccordin(indexValue)}
      >
        <p>{question}</p>
        <img
          src="public/chevron-down.svg"
          alt="Toggle"
          className={activeIndex === indexValue ? "rotate" : ""}
        />
      </div>
      <p
        className={`answer-wrapper ${activeIndex === indexValue ? "open" : ""}`}
      >
        {answer}
      </p>
    </div>
  );
};

export default FAQitem;
