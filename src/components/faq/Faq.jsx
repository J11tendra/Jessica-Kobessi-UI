import React, { useState } from "react";
import FAQItem from "../faqItems/FaqItem";
import "./Faq.scss";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleAccordin = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const faqs = [
    {
      question: "Can I use credit cards or USD for payment?",
      answer:
        "Yes, you can use credit cards or USD for payment. We accept all major credit cards and USD payments through our secure payment gateway.",
      indexValue: 1,
    },
    {
      question: "What times are you available for calls?",
      answer:
        "We are available for calls from 9 AM to 5 PM, Monday through Friday. Please feel free to schedule a call during these hours.",
      indexValue: 2,
    },
    {
      question: "How do I hire you for a few months?",
      answer:
        "To hire us for a few months, please contact us through our website or email us directly. We will discuss your project requirements and provide a customized plan for your needs.",
      indexValue: 3,
    },
    {
      question: "Will I get the source files of my order?",
      answer:
        "Yes, you will receive all the source files upon completion of the project. We ensure that you have full access to all files created during the project.",
      indexValue: 4,
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-heading">FAQs</h2>
      <div className="faq-wrapper">
        <div className="img-wrapper">
          <img src="src/assets/faq-main-bg.svg" alt="FAQ Background" />
        </div>
        <div className="question-container">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              indexValue={faq.indexValue}
              question={faq.question}
              answer={faq.answer}
              activeIndex={activeIndex}
              toggleAccordin={toggleAccordin}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
