# 🚀 CSTI 部署完整指南

## 当前状态

✅ 本地测试服务器已启动
📍 访问地址：http://localhost:3000

## 📋 部署到 Vercel 的步骤

### 方案 1：通过 GitHub 部署（推荐，最简单）

#### 步骤 1：在 GitHub 创建仓库

1. 访问 https://github.com/new
2. 仓库名称：`csti-test`（或其他你喜欢的名字）
3. 设为 Public（公开）
4. **不要** 勾选 "Initialize with README"
5. 点击 "Create repository"

#### 步骤 2：推送代码到 GitHub

在命令行运行以下命令（替换为你的仓库地址）：

```bash
cd /d "D:\computer_science\nju\拓展学习\other\csti"

# 关联 GitHub 仓库
git remote add origin https://github.com/YOUR_USERNAME/csti-test.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

> ⚠️ 注意：把 `YOUR_USERNAME` 替换为你的 GitHub 用户名

#### 步骤 3：在 Vercel 部署

1. 访问 https://vercel.com
2. 使用 GitHub 账号登录
3. 点击 "Add New..." → "Project"
4. 找到 `csti-test` 仓库，点击 "Import"
5. 保持默认设置，点击 "Deploy"
6. 等待 1-2 分钟，部署完成！

#### 步骤 4：获取你的链接

部署完成后，你会获得类似这样的链接：
```
https://csti-test.vercel.app
```

**这个链接可以分享给任何人访问！** ✅

---

### 方案 2：使用 Vercel CLI（更快捷）

#### 步骤 1：安装 Vercel CLI

```bash
npm i -g vercel
```

#### 步骤 2：部署

```bash
cd /d "D:\computer_science\nju\拓展学习\other\csti"
vercel
```

首次使用会要求登录，按照提示操作即可。

#### 步骤 3：发布到生产环境

```bash
vercel --prod
```

---

## 🌐 让其他人访问的几种方式

### 方式 1：Vercel 部署（最佳）

- ✅ 免费
- ✅ 自动 HTTPS
- ✅ 全球 CDN
- ✅ 自定义域名
- 📍 格式：`https://your-project.vercel.app`

### 方式 2：GitHub Pages

1. 推送到 GitHub
2. 进入仓库 Settings → Pages
3. 选择 main 分支
4. 保存

📍 格式：`https://your-username.github.io/csti-test`

### 方式 3：Netlify

1. 在 https://netlify.com 注册
2. 拖拽文件夹到部署区域
3. 完成！

📍 格式：`https://your-site.netlify.app`

---

## 📱 分享你的测试

部署完成后，你可以：

1. 把链接发到 QQ 群/微信群
2. 分享给朋友圈
3. 发到论坛/贴吧
4. 让朋友们也测测自己的 CS 人格！

---

## 🔧 常见问题

### Q: 本地可以访问但别人访问不了？
A: 确保已经成功部署到 Vercel/GitHub Pages 等平台，而不是只在本地运行。

### Q: 如何自定义域名？
A: 在 Vercel 的项目设置中，可以绑定自己的域名（需要 DNS 配置）。

### Q: 可以修改题目和类型吗？
A: 可以！编辑 `questions.js` 文件，然后重新提交到 Git。

### Q: 部署后更新代码怎么办？
A: 每次推送到 GitHub 后，Vercel 会自动重新部署。

---

## 🎉 开始部署吧！

选择你最喜欢的方式，5 分钟内就能让其他人访问你的 CSTI 测试！
