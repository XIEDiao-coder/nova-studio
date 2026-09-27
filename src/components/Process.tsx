import { process } from "@/content/home";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
export default function Process() {
  return (
    <section id="process" className="section container">
      <Reveal>
        <div className="heading-row">
          <SectionHeading
            label="HOW WE WORK"
            title="每一步，都清晰可见。"
            description="从第一次交流到网站上线，保持简单、透明的合作。"
          />
          <span className="section-index">03 / PROCESS</span>
        </div>
        <ol className="process-grid">
          {process.map((step, i) => (
            <li key={step.title}>
              <div className="step-track">
                <span>0{i + 1}</span>
                <i />
              </div>
              <h3>{step.title}</h3>
              <h4>{step.name}</h4>
              <p>{step.description}</p>
              <span className="step-output">↳ {step.output}</span>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
