# 💈 Barbershop App

> 🚧 **Work in progress** — this project is in its early stages and under active development.

A web application built for a local barber to bring his business online. Customers will be able to see the shop's services and prices, find its location and book appointments, making day-to-day work easier for the barber.

## ✨ Planned Features

- [x] Project setup with Next.js, TypeScript and Tailwind CSS
- [x] Shared layout with navigation bar and footer
- [x] Custom 404 (not found) page
- [ ] Home page with shop information
- [ ] Services and prices page
- [ ] Location and opening hours with an embedded map
- [ ] Online appointment booking
- [ ] Admin view for the barber to manage appointments and services
- [ ] Responsive design for mobile devices

## 🛠 Tech Stack

| Area | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| UI | React, Tailwind CSS |
| Code quality | ESLint |

## 📁 Project Structure

```
app/            # Pages and layout (App Router)
  layout.tsx    # Shared layout with Navbar and Footer
  page.tsx      # Home page
  not-found.tsx # Custom 404 page
components/     # Reusable UI components (Navbar, Footer)
```

## 🚀 Getting Started

**Prerequisites:** Node.js 20+ and npm

```bash
git clone https://github.com/Elchinn04/Barbershop-.git
cd Barbershop-
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

## 🔀 Workflow

Features are developed on separate branches (for example `feat/footer`) and merged into `main` through pull requests.

## 👤 Author

**Elchin Azizli** — [GitHub](https://github.com/Elchinn04) · [LinkedIn](https://www.linkedin.com/in/elchin-azizli-457113266/)
