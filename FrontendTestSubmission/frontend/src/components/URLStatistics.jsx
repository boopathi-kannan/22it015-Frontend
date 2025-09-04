import React, { useEffect, useState } from "react";
import { getAllURLs } from "../utils/storage";
import URLCard from "./URLCard";

export default function URLStatistics() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    setUrls(getAllURLs());
  }, []);

  return (
    <div>
      <h2>Statistics</h2>
      {urls.length === 0 ? (
        <p>No shortened URLs found.</p>
      ) : (
        urls.map((u, i) => <URLCard key={i} url={u} />)
      )}
    </div>
  );
}
