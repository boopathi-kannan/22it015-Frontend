import React, { useState } from "react";
import { registerUser } from "../services/api.jsx";

export default function RegisterForm() {
  const [registrations, setRegistrations] = useState([]); // store multiple users
  const [error, setError] = useState(null);

  // static user data for now
  const userDataList = [
    {
      email: "boopathikannan@123gmail.com",
      name: "Boopathikannan",
      mobileNo: "8946072879",
      githubUsername: "boopathi-kannan",
      rollNo: "22it015",
      accessCode: "BUeZuD",
    },
    {
      email: "sampleuser@123gmail.com",
      name: "Sample User",
      mobileNo: "9876543210",
      githubUsername: "sample-github",
      rollNo: "22it020",
      accessCode: "ABc123",
    },
  ];

  const handleRegister = async () => {
    if (registrations.length >= 2) {
      setError("⚠️ Only 2 registrations allowed!");
      return;
    }

    try {
      const nextUser = userDataList[registrations.length]; // pick based on count
      const res = await registerUser(nextUser);

      setRegistrations([...registrations, res]); // save each response
      setError(null);
    } catch {
      setError("❌ Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>User Registration (Max 2)</h2>
      <button onClick={handleRegister} disabled={registrations.length >= 2}>
        Register Next User
      </button>

      {registrations.length > 0 && (
        <div style={{ marginTop: "10px" }}>
          <h4>✅ Registered Users</h4>
          {registrations.map((reg, idx) => (
            <pre key={idx}>{JSON.stringify(reg, null, 2)}</pre>
          ))}
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
