
export const logEvent = (type, message, data = {}) => {
  const logs = JSON.parse(localStorage.getItem("logs")) || [];
  const newLog = {
    timestamp: new Date().toISOString(),
    type,
    message,
    data,
  };
  logs.push(newLog);
  localStorage.setItem("logs", JSON.stringify(logs));
};
