import React, { useState } from "react";
import "./FAQ.css";
import Footer from "./Footer.jsx";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What courses are available on this platform?",
      answer:
        "We offer courses in Human-Computer Interaction (HCI), Object-Oriented Software Engineering (OOSE), and Information Systems Engineering (ISE). These courses are designed to help you understand key concepts and skills needed to excel in the field of software engineering.",
    },
    {
      question: "Are the courses free?",
      answer:
        "Yes, all the courses on this platform are completely free. You do not need to pay for any course or material to get started.",
    },
    {
      question: "Do I need to create an account to access the courses?",
      answer:
        "No, there is no need to create an account. You can access all the course materials directly without needing to sign up or log in.",
    },
    {
      question: "Can I take the courses at my own pace?",
      answer:
        "Absolutely! You can learn at your own pace. The content is available for you to explore anytime, anywhere, as long as you have an internet connection.",
    },
    {
      question: "Do I receive a certificate upon completion of the courses?",
      answer:
        "Currently, the courses do not offer certificates. However, you will gain valuable knowledge and skills that can help you in your academic or professional career.",
    },
    {
      question: "How do I start learning?",
      answer:
        "Simply visit the Courses section on the website, choose a subject that interests you, and begin exploring the course materials. There are no sign-ups or enrollments required.",
    },
    {
      question:
        "Is there any support if I have questions about the course content?",
      answer:
        "While we don't offer direct support through this website, you can always refer to the course materials, explore related resources, or leave a comment in the course discussion if applicable. Feel free to reach out through the Contact page if you need any assistance.",
    },
    {
      question: "Can I share the course materials with others?",
      answer:
        "Yes, you can share the course links with others. Our platform is designed to be open and accessible to anyone who is interested in learning.",
    },
    {
      question: "How do I stay updated with new courses or content?",
      answer:
        "Since there is no login or enrollment required, we recommend checking the website periodically for any new updates. You can also follow us on social media.",
    },
    {
      question: "Can I suggest new courses or topics?",
      answer:
        "Yes, we welcome suggestions! If you have a specific topic you'd like us to cover in future courses, please reach out to us via the Contact page.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => toggleAnswer(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FAQ;
