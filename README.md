# 🌌 LuminaPay — Programmable B2B Finance on Solana

<div align="center">
  <img src="https://img.shields.io/badge/NETWORK-SOLANA_MAINNET-14F195?style=for-the-badge&logo=solana&logoColor=black" />
  <img src="https://img.shields.io/badge/POWERED_BY-DODO_PAYMENTS-60A5FA?style=for-the-badge&logo=codeigniter&logoColor=white" />
  <img src="https://img.shields.io/badge/TRACK-SUPERTEAM_INDIA-FF9900?style=for-the-badge&logo=bitcoin&logoColor=white" />
</div>

<br>

**Built specifically for the Superteam Earn x Dodo Payments Frontier Hackathon Track.**

🔗 **Live MVP:** [luminipay--khushijjiidvhsg.replit.app](https://luminipay--khushijjiidvhsg.replit.app/)

📺 **2-Min Pitch/Demo:** [Watch on YouTube](https://youtube.com/shorts/YpjChVX_wQ8?si=sAtrPU9Y57J_OWao)


---

## 🚀 The Vision: B2B Finance That Doesn't Sleep

LuminaPay is a premium, programmable B2B invoicing platform built on Solana. It solves a critical problem for SaaS founders, freelancers, and global merchants: **The friction of cross-border B2B payments.** Currently, B2B payments involve high wire fees, banking friction, and days of settlement delays. LuminaPay utilizes the **Dodo Payments API** to enable instant, borderless stablecoin checkouts. Transactions are settled in seconds, giving SMEs and Web3 businesses true financial velocity.

---

## 📱 The "Built on Mobile" Underdog Story

This project isn't just about code; it's a statement on the true accessibility of Web3 and the Solana ecosystem. 

* **The Builder:** I am Daksh Rawat, a 19-year-old BBA student.
* **The Constraint:** I do not own a PC or a laptop.
* **The Execution:** LuminaPay's entire architecture—frontend UI, smart logic, Dodo API backend integration, and deployment—was orchestrated and built **entirely on an iPhone 13**.
* **The Secret Weapon:** Without traditional hardware, I leveraged an **AI Co-founder (Gemini 3.1 Pro)** to help me architect, debug, and structure the code line-by-line inside the Replit mobile browser IDE.

This project proves that with determination, AI leverage, and the right infrastructure (Solana x Dodo Payments), hardware is no longer a barrier to entry. The next billion Web3 users and builders can start from a smartphone.

---

## 🧩 Dodo Payments Integration & Architecture

LuminaPay relies heavily on the **Dodo Payments infrastructure** to provide a seamless merchant-facing experience:

1.  **Dynamic Payment Link Generation:** When a merchant creates an invoice, the Node.js backend communicates directly with the `api.dodopayments.com/v1/payments` endpoint.
2.  **Stablecoin Checkout:** The API programmatically generates a unique checkout session, allowing the client to pay in stablecoins (USDC/USDT) directly to the merchant.
3.  **Real-Time Data Handshake:** The frontend captures the generated link and instantly updates the live dashboard, eliminating the need for manual tracking.

---

## ✨ Key Features

* 💼 **Programmable Invoicing:** Generate professional Web3 B2B invoices in seconds.
* 💳 **Stablecoin Checkouts:** Powered by Dodo Payments, accepting USDC for real goods and services globally without banking friction.
* 💅 **Premium Glassmorphic UI:** A buttery-smooth, high-conversion interface featuring SweetAlert2 animations for a true "Silicon Valley" feel.
* 🔐 **Web3 Wallet Auth:** Seamless connection with Phantom and MetaMask wallets using native integration.
* 📱 **100% Mobile-First:** Designed, coded, and optimized entirely for mobile users.

---

## 🏗 How to run locally

If you wish to spin up the architecture locally, run these commands in your terminal:

```bash
git clone [https://github.com/dakshrawat298-gif/LuminaPay.git](https://github.com/dakshrawat298-gif/LuminaPay.git)
cd LuminaPay
npm install
node server.js
```

(Ensure you have a `.env` file with your `DODO_API_KEY` for the backend to function).

Designed & Developed with ❤️ for the Solana Ecosystem.
