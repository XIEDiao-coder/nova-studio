import { ArrowDown, ArrowUpRight, Code2, Layers, Zap } from "lucide-react";
import MeetingMockup from "./mockups/MeetingMockup";
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-label">
            <span className="label-star">✳</span> INDEPENDENT STUDIO. AMBITIOUS
            IDEAS.
          </div>
          <h1>
            Build websites
            <br />
            that turn ideas
            <br />
            into{" "}
            <span className="hero-accent">
              products
              <svg
                viewBox="0 0 350 16"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 10Q155-5 348 8M14 15Q180 3 325 13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <span className="title-period">.</span>
          </h1>
          <h2>为你的产品，打造下一代网站体验。</h2>
          <p className="hero-description">
            为创业团队、小型企业与独立开发者打造现代化网站。
            <br className="desktop-break" />
            结合 AI 与现代 Web 技术，让好想法更快上线。
          </p>
          <div className="hero-actions">
            <a href="#contact" className="button">
              Start a Project <ArrowUpRight size={17} />
            </a>
            <a href="#projects" className="text-link">
              View Portfolio <ArrowDown size={16} />
            </a>
          </div>
          <div className="hero-note">
            <span /> 从产品价值出发 · 从第一像素到正式上线
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-caption">
            <span>
              <span className="tiny-cross">+</span> IDEAS, MADE REAL.
            </span>
            <span>CONCEPT / 001</span>
          </div>
          <div className="hero-window">
            <MeetingMockup />
          </div>
          <div className="float-chip">
            <span className="float-chip-icon">
              <Code2 size={18} />
            </span>
            <div>
              <b>Built for what&apos;s next.</b>
              <span>Design → Develop → Launch</span>
            </div>
            <span className="float-chip-star">✦</span>
          </div>
          <div className="visual-footnote">
            <span>DESIGNED WITH INTENTION</span>
            <span>BUILT WITH PRECISION ↗</span>
          </div>
        </div>
      </div>
      <div className="container hero-strip">
        <span className="strip-label">SMALL STUDIO. BIG POSSIBILITIES.</span>
        <div>
          <span>
            <Zap />
            AI-enhanced workflow
          </span>
          <span>
            <Layers />
            Thoughtful design
          </span>
          <span>
            <Code2 />
            Modern development
          </span>
        </div>
      </div>
    </section>
  );
}
