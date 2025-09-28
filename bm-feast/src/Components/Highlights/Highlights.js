import React from "react";
import "./Highlights.css";

const items = [
  {
    title: "Lightning-fast Delivery",
    desc: "Hot and fresh at your door—most orders delivered under 30 minutes.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 13h10l-4 8h2l6-12H9l4-8H7L3 13z" />
      </svg>
    ),
  },
  {
    title: "Fresh, Clean Ingredients",
    desc: "Locally sourced veggies, quality proteins, and zero compromises.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21C12 21 5 16 5 10a7 7 0 0 1 14 0c0 6-7 11-7 11zM9 10a3 3 0 0 1 6 0" />
      </svg>
    ),
  },
  {
    title: "One-Tap Checkout",
    desc: "Simple cart, transparent pricing, and secure payment flow.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 6h2l2 12h10l2-8H7" />
        <circle cx="10" cy="20" r="1.5" />
        <circle cx="16" cy="20" r="1.5" />
      </svg>
    ),
  },
];

export default function Highlights() {
  return (
    <section className="hl" aria-label="Service highlights">
      <div className="hl__wrap">
        {items.map((it) => (
          <article key={it.title} className="hl__card">
            <div className="hl__icon">{it.icon}</div>
            <h3 className="hl__title">{it.title}</h3>
            <p className="hl__desc">{it.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
