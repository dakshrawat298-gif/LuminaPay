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
- Vanilla JS multi-page routing: clicking nav links shows/hides page sections and updates header title
- Mobile viewport fixed with maximum-scale=1.0 / user-scalable=no to prevent input zoom
- overflow-x hidden on html/body + max-w-7xl mx-auto on all content wrappers
- Ethereum Mainnet network indicator with live gas display
- User profile snippet at sidebar bottom
- Sticky top header with Connect Wallet button, bell, and avatar
- Connect Wallet button: simulates async connection (1.2s delay), changes to green border + truncated address (0x4A...9B2E style), syncs to Settings page wallet display
- Dashboard page: 4 stat mini-cards, Recent Activity feed, 3 quick-action cards linking to other pages
- Invoices page: two metric cards, Create Invoice form (email, amount, description, due date, token), Generate Payment Link with spinner + success message, Invoice History table (3 rows, 1 Paid / 2 Pending)
- Clients page: table of 3 clients with paid totals and status badges
- Settings page: Profile form, Wallet connect card, Notifications toggles (interactive JS switches)
- Status badges: green pill (Paid), pulsing yellow pill (Pending)
- Copy Link buttons with clipboard API and visual feedback
- Fully responsive: sidebar collapses on mobile with blurred overlay, table min-width + overflow-x-auto prevents layout break, whitespace-nowrap on key cells
- Scrollbar styling, hover animations, glow effects throughout
