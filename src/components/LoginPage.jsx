import React from "react";

export default function LoginPage() {
  return (
    <div>
      <h2>Login</h2>
      {/* Add login form and authentication logic here */}
      <form>
        <input type="text" placeholder="Username" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
