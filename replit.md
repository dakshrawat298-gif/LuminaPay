# LuminaPay — Web3 B2B Invoicing Dashboard

## Overview
A single-page, production-ready Web3 B2B invoicing dashboard with a "Midnight Dark & Frosted Glass" design system.

## Tech Stack
- Pure HTML5 (single `index.html`)
- Tailwind CSS via CDN
- Lucide Icons via CDN
- Vanilla JavaScript (no frameworks)
- Inter font from Google Fonts

## Served By
- `static-web-server` on port 80 via the "Serve static" workflow

## Features
- Fixed glassmorphism sidebar with navigation (Dashboard, Invoices, Clients, Settings)
- Active state on Invoices nav link
- Ethereum Mainnet network indicator with live gas display
- User profile snippet at sidebar bottom
- Sticky top header with notifications and search
- Two metric cards: Total Revenue ($124,500 USDC) and Outstanding Invoices ($12,350 USDC)
- Create Invoice form with: client email, amount (USDC badge), description, due date, payment token selector
- Generate Payment Link button with loading spinner and success message
- Invoice History table with 3 dummy rows (1 Paid, 2 Pending)
- Status badges: green pill (Paid), pulsing yellow pill (Pending)
- Copy Link buttons with clipboard API and visual feedback
- Fully responsive: sidebar collapses on mobile with overlay
- Scrollbar styling, hover animations, glow effects throughout
