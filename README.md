# GRE Vocabulary Learning Website

一个帮助学习GRE词汇的交互式网站，支持搜索、分页和记忆跟踪功能。

## 功能特性

- 📚 **丰富的词汇库**: 包含50+ GRE核心词汇，每个词汇都有详细的英文和中文释义
- 🔍 **智能搜索**: 支持英文和中文搜索，可以搜索单词、释义、例句等
- 📄 **分页浏览**: 每页显示20个单词，支持快速翻页
- ✅ **记忆跟踪**: 点击勾选已记住的单词，数据保存在本地存储中
- 🎨 **美观界面**: 现代化的UI设计，响应式布局
- 📱 **移动友好**: 支持手机、平板和桌面设备

## 技术栈

- **前端框架**: Next.js 14 (App Router)
- **样式**: 自定义CSS (无外部依赖)
- **图标**: 内置SVG图标
- **语言**: TypeScript
- **部署**: Vercel

## 本地开发

1. 安装依赖:
```bash
npm install
```

2. 启动开发服务器:
```bash
npm run dev
```

3. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 项目特点

- ✅ **零外部依赖**: 无需安装Tailwind CSS或其他UI库
- ✅ **内置样式**: 使用自定义CSS，包含所有必要的样式类
- ✅ **内置图标**: 使用SVG图标，无需外部图标库
- ✅ **TypeScript支持**: 完整的类型定义
- ✅ **响应式设计**: 支持手机、平板和桌面
- ✅ **本地存储**: 记忆状态保存在浏览器本地
- ✅ **零配置部署**: 可直接部署到Vercel

## 部署到Vercel

### 方法1: 通过Vercel CLI

1. 安装Vercel CLI:
```bash
npm i -g vercel
```

2. 在项目根目录运行:
```bash
vercel
```

3. 按照提示完成部署

### 方法2: 通过Vercel网站

1. 将代码推送到GitHub仓库
2. 访问 [vercel.com](https://vercel.com)
3. 点击"New Project"
4. 导入你的GitHub仓库
5. Vercel会自动检测Next.js项目并完成部署

## 项目结构

```
├── app/
│   ├── globals.css          # 全局样式
│   ├── layout.tsx           # 根布局组件
│   └── page.tsx             # 主页面组件
├── lib/
│   └── vocabulary.ts        # 词汇数据
├── package.json             # 项目依赖
├── tailwind.config.js       # Tailwind配置
├── tsconfig.json            # TypeScript配置
└── vercel.json              # Vercel部署配置
```

## 自定义词汇

要添加更多词汇，编辑 `lib/vocabulary.ts` 文件中的 `vocabularyData` 数组。每个词汇对象包含以下字段：

- `id`: 唯一标识符
- `word`: 英文单词
- `pronunciation`: 音标
- `definition`: 英文释义
- `chineseDefinition`: 中文释义
- `example`: 英文例句
- `chineseExample`: 中文例句
- `difficulty`: 难度等级 (easy/medium/hard)
- `category`: 词汇分类

## 贡献

欢迎提交Issue和Pull Request来改进这个项目！

## 许可证

MIT License
