# CSTI - CS人格测试（离谱版）

一个类似 MBTI/SBTI 的搞笑 CS 人格测试网页应用 🎮

## 🎯 项目简介

CSTI (Counter-Strike Temperament Indicator) 是一个专为 CS 玩家设计的人格测试，通过 20 道题目分析你在游戏中的真实人格类型。

### 四个维度

- **C - Combat (战斗风格)**: 枪法刚猛 vs 老六阴人
- **S - Survival (生存策略)**: 白给送头 vs 苟活保命  
- **T - Teamwork (团队风格)**: 孤狼独狼 vs 团队混子
- **I - Intellect (思维方式)**: 战术大脑 vs 无脑冲锋

### 16+ 种离谱人格类型

包括：莽夫战神🔥、独狼刺客🐺、战术老六🦊、苟王之王👑、白给战神💪、团队混子🎪 等等！

## 🚀 本地运行

### 方法 1：直接打开

直接双击 `index.html` 文件即可在浏览器中打开。

### 方法 2：使用本地服务器

```bash
# 使用 Python (如果已安装)
python -m http.server 8000

# 或使用 Node.js 的 serve 包
npx serve .
```

然后访问 `http://localhost:8000`

## 🌐 部署到 Vercel（推荐）

### 步骤 1：准备 Git 仓库

```bash
cd "D:\computer_science\nju\拓展学习\other\csti"
git init
git add .
git commit -m "初始提交：CSTI CS人格测试"
```

### 步骤 2：推送到 GitHub

1. 在 GitHub 创建新仓库
2. 关联并推送代码：

```bash
git remote add origin https://github.com/你的用户名/csti-test.git
git branch -M main
git push -u origin main
```

### 步骤 3：部署到 Vercel

**方法 A：使用 Vercel 网站**

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "New Project"
3. 导入你的 GitHub 仓库
4. 点击 "Deploy"
5. 完成！你会获得一个可分享的链接

**方法 B：使用 Vercel CLI**

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel

# 生产环境部署
vercel --prod
```

### 步骤 4：分享链接

部署完成后，你会获得类似这样的链接：
```
https://csti-test.vercel.app
```

把这个链接分享给朋友，让他们也可以测试！

## 📱 使用方式

1. 打开网页
2. 点击"开始测试"
3. 回答 20 道题目（每题4个选项）
4. 查看你的 CSTI 人格类型
5. 分享结果给朋友！

## 🎨 特色功能

- ✨ 精美的渐变 UI 设计
- 📱 完全响应式，支持手机端
- 🎯 20 道精心设计的题目
- 🏆 16+ 种搞笑人格类型
- 📊 详细的维度分析
- 📤 一键分享结果
- 🎮 代表选手参考

## 🛠️ 技术栈

- HTML5
- CSS3 (渐变、动画、响应式)
- Vanilla JavaScript (ES6+)
- Vercel 部署

## 📝 自定义修改

如果你想修改题目或人格类型，编辑 `questions.js` 文件：

- `questions` 数组：修改测试题目
- `personalityTypes` 对象：修改人格类型描述

## ⚠️ 免责声明

本测试纯属娱乐，所有人格类型都是搞笑设定，请勿当真！

## 🎉 Enjoy!

祝你测试愉快！看看你是哪种 CS 人格类型 😄
