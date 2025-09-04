export function log(action, data = {}) {
  const timestamp = new Date().toLocaleString();
  console.log(`[${timestamp}] ${action}:`, data);
}
