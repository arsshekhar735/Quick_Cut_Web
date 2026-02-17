import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Quick Cuts?",
    answer:
      "Quick Cuts is a smart salon discovery and virtual queue platform that helps you save time by avoiding long waiting lines at salons.",
  },
  {
    question: "How does the virtual queue system work?",
    answer:
      "You choose a salon and service, join the virtual queue, and receive real-time updates about your position and estimated waiting time.",
  },
  {
    question: "Do I need to create an account to use Quick Cuts?",
    answer:
      "Yes, creating an account allows you to track your queue status, manage bookings, and receive notifications.",
  },
  {
    question: "Is there any charge for using Quick Cuts?",
    answer:
      "No, Quick Cuts is completely free for customers. You only pay the salon directly for the services you receive.",
  },
  {
    question: "Can I cancel or leave the queue?",
    answer:
      "Yes, you can leave the queue at any time before your turn starts directly from your dashboard.",
  },
  {
    question: "How accurate is the estimated waiting time?",
    answer:
      "The estimated waiting time is calculated based on live salon data and queue movement, and updates dynamically as the queue changes.",
  },
  {
    question: "What happens if I arrive late at the salon?",
    answer:
      "If you arrive late, the salon may skip your turn depending on their policy. We recommend arriving a few minutes before your estimated time.",
  },
  {
    question: "Can I book multiple services at once?",
    answer:
      "Yes, you can select multiple services during booking, and the waiting time will adjust accordingly.",
  },
  {
    question: "Is Quick Cuts available for both men and women?",
    answer:
      "Absolutely. Quick Cuts partners with salons that provide services for men, women, and unisex customers.",
  },
  {
    question: "How do salons benefit from Quick Cuts?",
    answer:
      "Salons get better queue management, reduced crowding, improved customer satisfaction, and increased visibility to nearby customers.",
  },
  {
    question: "Do salons need special hardware or software?",
    answer:
      "No additional hardware is required. Salons can manage queues using the Quick Cuts web dashboard or mobile app.",
  },
  {
    question: "How will I receive notifications?",
    answer:
      "You will receive real-time notifications via the app and SMS when your turn is approaching.",
  },
  {
    question: "Is my personal data safe on Quick Cuts?",
    answer:
      "Yes, we take data security seriously. All personal information is securely stored and never shared without your consent.",
  },
  {
    question: "How can salons partner with Quick Cuts?",
    answer:
      "Salon owners can register through our website and complete a simple onboarding process to start accepting customers.",
  },
  {
    question: "What should I do if I face an issue with a booking?",
    answer:
      "You can contact our support team directly through the app, and we’ll help resolve the issue quickly.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Answers to common questions about Quick Cuts
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-48 px-6 pb-6" : "max-h-0 px-6"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
