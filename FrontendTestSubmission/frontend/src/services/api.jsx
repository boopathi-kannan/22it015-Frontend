// src/services/api.jsx
import axios from "axios";

const REGISTER_API = "http://20.244.56.144/evaluation-service";

// ✅ User Registration (real API with axios)
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${REGISTER_API}/register`, userData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// ----------------------------
// 🔹 Local URL Shortener (no backend)
// ----------------------------
const STORAGE_KEY = "shortenedUrls";

const saveUrls = (urls) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(urls));
};

const loadUrls = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

const generateShortCode = () => Math.random().toString(36).substring(2, 7);

// ✅ Create Short URL
export const createShortUrl = async (longUrl) => {
  const urls = loadUrls();
  const shortCode = generateShortCode();

  const newUrl = {
    shortCode,
    longUrl,
    createdAt: new Date().toISOString(),
    clicks: 0,
  };

  urls.push(newUrl);
  saveUrls(urls);

  return { shortUrl: `${window.location.origin}/${shortCode}`, ...newUrl };
};

// ✅ Get Stats
export const getStats = async (shortCode) => {
  const urls = loadUrls();
  const url = urls.find((u) => u.shortCode === shortCode);
  if (!url) throw new Error("Not found");
  return url;
};

// ✅ Get Redirect
export const getRedirect = async (shortCode) => {
  const urls = loadUrls();
  const url = urls.find((u) => u.shortCode === shortCode);
  if (!url) throw new Error("Not found");

  url.clicks += 1;
  saveUrls(urls);
  return url;
};

// ✅ Get All URLs
export const getAllUrls = async () => {
  return loadUrls();
};
