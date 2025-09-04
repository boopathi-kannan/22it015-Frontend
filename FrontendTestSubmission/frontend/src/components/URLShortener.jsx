import React, { useState } from "react";
import { registerUser } from "../services/api.jsx";

export default function RegisterForm() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const userData = {
    email: "boopathikannan@123gmail.com",
    name: "Boopathikannan",
    mobileNo: "8946072879",
    githubUsername: "boopathi-kannan",
    rollNo: "22it015",
    accessCode: "BUeZuD",
  };

  const handleRegister = async () => {
    try {
      const res = await registerUser(userData);
      setResult(res);
      setError(null);
    } catch {
      setError("❌ Registration failed. Please try again.");
      setResult(null);
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <button onClick={handleRegister}>Register</button>

      {result && (
        <div style={{ marginTop: "10px", color: "green" }}>
          <h4>✅ Registered Successfully</h4>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
