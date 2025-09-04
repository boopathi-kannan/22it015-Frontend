import React from "react";

export default function URLCard({ url }) {
  return (
    <div className="card" style={{ marginBottom: "14px" }}>
      <p>
        <b>Original:</b> {url.original}
      </p>
      <p>
        <b>Short:</b>{" "}
        <a href={url.short} target="_blank" rel="noopener noreferrer">
          {url.short}
        </a>
      </p>
      <p>
        <b>Expiry:</b> {url.expiry || "No expiry"}
      </p>
      <p>
        <b>Clicks:</b> {url.clicks || 0}
      </p>
    </div>
  );
}
