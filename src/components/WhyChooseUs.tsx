import { Code2, Focus, Sparkles } from "lucide-react";
import { advantages } from "@/content/home";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
const icons = [Sparkles, Code2, Focus];
export default function WhyChooseUs() {
  return (
    <section className="section container why-section">
      <Reveal>
        <SectionHeading
          label="THE NOVA DIFFERENCE"
          title="小型工作室，认真对待每个想法。"
        />
        <div className="advantages-grid">
          {advantages.map((item, i) => {
            const Icon = icons[i];
            return (
              <article key={item.title}>
                <Icon size={25} strokeWidth={1.4} />
                <span>{item.title}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
