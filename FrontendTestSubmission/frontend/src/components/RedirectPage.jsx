import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RedirectPage() {
  const { code } = useParams();
  const [message, setMessage] = useState("Redirecting...");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("urls")) || [];
    const found = stored.find((item) => item.code === code);

    if (found) {
      const now = new Date();
      if (new Date(found.expiry) > now) {
     
        window.location.href = found.originalUrl;
      } else {
        setMessage("This link has expired!");
      }
    } else {
      setMessage("Invalid or unknown link.");
    }
  }, [code]);

  return (
    <div className="card">
      <h2>{message}</h2>
    </div>
  );
}
