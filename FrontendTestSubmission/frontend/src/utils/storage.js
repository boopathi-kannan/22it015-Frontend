const STORAGE_KEY = "shortened_urls";


export function saveURL(urlObj) {
  let urls = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  urls.push(urlObj);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(urls));
}


export function getAllURLs() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}


export function registerClick(short) {
  let urls = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  urls = urls.map((u) =>
    u.short === short ? { ...u, clicks: (u.clicks || 0) + 1 } : u
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(urls));
}
