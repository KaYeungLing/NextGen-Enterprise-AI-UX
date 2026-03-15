# 🚀 NextGen Enterprise AI UX

[![Next.js](https://img.shields.io/badge/Framework-Next.js%2014-black?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

## 🌟 Overview
**NextGen Enterprise AI UX** is a reference implementation for high-performance, AI-driven financial dashboards. It demonstrates the intersection of **UX Engineering** and **Generative AI**, providing an intuitive interface for complex RAG-based data orchestration.

## 🏗️ Architecture & UX Philosophy
- **App Router Architecture:** Utilizing Next.js 14 server components for optimal SEO and performance.
- **Micro-Interaction System:** Built with `Framer Motion` to provide tactile feedback during AI streaming.
- **Design System:** A customized enterprise-grade theme using `TailwindCSS` and `Radix UI`.
- **AI Integration:** Seamless streaming of LLM responses using the `Vercel AI SDK`.

## 🛠️ Technical Stack
- **Frontend:** Next.js 14, React, TypeScript.
- **AI Orchestration:** OpenAI API, Anthropic Claude, LangChain.js.
- **State Management:** Zustand (Lightweight & Scalable).
- **Quality Assurance:** Vitest for unit testing, Playwright for E2E.

## 📂 Repository Structure
```text
├── app/                # App Router (Pages, Layouts, Server Actions)
├── components/         # Atomic Design System (atoms, molecules, organisms)
├── hooks/              # Custom React hooks for AI & UI logic
├── lib/                # Shared utilities, AI SDK config, and types
├── styles/             # Global CSS and Design System tokens
├── tests/              # Unit & Integration tests
├── .github/            # CI/CD Workflows (Auto-deploy & Testing)
└── README.md
```

## 🚀 Quick Start
```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

---
**Crafted by [Ka Yeung Ling](https://github.com/KaYeungLing)**  
*UX Engineer & AI Solution Architect*
