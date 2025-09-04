import React, { useEffect, useState } from "react";
import { getAllUrls } from "../services/api.jsx";

export default function UrlList() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      const res = await getAllUrls();
      setUrls(res);
    };
    fetchUrls();
  }, []);

  return (
    <div>
      <h2>Saved URLs</h2>
      {urls.length === 0 ? (
        <p>No URLs found</p>
      ) : (
        <ul>
          {urls.map((url, idx) => (
            <li key={idx}>
              <p>
                <strong>Short:</strong>{" "}
                <a
                  href={`${window.location.origin}/${url.shortCode}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {window.location.origin}/{url.shortCode}
                </a>
              </p>
              <p>
                <strong>Long:</strong> {url.longUrl}
              </p>
              <p>
                <strong>Created:</strong> {new Date(url.createdAt).toString()}
              </p>
              <p>
                <strong>Clicks:</strong> {url.clicks}
              </p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
