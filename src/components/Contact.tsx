import { ArrowUpRight, Mail } from "lucide-react";
import { inquiryHref, site } from "@/config/site";
export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow" />
      <div className="container contact-inner">
        <span className="eyebrow">
          <span /> YOUR NEXT CHAPTER STARTS HERE
        </span>
        <h2>
          Ready to build
          <br />
          your <span>website?</span>
          <span className="contact-spark">✳</span>
        </h2>
        <p>一个想法，一次交流。一起把它变成真实的网站。</p>
        <a
          className="button"
          href={site.email ? inquiryHref() : "#contact-details"}
        >
          Start Your Project <ArrowUpRight size={18} />
        </a>
        <div id="contact-details" className="contact-details">
          <Mail size={16} />
          {site.email ? (
            <a href={inquiryHref()}>{site.email}</a>
          ) : (
            <span>联系邮箱待配置 · 暂未开放在线咨询</span>
          )}
        </div>
        <span className="contact-small">
          欢迎带着产品介绍、预期上线时间与预算，开始交流。
        </span>
      </div>
    </section>
  );
}
