import type { Plan, Project, Service } from "@/types/content";
export const navigation = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];
export const services: Service[] = [
  {
    number: "01",
    title: "Landing Page",
    name: "让好产品，被一眼看见。",
    description: "为 AI 产品、SaaS 与新项目发布打造聚焦价值的产品展示页面。",
    features: ["页面设计与前端开发", "响应式适配", "部署上线"],
  },
  {
    number: "02",
    title: "Business Website",
    name: "让品牌，有一个专业的起点。",
    description: "为中小企业、工作室与品牌建立清晰、完整的线上展示窗口。",
    features: ["首页与产品介绍", "关于与联系页面", "统一的品牌体验"],
  },
  {
    number: "03",
    title: "Website Optimization",
    name: "让现有网站，更进一步。",
    description: "从界面到浏览体验，重新梳理已有网站，让产品信息更容易被理解。",
    features: ["UI 视觉优化", "页面结构重构", "用户体验提升"],
  },
];
export const projects: Project[] = [
  {
    id: "meeting",
    name: "AI Meeting Assistant",
    category: "AI SaaS Landing Page",
    description:
      "把复杂的 AI 能力变成直观的产品体验。通过会议摘要与行动项，展示产品如何帮助团队。",
    tags: ["AI / SaaS", "Product design", "Development"],
  },
  {
    id: "commerce",
    name: "Global E-commerce Brand",
    category: "品牌与产品展示网站",
    description: "以克制的视觉、清晰的产品卖点，为出海品牌建立一致的线上形象。",
    tags: ["E-commerce", "Brand website"],
  },
  {
    id: "developer",
    name: "Developer Tool",
    category: "开发者工具官网",
    description:
      "用代码示例、简洁的功能结构与清晰的入门路径，让开发者快速理解工具价值。",
    tags: ["Developer tools", "Landing page"],
  },
];
export const process = [
  {
    title: "Discovery",
    name: "需求沟通",
    description: "了解你的产品、目标客户与业务目标，明确项目范围。",
    output: "需求与范围确认",
  },
  {
    title: "Strategy",
    name: "方案规划",
    description: "梳理页面结构、内容重点与视觉方向，建立共同预期。",
    output: "页面结构与设计方向",
  },
  {
    title: "Development",
    name: "开发制作",
    description: "完成界面与交互，适配不同屏幕，并根据反馈调整。",
    output: "可体验的网站预览",
  },
  {
    title: "Launch",
    name: "上线交付",
    description: "完成上线检查与部署，交付代码和基础维护说明。",
    output: "正式网站与项目文件",
  },
];
export const plans: Plan[] = [
  {
    name: "Starter",
    subtitle: "Landing Page",
    price: "999",
    description: "为一个好想法，开启第一步。",
    features: [
      "单页面设计与开发",
      "桌面与移动端响应式适配",
      "基础页面 SEO",
      "部署上线与使用说明",
    ],
  },
  {
    name: "Business",
    subtitle: "Website",
    price: "1,999",
    description: "为成长中的业务，建立完整形象。",
    features: [
      "3–5 个页面设计与开发",
      "产品与服务内容展示",
      "关于与联系页面",
      "桌面与移动端响应式适配",
      "基础页面 SEO 与部署交付",
    ],
    featured: true,
  },
  {
    name: "Custom",
    subtitle: "Custom Solution",
    price: "Let's talk",
    description: "为独特的需求，找到合适的方案。",
    features: [
      "根据业务需求规划范围",
      "定制页面与交互",
      "现有网站升级与重构",
      "可协商持续维护与优化",
    ],
  },
];
export const advantages = [
  {
    title: "AI Enhanced Workflow",
    name: "更高效的工作方式",
    description:
      "用 AI 辅助原型与开发，将更多时间留给产品表达、细节打磨与交付检查。",
  },
  {
    title: "Modern Technology",
    name: "为长期使用而构建",
    description:
      "采用 Next.js、TypeScript 与组件化结构，让网站易维护，也能跟上业务变化。",
  },
  {
    title: "Business Focus",
    name: "从你的业务目标出发",
    description:
      "围绕客户关心的问题组织内容，让访客理解产品价值，并找到下一步行动。",
  },
];
export const faqs = [
  {
    question: "一个网站通常需要多久完成？",
    answer:
      "一般为 7–14 天，具体取决于页面数量、功能复杂度与内容准备情况。需求确认后会提供明确的交付计划。",
  },
  {
    question: "没有设计稿或完整文案，也可以开始吗？",
    answer:
      "可以。我们会先了解你的产品、目标客户与参考风格，再规划页面结构和视觉方向。你需要提供真实的业务信息与必要素材。",
  },
  {
    question: "项目过程中可以修改吗？",
    answer:
      "可以，项目包含约定范围内的合理修改。具体轮次与修改范围会在开始前确认；新增页面或功能将单独评估。",
  },
  {
    question: "上线后提供维护服务吗？",
    answer:
      "支持后续内容更新、体验优化与持续维护。维护范围和费用可根据实际需求另行约定，交付时也会提供基础使用说明。",
  },
];
