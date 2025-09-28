# 🍽️ BM Feast — React Online Food Ordering Platform (React + Router + Context API)

[![Live Demo - Netlify](https://img.shields.io/badge/Live%20Demo-Netlify-00C7B7?style=for-the-badge)](https://urstrulybhavana-bm-feast-app.netlify.app)
![Made with Love](https://img.shields.io/badge/Made%20with-%F0%9F%92%96%20by%20Bhavana-brightgreen?style=for-the-badge)

---

## 📽️ Watch Full Demo on YouTube
[![BM Feast Demo](https://img.youtube.com/vi/kZMpLhZtglM/maxresdefault.jpg)](https://youtu.be/kZMpLhZtglM)

---

## 🌟 Overview

**BM Feast** is a modern, responsive food-ordering UI built with **React**. Users can browse categories, filter dishes in real time, add items to a cart with live totals, and complete a clean checkout flow. The app uses **React Router** for navigation and **Context API** for lightweight global state (cart + auth).

---

## ✨ Features

- 🔎 **Real-time Search** – Instant filtering of dishes as you type  
- 🗂️ **Categorized Menu** – Browse by cuisine/type with quick toggles  
- 🛒 **Robust Cart** – Add/remove items, quantity controls, live subtotal/total  
- 🚫 **Guarded Checkout** – “Proceed to Checkout” is **disabled** when the cart is empty  
- 💵 **Currency Formatting** – Totals via `Intl.NumberFormat` (USD)  
- 🔐 **Accessible Login Modal**
  - Body **scroll-lock** with scroll-position restore  
  - Close via **ESC**, **overlay click**, or the **close button**  
  - Keyboard/focus friendly  
- 🧭 **Active Navigation** – Correct highlighting using `NavLink` (`end` on Home)  
- 📱 **Responsive UI** – Mobile-first CSS; cart table is horizontally scrollable on small screens  
- ♻️ **Reusable Components** – Navbar, Footer, FoodItem cards, etc.  
- 🧠 **Context API** – Lightweight global state without extra deps

---

## 🛠️ Built With

**Tech Stack**

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat&logo=reactrouter&logoColor=white)
![Context API](https://img.shields.io/badge/State-Context%20API-764ABC?style=flat)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white)
![Netlify](https://img.shields.io/badge/Hosted_on-Netlify-00C7B7?style=flat)

---

## 📁 Folder Structure

```bash
BM-Feast-Online-Delivery-App/
├── public/
│   └── index.html
├── src/
│   ├── Components/
│   │   ├── AppDownload/
│   │   │   ├── AppDownload.js
│   │   │   └── AppDownload.css
│   │   ├── ExploreMenu/
│   │   │   ├── ExploreMenu.js
│   │   │   └── ExploreMenu.css
│   │   ├── FoodDisplay/
│   │   │   ├── FoodDisplay.js
│   │   │   └── FoodDisplay.css
│   │   ├── FoodItem/
│   │   │   ├── FoodItem.js
│   │   │   └── FoodItem.css
│   │   ├── Footer/
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   ├── LoginPopup/
│   │   │   ├── LoginPopup.js
│   │   │   └── LoginPopup.css
│   │   └── Navbar/
│   │       ├── Navbar.js
│   │       └── Navbar.css
│   ├── Pages/
│   │   ├── Cart/
│   │   │   ├── Cart.js
│   │   │   └── Cart.css
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   └── Home.css
│   │   └── PlaceOrder/
│   │       ├── PlaceOrder.js
│   │       └── PlaceOrder.css
│   ├── context/
│   │   └── StoreContext.js
│   ├── assets/
│   ├── App.js
│   ├── index.css
│   └── index.js
├── README.md
└── package.json
```
---

📝 Project Demonstration
✔ Landing page with hero, highlights, and category chips
✔ Search bar filters dishes instantly
✔ Add/remove items; quantities update live in the cart
✔ Subtotal, delivery, total computed with proper currency formatting
✔ Checkout button remains disabled until the cart has items
✔ Place Order page collects delivery details
✔ Login modal with ESC/overlay close + background scroll-lock
✔ Active nav states across routes (Home, Menu, Mobile-App, Contact)
✔ Fully responsive; cart table scrolls horizontally on small screens
---

💻 Installation
```
# Clone the repository
git clone https://github.com/UrstrulyBhavana/BM-Feast-Online-Delivery-App.git
cd BM-Feast-Online-Delivery-App

# Install dependencies
npm install

# Start development
npm start

# Build for production
npm run build
```
---

🔗 Useful Links

🌐 Live App: https://urstrulybhavana-bm-feast-app.netlify.app

🎥 YouTube Demo: https://youtu.be/kZMpLhZtglM

---

🔗  Data / API

This project uses mocked data solely for demonstration purposes

---

👩‍💻 Author

Linga Bhavana — Frontend Developer
🐙 GitHub: https://github.com/UrstrulyBhavana

📧 Email: urstrulybhavana1432@gmail.com

---

📜 License

This project is licensed under the MIT License. See the LICENSE file for details.

⭐ If you like this project, please star the repo and share the demo video!
