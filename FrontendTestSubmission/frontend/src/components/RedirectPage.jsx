import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRedirect } from "../services/api.jsx";

export default function RedirectPage() {
  const { shortCode } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAndRedirect = async () => {
      try {
        const res = await getRedirect(shortCode);
        if (res.longUrl) {
          window.location.href = res.longUrl;
        }
      } catch {
        setError("❌ Invalid or expired link");
      }
    };
    fetchAndRedirect();
  }, [shortCode]);

  return <h3>{error ? error : "Redirecting..."}</h3>;
}
