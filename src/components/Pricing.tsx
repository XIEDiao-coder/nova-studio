import { ArrowUpRight, Check } from "lucide-react";
import { plans } from "@/content/home";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
export default function Pricing() {
  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            label="SIMPLE PRICING"
            title="适合起步，也支持下一步。"
            description="清晰的交付范围，让每一份投入都有方向。"
          />
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article
                className={`pricing-card ${plan.featured ? "featured" : ""}`}
                key={plan.name}
              >
                {plan.featured && (
                  <span className="plan-badge">FOR GROWING BUSINESSES</span>
                )}
                <div className="plan-top">
                  <h3>{plan.name}</h3>
                  <span>{plan.subtitle}</span>
                </div>
                <div
                  className={`plan-price ${plan.name === "Custom" ? "custom-price" : ""}`}
                >
                  {plan.name !== "Custom" && <span>¥</span>}
                  {plan.price}
                  {plan.name !== "Custom" && <small>起</small>}
                </div>
                <p>{plan.description}</p>
                <a
                  href="#contact"
                  className={`button ${plan.featured ? "" : "button-outline"}`}
                  aria-label={`咨询 ${plan.name} 套餐`}
                >
                  {plan.name === "Custom" ? "Let's Talk" : `选择 ${plan.name}`}
                  <ArrowUpRight size={16} />
                </a>
                <div className="plan-divider" />
                <span className="plan-includes">WHAT&apos;S INCLUDED</span>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={15} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="pricing-note">
            最终报价根据页面数量、内容与功能需求确定。交付周期一般为 7–14
            天，具体以项目约定为准。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
