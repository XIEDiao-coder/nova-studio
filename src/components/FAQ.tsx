import { Plus } from "lucide-react";
import { faqs } from "@/content/home";
import SectionHeading from "./ui/SectionHeading";
export default function FAQ() {
  return (
    <section id="faq" className="section container faq-section">
      <SectionHeading
        label="A FEW GOOD QUESTIONS"
        title="你可能还想知道。"
        description="开始之前，先把问题聊清楚。"
      />
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <details key={faq.question} name="faq" className="faq-item">
            <summary>
              <span className="faq-index">0{i + 1}</span>
              <h3>{faq.question}</h3>
              <Plus size={18} />
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
