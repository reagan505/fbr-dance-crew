# FBR Dance Crew Website

Modern, responsive, animated website for **FBR Dance Crew** including:

* Parallax hero
* Page transitions
* Animated mobile menu
* Dark/Light mode
* Booking form
* Gallery & crew sections
* Preloader with logo animation
* SEO optimized structure

---

## 🚀 One‑Click Deployment

Deploy instantly using the buttons below.

### **Netlify Deploy**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

### **Vercel Deploy**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 📦 Project Structure

```
/
├── index.html
├── home.css
├── script.js (optional if you want to separate)
├── assets/
│   ├── hero-bg.jpg
│   ├── logo.png
│   ├── gallery images...
│   └── crew portraits...
```

---

## 🛠 Local Development

### 1. Clone the project

```bash
git clone https://github.com/your-username/fbr-crew-website.git
cd fbr-crew-website
```

### 2. Start a local dev server (recommended)

Install **Live Server** extension in VS Code.
Right‑click **index.html** → **Open with Live Server**.

Or use Node:

```bash
npx serve
```

---

## 🌐 Deployment Instructions

### **Netlify Manual Deployment**

1. Go to [https://netlify.com](https://netlify.com)
2. Drag & drop the entire folder into the upload box
3. Done. Netlify will give you a live link immediately.

Or use the CLI:

```bash
npm install -g netlify-cli
netlify deploy
```

### **Vercel Manual Deployment**

1. Go to [https://vercel.com](https://vercel.com)
2. Click **New Project** → **Import**
3. Select your GitHub repo
4. Deploy

Or use the CLI:

```bash
npm i -g vercel
vercel
```

---

## 🔍 SEO Setup

Included SEO features:

* Meta description
* Mobile viewport
* Improved title structure
* Social preview tags (you can extend `index.html`)

Add/replace inside `<head>`:

```html
<meta property="og:title" content="FBR Dance Crew" />
<meta property="og:description" content="High‑energy choreography, shows & workshops." />
<meta property="og:image" content="assets/preview.jpg" />
<meta name="twitter:card" content="summary_large_image" />
```

---

## ✨ Features Implemented

* Fully responsive layout
* Parallax hero section
* Smooth page transitions
* Mobile menu animation
* Theme switch (dark/light)
* Form feedback animation
* Preloader with pulse animation
* Scroll reveal effects using IntersectionObserver

---

## 📸 Image Optimization Tips

* Compress all images with [https://tinypng.com](https://tinypng.com)
* Ideal hero image: **1920×1080**, JPG
* Crew portraits: **800×1000**, JPG or WEBP
* Gallery images: WEBP format recommended

---

## 🛡 License

You may modify, deploy, or commercialize this template freely.


