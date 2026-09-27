export const site = {
  name: "Nova Studio",
  description:
    "为创业团队、小型企业和独立开发者打造现代化 Landing Page、产品展示网站与企业官网。",
  // 填入真实邮箱即可启用邮件咨询；留空时保持明确的占位状态。
  email: "",
};
export function inquiryHref() {
  const body =
    "你好 Nova Studio，\n\n项目 / 公司名称：\n产品与目标客户：\n希望制作的页面：\n预算范围：\n期望上线时间：\n参考网站：\n";
  return `mailto:${site.email}?subject=${encodeURIComponent("网站项目咨询")}&body=${encodeURIComponent(body)}`;
}
