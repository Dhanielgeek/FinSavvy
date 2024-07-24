import { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What is Fin Trading Finance?",
      answer:
        "FinTrading  is a platform that allows you to buy, sell, and trade cryptocurrencies securely. It offers investment plans with attractive returns.",
    },
    {
      question: "How do I get started?",
      answer:
        "To get started, simply click on the 'Get Started' button on our homepage. You'll be guided through a registration process to create your account.",
    },
    {
      question: "What are the investment plans offered?",
      answer:
        "We offer four investment plans: Starter Plan, Standard Plan, Advanced Plan, and Master Plan. Each plan has different daily ROI and minimum investment amounts.",
    },
    {
      question: "Is my investment safe?",
      answer:
        "Yes, FinTrading Finance prioritizes security. We use advanced encryption and security protocols to protect your investments and personal information.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact our customer support team via email at support@defi-skyspace.com or through our live chat feature available on our website.",
    },
  ];

  const toggleFAQ = (index: number) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <div
      className="w-full bg-blue-100 p-10 mt-20 phone:p-5 phone:mt-10"
      id="faq"
    >
      <motion.h1
        initial={false}
        transition={{
          type: "spring",
          stiffness: 30,
          mass: 1.5,
        }}
        animate={{ y: -100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        className="text-4xl text-blue-500 font-bold text-center phone:text-2xl"
      >
        Frequently Asked Questions
      </motion.h1>
      <div className="w-full flex flex-col gap-4 mt-10 phone:mt-5">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={false}
            transition={{
              type: "spring",
              stiffness: 30,
              mass: 1.5,
            }}
            animate={{ y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="w-full bg-white p-4 rounded-md shadow-md cursor-pointer phone:p-2 phone:text-sm"
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="text-lg font-semibold text-blue-500">
              {item.question}
            </h2>
            {selected === index && (
              <p className="text-gray-600 mt-2">{item.answer}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
