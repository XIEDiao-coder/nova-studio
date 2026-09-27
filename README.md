# Nova Studio

面向创业团队、小型企业与独立开发者的 AI Web Studio 官网。基于 Next.js App Router、TypeScript、Tailwind CSS、Framer Motion 与 Lucide。

## 本地运行

需要 Node.js 20.9 或更新的受支持版本。建议使用 Node.js 24 LTS。

```sh
npm install
npm run dev
```

打开 http://localhost:3000。使用锁定版本安装可运行 `npm ci`。

## 检查与正式运行

```sh
npm run lint
npx tsc --noEmit
npm run build
npm start
```

## 内容与结构

- `src/app/page.tsx`：页面模块顺序。
- `src/components/`：导航、首屏、服务、案例、流程、套餐、优势、FAQ、联系与页脚。
- `src/components/mockups/`：三个独立的概念产品界面。展示控件为非交互式视觉元素，通过图片语义提供整体说明。
- `src/content/home.ts`：导航、服务、案例、合作流程、套餐、优势与 FAQ 数据。
- `src/config/site.ts`：品牌信息、联系邮箱与邮件咨询模板。
- `src/app/studio.css`：品牌视觉、公共组件与页面布局。
- `src/app/mockups.css`：概念界面样式。
- `src/app/responsive.css`：移动端与平板适配、减少动态效果设置。
- `src/app/layout.tsx`：中文语言属性、页面标题、描述与基础分享元数据。

## 启用真实咨询

在 `src/config/site.ts` 的 `site.email` 填入真实的收件邮箱。配置后，底部按钮会打开访客的邮件客户端，并预填项目需求模板。默认不发送数据、不保存需求；邮箱为空时明确显示“暂未开放在线咨询”。这是邮件咨询入口，不是站内表单。

## Vercel 部署

1. 将 `nova-studio` 目录作为独立 Git 项目推送到自己的仓库，或放在现有仓库中。
2. 在 Vercel 导入仓库；若它是子目录，将 Root Directory 设置为 `nova-studio`。
3. Framework Preset 选择 Next.js，构建命令为 `npm run build`，保持默认输出目录。
4. 部署前配置真实邮箱，核对套餐内容与价格，部署后绑定自己的域名。

当前未创建任何公网部署。网站没有需要配置的密钥或数据库。

## 后续扩展

- Blog：增加 `src/app/blog` 路由和文章内容源。
- CMS：保留内容类型，将 `src/content/home.ts` 的静态数据替换为服务端读取。
- 多语言：按语言拆分文案数据，再增加语言路由；当前页面为中英混排的中文版本。
- 联系表单：增加服务端提交处理、字段校验与垃圾信息防护，确认发送成功后再显示成功状态。
- Analytics：确定服务商后接入官方适配组件。
- SEO：确定正式域名后补充 canonical、sitemap 与 robots。

所有案例均为 Concept Demo，不代表真实客户或已发生的商业成果。示例应用中的数字为界面演示数据。
