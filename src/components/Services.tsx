import {
  ArrowUpRight,
  Check,
  PanelsTopLeft,
  ScanLine,
  SlidersHorizontal,
} from "lucide-react";
import { services } from "@/content/home";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
const icons = [PanelsTopLeft, ScanLine, SlidersHorizontal];
export default function Services() {
  return (
    <section id="services" className="section container">
      <Reveal>
        <div className="heading-row">
          <SectionHeading
            label="WHAT WE DO"
            title="从一个想法，到一个好网站。"
            description="选择适合你的起点，剩下的交给我们一起完成。"
          />
          <span className="section-index">01 / SERVICES</span>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <article className="service-card" key={service.title}>
                <div className="service-top">
                  <Icon size={26} strokeWidth={1.3} />
                  <span>{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <h4>{service.name}</h4>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((item) => (
                    <li key={item}>
                      <Check size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  className="service-link"
                  href="#contact"
                  aria-label={`咨询 ${service.title}`}
                >
                  聊聊你的项目 <ArrowUpRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
