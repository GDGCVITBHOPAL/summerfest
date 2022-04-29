import React from "react";
import "../Sections.css";
import "./FAQ.css";
import { FaqsArr } from "./FAQData";

function FAQ(props) {
  return (
    <div className={"section"}>
      <div className={"section-page-container"}>
        <div className={"section-content-container"}>
          <div className={"section-header"}>FAQ</div>

          {/* QUESTIONS */}
          <div className={"questions-container"}>
            <div className={"questions-row"}>
              {FaqsArr.map((faq, index) => {
                if (index < FaqsArr.length / 2)
                  return (
                    <div key={index} className="question">
                      <div>{faq.question}</div>
                      <div>{faq.answer}</div>
                    </div>
                  );
                return null;
              })}
            </div>
            <div className={"questions-row"}>
              {FaqsArr.map((faq, index) => {
                if (index >= FaqsArr.length / 2)
                  return (
                    <div key={index} className="question">
                      <div>{faq.question}</div>
                      <div>{faq.answer}</div>
                    </div>
                  );
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
