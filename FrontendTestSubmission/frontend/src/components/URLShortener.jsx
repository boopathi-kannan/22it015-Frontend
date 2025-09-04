import React, { useState } from "react";
import { validateURL, validateExpiry } from "../utils/validation";
import { saveURL } from "../utils/storage";
import { log } from "../utils/logger";
import URLCard from "./URLCard";

export default function URLShortener() {
  const [urls, setUrls] = useState([]);
  const [inputs, setInputs] = useState([{ original: "", expiry: "", code: "" }]);

  const handleChange = (i, field, value) => {
    const newInputs = [...inputs];
    newInputs[i][field] = value;
    setInputs(newInputs);
  };

  const addField = () => {
    if (inputs.length < 5) {
      setInputs([...inputs, { original: "", expiry: "", code: "" }]);
    }
  };

  const handleShorten = () => {
    let valid = true;
    const newUrls = inputs.map((input) => {
      if (!validateURL(input.original)) {
        alert(`Invalid URL: ${input.original}`);
        valid = false;
        return null;
      }
      if (input.expiry && !validateExpiry(input.expiry)) {
        alert(`Invalid expiry time: ${input.expiry}`);
        valid = false;
        return null;
      }

      const short = `https://short.ly/${input.code || Math.random().toString(36).substr(2, 6)}`;
      const expiryDate = input.expiry
        ? new Date(Date.now() + input.expiry * 60000).toLocaleString()
        : null;

      const urlObj = {
        original: input.original,
        short,
        expiry: expiryDate,
        clicks: 0,
      };

      saveURL(urlObj);
      log("URL created", urlObj);
      return urlObj;
    });

    if (valid) {
      setUrls([...urls, ...newUrls.filter((u) => u !== null)]);
    }
  };

  return (
    <div>
      <h2>URL Shortener</h2>

      {inputs.map((input, i) => (
        <div key={i} className="row" style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Enter long URL"
            className="input"
            value={input.original}
            onChange={(e) => handleChange(i, "original", e.target.value)}
          />
          <input
            type="number"
            placeholder="Expiry (minutes)"
            className="input"
            value={input.expiry}
            onChange={(e) => handleChange(i, "expiry", e.target.value)}
          />
          <input
            type="text"
            placeholder="Preferred shortcode"
            className="input"
            value={input.code}
            onChange={(e) => handleChange(i, "code", e.target.value)}
          />
        </div>
      ))}

      <button className="btn" onClick={addField} disabled={inputs.length >= 5}>
        + Add URL
      </button>
      <button className="btn" onClick={handleShorten} style={{ marginLeft: "10px" }}>
        Shorten
      </button>

      <h3 style={{ marginTop: "20px" }}>Results</h3>
      {urls.length === 0 ? <p>No URLs yet.</p> : urls.map((u, i) => <URLCard key={i} url={u} />)}
    </div>
  );
}
